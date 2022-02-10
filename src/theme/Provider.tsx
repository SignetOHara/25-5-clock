import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { theme } from './theme';
import { Reset } from './reset';

interface Props {
  children: React.ReactNode;
}

export const Provider = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <Reset />
    <Normalize />
    {children}
  </ThemeProvider>
);
