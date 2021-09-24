import { createTheme } from '@material-ui/core/styles';

export const fontFamily = '"SF Pro Text", sans-serif';
export const fontFamilyBold = '"SF Pro Display", sans-serif';


// 4.563rem = 73px
// 2.25rem = 36px
// 2rem = 32px
// 1.75rem = 28px
// 1.5rem = 24px
// 1.375rem = 22px
// 1.25rem = 20px
// 1.125rem = 18px
// 1rem = 16px
// 0.875rem = 14px
// 0.75rem = 12px
// 0.023rem = 0.37px
// 0.023rem = 0.37px
// 0.023rem = 0.37px
// 0.023rem = 0.37px

export const customeTheme = createTheme({
  fontFamily,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#f55760',
      dark: '#c44b52',
    },
    secondary: {
      main: '#2a2425',
    },
    gray: {
      main: '#969290',
    },
    triger: {
      main: '#FC6524',
    }
  }, 
  overrides: {
    MuiTypography: {
      colorTextPrimary: {
        color: '#2A2425',
      },
      colorTextSecondary: {
        color: '#969290',
      },
      h1: {
        fontSize: '1.75rem',
        fontWeight: 700,
        fontFamily: fontFamilyBold,
        lineHeight: '2.25rem',
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 700,
        fontFamily: fontFamilyBold,
      },
      h3: {
        fontSize: '1.375rem',
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
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: '1.5rem',
        letterSpacing: '-0.023rem',
			},
      body2: {
        fontFamily,
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: '1.25rem',
        letterSpacing: '-0.023rem',
			},
      caption: {
        fontFamily,
        fontSize: '0.75rem',
        fontWeight: 600,
        lineHeight: '1rem',
        letterSpacing: '0.023rem',
      },
		},
    MuiRating: {
      root: {
        fontSize: '1.25rem',
        '@media (max-width: 1199px)': {
          fontSize: '1.125rem',
        },
        color: '#FF9635',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        borderRadius: '0.5rem',
      },
      label: {
        fontFamily,
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: '1.5rem',
      },
      outlined: {
        border: '1px solid #dddbd8',
        '&:hover': {
          border: '1px solid #969290',
        },
      },
      containedPrimary: {
        color: '#fff',
        backgroundColor: '#F55760',
      },
      text: {
        fontFamily,
        fontSize: '1rem',
        fontWeight: 500,
        fontStyle: 'normal',
        lineHeight: '1.25rem',
        letterSpacing: '0.023rem',
        color: '#3779C6',
        textDecoration: 'underline',
      }
    }
	}
});

