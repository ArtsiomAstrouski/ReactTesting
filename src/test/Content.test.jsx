import React from 'react'
import {
  render,
  screen,
} from '@testing-library/react'
import '@testing-library/jest-dom'

import Content from './index'

describe('Content Component', () => {
  it('should render with "true" props', () => {
    const component = render(
      <Content isOpenMenu isMapOpen>
        <span>Test Children</span>
      </Content>
    )

    const content = component.container.querySelector('.content')

    expect(content.classList.value.includes('hide')).toEqual(true)
  })

  it('should render with "false" props', () => {
    const component = render(
      <Content isOpenMenu={false} isMapOpen={false}>
        <span>Test Children</span>
      </Content>
    )

    const content = component.container.querySelector('.content')
    const container = component.container.querySelector('.content__container')

    expect(screen.getByText('Test Children')).toBeInTheDocument()
    expect(content.classList.value.includes('hide')).toEqual(false)
    expect(container.classList.value.includes('content__container--full')).toEqual(true)
  })
})
