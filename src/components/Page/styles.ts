import styled from 'styled-components';

export const StyledPage = styled.main`
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
  color: ${(props) => props.theme.colors.white};
`;
