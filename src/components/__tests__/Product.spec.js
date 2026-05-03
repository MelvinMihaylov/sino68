import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import Product from '../Product.vue'

describe('Product', () => {
  it('renders the product details', () => {
    const product = {
      id: 1,
      category: 'Врати',
      location: 'Варна',
      name: 'Метална дворна врата',
      imgSRC: '/images/product_images/test-product.jpg'
    }

    const wrapper = mount(Product, {
      props: {
        product
      }
    })

    expect(wrapper.text()).toContain(product.category)
    expect(wrapper.text()).toContain(product.location)
    expect(wrapper.text()).toContain(product.name)
    expect(wrapper.find('img').attributes('src')).toBe(product.imgSRC)
    expect(wrapper.find('img').attributes('alt')).toBe(product.name)
  })
})
