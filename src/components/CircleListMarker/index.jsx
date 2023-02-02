import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import useStyles from './styles'

const CircleListMarker = ({ marked, color }) => {
  const classes = useStyles()

  return (
    <div
      className={cx(classes.marker, `${classes.marker}--${color}`, {
        [`${classes.marker}--marked`]: marked,
      })}
      data-testid="marker"
    >
      <div className={cx(classes.score, `${classes.score}--${color}`)} data-testid="score" />
    </div>
  )
}

CircleListMarker.defaultProps = {
  marked: false,
  color: 'red',
}

CircleListMarker.propTypes = {
  marked: PropTypes.bool,
  color: PropTypes.string,
}

export default React.memo(CircleListMarker)
