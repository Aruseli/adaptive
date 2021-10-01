import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'normalize.css';
import { StylesProvider, createGenerateClassName, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { customTheme } from '../imports/theme';
import { QueryStoreProvider } from '@deepcase/store/query';

// const responsiveTheme = responsiveFontSizes(customTheme);

const generateClassName = createGenerateClassName({
  disableGlobal: true,
  seed: 'wine-style',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryStoreProvider>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={customTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </QueryStoreProvider>
  )
}
export default MyApp
