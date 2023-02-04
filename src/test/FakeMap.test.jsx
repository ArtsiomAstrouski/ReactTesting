import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import FakeMap from './index'

describe('FakeMap Component', () => {
  const showMapHandlerMock = jest.fn()

  it('should render and click worked', () => {
    const component = render(<FakeMap showMapHandler={showMapHandlerMock} />)

    const wrapper = component.container.firstChild

    userEvent.click(wrapper)
    expect(showMapHandlerMock).toBeCalled()
  })
})
