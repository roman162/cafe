import {default as rsa} from './rsa'
import {default as aes} from './aes'

function plugin (Vue) {
  if (plugin.installed) {
    return
  }

  Vue.rsa = rsa
  Vue.aes = aes

  Object.defineProperties(Vue.prototype, {
    $crypto: {
      get () {
        return {
          rsa: Vue.rsa,
          aes: Vue.aes
        }
      }
    },
    $rsa: {
      get () {
        return Vue.rsa
      }
    },
    $aes: {
      get () {
        return Vue.aes
      }
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
