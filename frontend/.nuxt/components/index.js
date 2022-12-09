export { default as AddDish } from '../../components/addDish.vue'
export { default as AdminButton } from '../../components/adminButton.vue'
export { default as CategoriesList } from '../../components/categoriesList.vue'
export { default as DayToggle } from '../../components/dayToggle.vue'
export { default as DishItem } from '../../components/dishItem.vue'
export { default as DishList } from '../../components/dishList.vue'
export { default as HorizontalScroll } from '../../components/horizontalScroll.vue'
export { default as ModalWindow } from '../../components/modalWindow.vue'
export { default as OrderInfo } from '../../components/orderInfo.vue'
export { default as OrderList } from '../../components/orderList.vue'
export { default as TrayList } from '../../components/trayList.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
