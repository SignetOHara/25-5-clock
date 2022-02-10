import styled from 'styled-components';

export const StyledControl = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledControlButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  cursor: pointer;
`;
