import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  scrollBehavior(to, _from, savedPosition) {
    if (history.state.stop)
      return

    if (history.state.smooth) {
      return {
        el: history.state.smooth,
        behavior: 'smooth',
      }
    }

    if (to.hash) {
      const el = document.querySelector(to.hash) as HTMLElement | null

      if (!el)
        return

      const { marginTop } = getComputedStyle(el)
      const marginTopValue = parseInt(marginTop)

      const offset = el.offsetTop - marginTopValue

      return {
        top: offset,
        behavior: 'smooth',
      }
    }

    if (savedPosition) {
      return savedPosition
    }
    else {
      return {
        top: 0,
      }
    }
  },
}
