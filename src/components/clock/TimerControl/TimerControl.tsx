import { StyledButton, StyledTimerControl } from './styles';
import { FaPlay, FaPause, FaSyncAlt } from 'react-icons/fa';

interface Props {
  resetHandler: () => void;
  startStopHandler: () => void;
}

export const TimerControl = ({ resetHandler, startStopHandler }: Props) => (
  <StyledTimerControl>
    <StyledButton id="start_stop" onClick={startStopHandler}>
      <FaPlay color="white" />
      <FaPause color="white" />
    </StyledButton>
    <StyledButton id="reset" onClick={resetHandler}>
      <FaSyncAlt color="white" />
    </StyledButton>
  </StyledTimerControl>
);
