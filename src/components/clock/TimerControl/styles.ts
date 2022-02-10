import styled from 'styled-components';

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
