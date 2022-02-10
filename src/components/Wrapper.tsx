import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: Props) => (
  <StyledWrapper>{children}</StyledWrapper>
);

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 34rem;
  height: 34rem;
  padding: 1rem;
`;
