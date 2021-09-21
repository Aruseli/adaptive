import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'normalize.css';
import { StylesProvider, createGenerateClassName, ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../imports/theme';

const generateClassName = createGenerateClassName({
  disableGlobal: true,
  seed: 'wine-style',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      </ThemeProvider>
    </StylesProvider>
  )
}
export default MyApp
