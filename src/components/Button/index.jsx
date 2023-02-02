import React from 'react'

import Button from '@material-ui/core/Button'

import useStyles from './styles'

function ButtonComponent({ children, ...otherProps }) {
  const classes = useStyles()

  return (
    <Button color="secondary" className={classes.link} {...otherProps}>
      {children}
    </Button>
  )
}

export default ButtonComponent
