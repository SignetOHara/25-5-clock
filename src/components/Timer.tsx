import styled from 'styled-components';

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

const StyledTimer = styled.div`
  width: 20rem;
  border: 8px solid #13353a;
  height: 13rem;
  border-radius: 50px;
  margin: 20px auto 10px auto;
`;

const StyledHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
`;

const StyledTime = styled.div`
  font-size: 5rem;
  text-align: center;
`;
