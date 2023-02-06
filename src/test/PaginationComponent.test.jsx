import userEvent from '@testing-library/user-event'
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../assets/theme'

import PaginationComponent from './index.jsx'

const totalElements = 200
const totalPages = 20
const page = 0
const numberOfElements = 20
const size = 10

describe('PaginationComponent component', () => {
  it('should render without props', () => {
    const component = render(
      <MuiThemeProvider theme={theme}>
        <PaginationComponent/>
      </MuiThemeProvider>
    )
    const div = component.container.querySelector('div')

  })

  it('should render without props', () => {
    const component = render(
      <MuiThemeProvider theme={theme}>
        <PaginationComponent totalElements={totalElements} page={page} size={size} numberOfElements={numberOfElements} totalPages={totalPages}/>
      </MuiThemeProvider>
    )
    const div = component.container.querySelector('div')
    const button = component.container.querySelectorAll('button')

    userEvent.click(button[5])

    component.debug()
    expect(div).toHaveTextContent('20')
  })
})
