import { StyledControl, StyledButton, StyledControlButtons } from './styles';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

interface Props {
  id: string;
  text: string;
  length: number;
  lengthId: string;
  incBtnId: string;
  decBtnId: string;
  lengthClickHandler: (id: string) => void;
}

export const Control = ({
  id,
  text,
  length,
  incBtnId,
  decBtnId,
  lengthId,
  lengthClickHandler,
}: Props) => (
  <StyledControl id={id}>
    <div>{text}</div>
    <StyledControlButtons>
      <StyledButton id={decBtnId} onClick={() => lengthClickHandler(decBtnId)}>
        <FaArrowDown color="white" />
      </StyledButton>
      <div id={lengthId}>{length}</div>
      <StyledButton id={incBtnId} onClick={() => lengthClickHandler(incBtnId)}>
        <FaArrowUp color="white" />
      </StyledButton>
    </StyledControlButtons>
  </StyledControl>
);
