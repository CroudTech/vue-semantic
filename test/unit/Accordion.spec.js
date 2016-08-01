/* global describe, it, expect */

import Vue from 'vue'
import Accordion from '../../src/Accordion.vue'

describe('Accordion.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><semantic-accordion></semantic-accordion></div>',
      components: { 'semantic-accordion': Accordion }
    }).$mount()
    expect(vm.$el).not.toBe(null)
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
