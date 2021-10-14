import { createTheme } from '@material-ui/core/styles';

export const fontFamily = '"SF Pro Text", sans-serif';
export const fontFamilyDisplay = '"SF Pro Display", sans-serif';

const BREAKPOINTS = {
  xs: 0,
  sm: 768,
  md: 1024,
  lg: 1472,
  xl: 1920
};

const breakpointsValues = {
  breakpoints: {
    values: BREAKPOINTS
  }
};
// 4.563rem = 73px
// 3.75rem = 60px
// 3.5rem = 56px
// 3rem = 48px
// 2.5rem = 40px
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
// 0.5rem = 8px
// 0.025rem = 0.4px
// 0.023rem = 0.37px
// -0.023rem = -0.37px
// -0.025rem = -0.4px

export const customTheme = createTheme({
  fontFamily,
  ...breakpointsValues,
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
      light: '#F9F7F4',
    },
    info: {
      main: '#FC6524',
    }
  }, 
  overrides: {
    MuiTypography: {
      colorPrimary: {
        color: '#FF2525',
      },
      colorTextPrimary: {
        color: '#2A2425',
      },
      colorTextSecondary: {
        color: '#969290',
      },
      h1: {
        fontSize: 'clamp(1rem, 2vw, 2rem)',
        fontWeight: 700,
        fontFamily: fontFamilyDisplay,
        lineHeight: 'clamp(1rem, 3vw, 2.25rem)',
        letterSpacing: 0,
        // '@media (max-width: 1199px)': {
        //   fontSize: '1.5rem',
        // }
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 700,
        fontFamily: fontFamilyDisplay,
      },
      h3: {
        fontSize: '1.375rem',
        fontWeight: 700,
        fontFamily: fontFamilyDisplay,
      },
      h4: {
        fontSize: 18,
        fontWeight: 700,
        fontFamily: fontFamilyDisplay,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 700,
        fontFamily: fontFamilyDisplay,
        lineHeight: '1.75rem',
      },
      h6: {
        fontSize: 12,
        fontWeight: 700,
        fontFamily: fontFamilyDisplay,
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
      button: {
        fontFamily,
        fontSize: '0.75rem',
        fontWeight: 600,
        lineHeight: '1rem',
        letterSpacing: '0.023rem',
      }
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
        minWidth: 0,
        textTransform: 'none',
        borderRadius: '0.5rem',
        '&$disabled': {
          backgroundColor: '#EEECEA',
          color: '#969290',
        },
      },
      outlined: {
        border: '1px solid #dddbd8',
        color: '#2A2425',
        fontFamily,
        fontSize: '1rem',
        fontWeight: 600,
        letterSpacing: '-0.023rem',
        '&:hover': {
          border: '1px solid #969290',
        },
      },
      contained: {
        color: '#fff',
        fontFamily,
        fontSize: '1rem',
        fontWeight: 700,
        letterSpacing: '-0.023rem',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        }
      },
      containedPrimary: {
        maxHeight: 40,
        color: '#fff',
        backgroundColor: '#F55760',
        '&:hover': {
          backgroundColor: '#C44B52',
        }
      },
      containedSecondary: {
        color: '#2A2425',
        backgroundColor: '#F9F7F4',
        '&:hover': {
          backgroundColor: '#EEECEA',
        }
      },
      text: {
        fontFamily,
        fontSize: '1rem',
        fontWeight: 500,
        fontStyle: 'normal',
        lineHeight: '1.25rem',
        letterSpacing: '0.023rem',
        color: '#969290',
      }
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 8,
      }
    },
    MuiChip: {
      deletableColorPrimary: {
        backgroundColor: '#F9F7F4',
        color: '#2A2425',
      },
      deleteIconColorPrimary: {
        color: '#AFACA9',
      }
    },
    MuiTabs: {
      root: {
        minHeight: 0,
      },
    },
    MuiTab: {
      root: {
        minWidth: '0 !important',
        height: 'max-content',
        minHeight: 0,
        '& img' : {
          marginBottom: `0 !important`,
        },
      },
      wrapper: {
        flexDirection: 'row',
        gap: 6,
        
      },
      textColorPrimary: {
        color: '#2A2425',
      },
      labelIcon: {
        height: 'max-content',
        minHeight: 0,
      }
    },
    MuiListItemText: {
      secondary: {
        color: '#2A2425',
      }
    },
    MuiSvgIcon: {
      colorPrimary: {
        color: '#969290',
        '&:hover': {
          color: '#FF5E57'
        },
      },
      colorSecondary: {
        color: '#FF5E57',
      },
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: '#fff',
        }
      },
      outlined: {
        '&:hover': {
          backgroundColor: '#FCF3ED',
        },
      },
    }
	}
});

