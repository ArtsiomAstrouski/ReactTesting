import React, { useMemo } from 'react'
import userEvent from '@testing-library/user-event'
import {
  render,
  screen,
} from '@testing-library/react'
import '@testing-library/jest-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../../../../../work/ReactTesting/src/assets/theme'

import HeaderOptions from './index'

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {
        }),
      },
    }
  },
}))


describe('HeaderOptions Component', () => {
  it('should render without props', () => {
    const component = render(
      <HeaderOptions />,
    )

    const input = component.container.querySelector('.header-options__search')
    const clearIcon = component.container.querySelector('.header-options__clear-icon')
    const optionsBadges = component.container.querySelector('.header-options__badges')
    const buttons = component.container.querySelector('.header-options__buttons')

    expect(input).not.toBeInTheDocument()
    expect(clearIcon).not.toBeInTheDocument()
    expect(optionsBadges.innerHTML).toEqual('')
    expect(buttons.innerHTML).toEqual('')
  })

  it('should render with input and without clear icon', () => {
    const setLocalSearch = jest.fn()

    const component = render(
      <HeaderOptions setLocalSearch={setLocalSearch} />,
    )

    const input = component.container.querySelector('.header-options__search')
    const clearIcon = component.container.querySelector('.header-options__clear-icon')
    const optionsBadges = component.container.querySelector('.header-options__badges')
    const buttons = component.container.querySelector('.header-options__buttons')

    expect(input).toBeInTheDocument()
    expect(clearIcon).not.toBeInTheDocument()
    expect(optionsBadges.innerHTML).toEqual('')
    expect(buttons.innerHTML).toEqual('')
  })

  it('should render with input and with clear icon', () => {
    const setLocalSearch = jest.fn()
    const clearSearch = jest.fn()

    const component = render(
      <HeaderOptions setLocalSearch={setLocalSearch} localSearch='test' clearSearch={clearSearch} />,
    )

    const input = component.container.querySelector('.header-options__search')
    const clearIcon = component.container.querySelector('.header-options__clear-icon')
    const optionsBadges = component.container.querySelector('.header-options__badges')
    const buttons = component.container.querySelector('.header-options__buttons')

    expect(input).toBeInTheDocument()
    expect(clearIcon).toBeInTheDocument()
    expect(optionsBadges.innerHTML).toEqual('')
    expect(buttons.innerHTML).toEqual('')

    userEvent.click(clearIcon)
    expect(clearSearch).toBeCalled()
  })

  it('should render with badgeList', () => {
    const badgeList = [
      {
        label: 'testLabel1',
        value: 'testValue1',
        handleRemove: jest.fn(),
      },
      {
        label: 'testLabel1',
        value: 'testValue1',
        handleRemove: jest.fn(),
      },
      {
        label: 'testLabel1',
        value: 'testValue1',
        handleRemove: jest.fn(),
      },
    ]

    const component = render(
      <MuiThemeProvider theme={theme}>
        <HeaderOptions badgeList={badgeList} />,
      </MuiThemeProvider>,
    )

    const badges = component.container.querySelector('.header-options__badges')

    expect(badges.innerHTML).not.toEqual('')
  })

  it('should render with handleFilter', () => {
    const handleFilter = jest.fn()

    const component = render(
      <HeaderOptions handleFilter={handleFilter} />,
    )

    const buttons = component.container.querySelector('.header-options__buttons')

    expect(buttons.innerHTML).not.toEqual('')

    userEvent.click(screen.getByRole('button'))
    expect(handleFilter).toBeCalled()
  })

  it('should render with handlePlus', () => {
    const handlePlus = jest.fn()

    const component = render(
      <HeaderOptions handlePlus={handlePlus} />,
    )

    const buttons = component.container.querySelector('.header-options__buttons')

    expect(buttons.innerHTML).not.toEqual('')

    userEvent.click(screen.getByRole('button'))
    expect(handlePlus).toBeCalled()
  })

  it('should render with handleDownload', () => {
    const handleDownload = jest.fn()

    const component = render(
      <HeaderOptions handleDownload={handleDownload} />,
    )

    const buttons = component.container.querySelector('.header-options__buttons')

    expect(buttons.innerHTML).not.toEqual('')
  })
})
