import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  marker: {
    position: 'relative',
    width: 16,
    height: 16,
    borderRadius: '50%',

    '&--yellow': {
      border: `0 solid ${theme.palette.custom.yellow}`,
    },

    '&--green': {
      border: `0 solid ${theme.palette.custom.green}`,
    },

    '&--red': {
      border: `0 solid ${theme.palette.custom.redSecondary}`,
    },

    '&--marked': {
      borderWidth: 1,
    },
  },

  score: {
    position: 'absolute',
    width: 8,
    height: 8,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    borderRadius: '50%',

    '&--yellow': {
      backgroundColor: theme.palette.custom.yellow,
    },

    '&--green': {
      backgroundColor: theme.palette.custom.green,
    },

    '&--red': {
      backgroundColor: theme.palette.custom.redSecondary,
    },
  },
}))

export default useStyles
