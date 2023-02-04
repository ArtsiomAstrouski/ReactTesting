import React from 'react'
import {
  render,
} from '@testing-library/react'
import '@testing-library/jest-dom'

import DeltaComponent from './index'

describe('Delta Component', () => {
  it('should render without props', () => {
    const component = render(
      <DeltaComponent />
    )

    const span = component.container.querySelectorAll('span')

    expect(span[0]).toHaveTextContent(/0/i)
    expect(span[1]).toHaveTextContent(/0/i)
  })

  it('should render with number props', () => {
    const component = render(
      <DeltaComponent deltaValue={42} deltaBetter={false} value={22} />
    )

    const span = component.container.querySelectorAll('span')

    expect(span[0]).toHaveTextContent(/22/i)
    expect(span[1]).toHaveTextContent(/42/i)
  })
})
