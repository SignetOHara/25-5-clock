import { StyledPage } from './styles';

interface Props {
  children: React.ReactNode;
}

export const Page = ({ children }: Props) => (
  <StyledPage>{children}</StyledPage>
);
