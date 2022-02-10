import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export const ControlWrapper = ({ children }: Props) => (
  <StyledControlWrapper>{children}</StyledControlWrapper>
);

export const StyledControlWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
`;
