import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import ButtonComponent from './index'

describe('ButtonComponent', () => {
  it('render with children', () => {
    render(<ButtonComponent>Some text</ButtonComponent>)

    expect(screen.getByText('Some text')).toBeInTheDocument()
  })

  it('render without children', () => {
    render(<ButtonComponent />)

    expect(screen.queryByText('Some text')).toBeNull()
  })

  it('render with disabled props', () => {
    render(<ButtonComponent disabled>Some text</ButtonComponent>)

    expect(screen.getByRole('button')).toBeDisabled()
  })
})
