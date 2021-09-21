import { createTheme } from '@material-ui/core/styles';

export const fontFamily = 'Helvetica, sans-serif';
export const fontFamilyBold = 'Helvetica, sans-serif';


export const theme = createTheme({
  fontFamily,
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: 24,
        fontWeight: 700,
        fontFamily: fontFamilyBold,
      },
      h2: {
        fontSize: 22,
        fontWeight: 700,
        fontFamily: fontFamilyBold,
      },
      h3: {
        fontSize: 20,
        fontWeight: 700,
        fontFamily: fontFamilyBold,
      },
      h4: {
        fontSize: 18,
        fontWeight: 700,
        fontFamily: fontFamilyBold,
      },
      h5: {
        fontSize: 16,
        fontWeight: 700,
        fontFamily: fontFamilyBold,
      },
      h6: {
        fontSize: 12,
        fontWeight: 700,
        fontFamily: fontFamilyBold,
      },
      subtitle1: {
        fontFamily,
      },
      subtitle2: {
        fontFamily,
      },
      body1: {
        fontFamily,
			}
		}
	}
});
