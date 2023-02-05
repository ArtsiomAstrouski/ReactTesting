import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from './index'

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }
  },
}))

describe('Render with all props', () => {
  it('link="login"', () => {
    render(<Header logo link="login" />)

    expect(screen.getByText('login.label')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveClass('head')
  })

  it('link="demo"', () => {
    render(<Header logo link="demo" />)

    expect(screen.getByRole('button')).toHaveTextContent('demo.label')
    expect(screen.getByRole('img')).toHaveClass('head')
  })

  it('link="incorrectly"', () => {
    render(<Header logo link="incorrectly" />)

    expect(screen.getByRole('button')).not.toHaveTextContent()
  })

  it('render without logo', () => {
    render(<Header link="login" />)

    expect(screen.getByRole('img')).not.toHaveClass('head')
  })
})
