import { useState, useEffect, useRef } from 'react';

import { Page } from './components/Page/Page';
import { Wrapper } from './components/clock/Wrapper/Wrapper';
import { Title } from './components/clock/Title/Title';
import { ControlWrapper } from './components/clock/ControlWrapper/ControlWrapper';
import { Control } from './components/clock/Control/Control';
import { Timer } from './components/clock/Timer/Timer';
import { TimerControl } from './components/clock/TimerControl/TimerControl';

const DEFAULT_STATE = {
  sessionLength: 25,
  breakLength: 5,
  isActive: false,
  mode: 'session',
};

function App() {
  const [state, setState] = useState(DEFAULT_STATE);
  const [displayTime, setDisplayTime] = useState(state.sessionLength * 60);
  const alarm = useRef<HTMLAudioElement | null>(null);

  const formatTime = () => {
    let minutes = Math.floor(displayTime / 60).toString();
    let seconds = (displayTime % 60).toString();

    minutes = +minutes < 10 ? '0' + minutes : minutes;
    seconds = +seconds < 10 ? '0' + seconds : seconds;

    return `${minutes}:${seconds}`;
  };

  const startStopHandler = () => {
    setState((prev) => ({ ...state, isActive: !prev.isActive }));
  };

  useEffect(() => {
    setDisplayTime(state.sessionLength * 60);
  }, [state.sessionLength]);

  useEffect(() => {
    if (state.isActive && displayTime > 0) {
      const interval = setInterval(() => {
        setDisplayTime(displayTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (state.isActive && displayTime === 0) {
      if (alarm.current !== null) {
        alarm.current.play();
      }

      if (state.mode === 'session') {
        setState({ ...state, mode: 'break' });
        setDisplayTime(state.breakLength * 60);
      } else if (state.mode === 'break') {
        setState({ ...state, mode: 'session' });
        setDisplayTime(state.sessionLength * 60);
      }
    }
  }, [state, displayTime]);

  const resetHandler = () => {
    setState(DEFAULT_STATE);
    setDisplayTime(state.sessionLength * 60);
    if (alarm.current !== null) {
      alarm.current.pause();
      alarm.current.currentTime = 0;
    }
  };

  const lengthClickHandler = (id: string) => {
    switch (id) {
      case 'break-increment':
        if (state.breakLength >= 60) return;
        setState((prev) => ({ ...state, breakLength: prev.breakLength + 1 }));
        break;
      case 'break-decrement':
        if (state.breakLength <= 1) return;
        setState((prev) => ({ ...state, breakLength: prev.breakLength - 1 }));
        break;
      case 'session-increment':
        if (state.sessionLength >= 60) return;
        setState((prev) => ({
          ...state,
          sessionLength: prev.sessionLength + 1,
        }));
        break;
      case 'session-decrement':
        if (state.sessionLength <= 1) return;
        setState((prev) => ({
          ...state,
          sessionLength: prev.sessionLength - 1,
        }));
        break;
      default:
        throw new Error(
          'There is something wrong with the switch statement...'
        );
    }
  };

  return (
    <Page>
      <Wrapper>
        <Title />
        <ControlWrapper>
          <Control
            id="break-label"
            text="Break Length"
            length={state.breakLength}
            lengthClickHandler={lengthClickHandler}
            incBtnId="break-increment"
            decBtnId="break-decrement"
            lengthId="break-length"
          />
          <Control
            id="session-label"
            text="Session Length"
            length={state.sessionLength}
            lengthClickHandler={lengthClickHandler}
            incBtnId="session-increment"
            decBtnId="session-decrement"
            lengthId="session-length"
          />
        </ControlWrapper>
        <Timer text={state.mode} displayTime={formatTime()} />
        <TimerControl
          resetHandler={resetHandler}
          startStopHandler={startStopHandler}
        />
      </Wrapper>
      <audio
        id="beep"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        ref={alarm}
      />
    </Page>
  );
}

export default App;
