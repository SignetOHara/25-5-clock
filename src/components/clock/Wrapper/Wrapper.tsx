import { StyledWrapper } from './styles';

interface Props {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: Props) => (
  <StyledWrapper>{children}</StyledWrapper>
);
