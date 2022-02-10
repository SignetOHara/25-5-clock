import { StyledTimer, StyledHeading, StyledTime } from './styles';

interface Props {
  displayTime: string;
  text: string;
}

export const Timer = ({ displayTime, text }: Props) => (
  <StyledTimer>
    <StyledHeading id="timer-label">{text}</StyledHeading>
    <StyledTime id="time-left">{displayTime}</StyledTime>
  </StyledTimer>
);
