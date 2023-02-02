import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#3f51b5',
      },
    },
    MuiPickersToolbarText: {
      toolbarTxt: {
        color: 'rgb(255 255 255 / 54%)',
      },
      toolbarBtnSelected: {
        color: '#ffffff',
      },
    },
    MuiPickersDay: {
      daySelected: {
        color: '#ffffff',
        backgroundColor: '#3f51b5',

        '&:hover': {
          color: '#ffffff',
          backgroundColor: '#3f51b5',
        },
      },
      current: {
        color: '#3f51b5',
      },
    },
    MuiButton: {
      text: {
        color: '#3f51b5',
      },
    },
    MuiPickersClock: {
      pin: {
        backgroundColor: '#3f51b5',
      },
    },
    MuiPickersClockPointer: {
      pointer: {
        backgroundColor: '#3f51b5',
      },
      noPoint: {
        backgroundColor: '#3f51b5',
      },
      thumb: {
        border: '14px solid #3f51b5',
      },
    },
    MuiPickersClockNumber: {
      clockNumberSelected: {
        color: '#ffffff',
      },
    },
    MuiInputBase: {
      input: {
        '&:-webkit-autofill': {
          transitionDelay: '9999s',
          transitionProperty: 'background-color, color',
        },
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#ffffff',
        color: '#000000',
      },
      arrow: {
        color: '#ffffff',
      },
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  },
  palette: {
    primary: {
      main: '#C4CFDD',
      dark: '#67758D',
      light: '#ffffff',
      darkOrange: '#DDA95F',
      orange: '#DCA95E',
      red: '#F85151',
      borderDarkGrey: '#3F4A66',
      errorRed: '#FF0000',
    },
    secondary: {
      main: '#DCA95E',
      dark: '#DDA95F',
    },
    custom: {
      black: '#000000',
      darkBlue: '#1D273E',
      bluePrimary: '#232D46',
      mainDark: '#1E283F',
      mainLight: '#53627D',
      lightBlue: '#2D3751',
      thirdOrange: '#CF9A5B',
      goldSecondary: '#D6A35E',
      smokyWhite: '#F2F2F2',
      grayLight: '#E5E5E5',
      gray: '#CCCCCC',
      gray100: '#F9F9F9',
      gray200: '#C4C4C4',
      gray300: '#9EA9BA',
      grayDark: '#999999',
      greyDarker: '#3D4144',
      linkBlue: '#296bda',
      yellow: '#FFFD38',
      yellow400: '#FFE700',
      yellowDark: '#B2A747',
      linkLightBlue: '#637BFA',

      redSecondary: '#FF2828',
      green: '#22B573',
      green400: '#2DB475',
      greenSecondary: '#34BA92',

      blue: '#5A87CD',
      hoverBlue: '#2A334C',
      softBlue: '#3A445B',
      borderDark: '#5E5E5E',
      muiDefaultBlue: '#3f51b5',

      blue200: '#D0D2D7',
      blue300: '#BABDC5',
      blue400: '#A4A8B2',
      blue500: '#8E93A0',
      blue600: '#787D8D',
      blue700: '#61687A',
      blue800: '#4B5368',
      blue900: '#2D364E',

      red900: '#E01616',

      inputDisabledBg: '#22334B',
      inputDisabledText: '#404F63',
    },
  },
})

export default theme
