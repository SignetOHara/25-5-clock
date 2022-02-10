import styled from 'styled-components';
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

export const StyledTimerControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  cursor: pointer;
  display: flex;
  font-size: 2rem;
`;
