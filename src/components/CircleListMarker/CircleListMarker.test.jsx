import React from 'react'
import userEvent from '@testing-library/user-event'
import {
  render,
  screen,
} from '@testing-library/react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import '@testing-library/jest-dom'
import theme from '../../assets/theme'
import CircleListMarker from './index'


describe('CircleListMarker Component', () => {
  it('should render without props', () => {
    const component = render(
      <MuiThemeProvider theme={theme}>
        <CircleListMarker />
      </MuiThemeProvider>,
    )

    expect(screen.getByTestId('marker').classList.value.includes('red')).toEqual(true)
    expect(screen.getByTestId('marker').classList.value.includes('marked')).toEqual(false)
    expect(screen.getByTestId('score').classList.value.includes('red')).toEqual(true)
  })

  it('should render with props', () => {
    const component = render(
      <MuiThemeProvider theme={theme}>
        <CircleListMarker color='green' marked/>
      </MuiThemeProvider>,
    )

    expect(screen.getByTestId('marker').classList.value.includes('green')).toEqual(true)
    expect(screen.getByTestId('marker').classList.value.includes('marked')).toEqual(true)
    expect(screen.getByTestId('score').classList.value.includes('green')).toEqual(true)
  })
})
