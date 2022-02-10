import { StyledControlWrapper } from './styles';

interface Props {
  children: React.ReactNode;
}

export const ControlWrapper = ({ children }: Props) => (
  <StyledControlWrapper>{children}</StyledControlWrapper>
);
