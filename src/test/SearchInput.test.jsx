import { MuiThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import theme from '../assets/theme'

import SearchInput from './index'

describe('SearchInput Component', () => {
  const submitHandlerMock = jest.fn()
  const changeHandlerMock = jest.fn()
  const value = 'test value'

  it('should called handler when onChange input', () => {
    const component = render(
      <MuiThemeProvider theme={theme}>
        <SearchInput searchSubmitHandler={submitHandlerMock} searchHandler={changeHandlerMock} searchValue={value} />
      </MuiThemeProvider>
    )
    const input = component.container.querySelector('input')

    userEvent.type(input, 'test input')
    expect(changeHandlerMock).toBeCalled()
  })

  it('should output the text after passing the value', () => {
    const component = render(
    <MuiThemeProvider theme={theme}>
      <SearchInput searchSubmitHandler={submitHandlerMock} searchHandler={changeHandlerMock} searchValue={value} />
    </MuiThemeProvider>
    )
    const input = component.container.querySelector('input')

    expect(input.value).toEqual('test value')
  })
})
