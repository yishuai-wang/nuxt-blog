import { THEME_KEY, themeToIcon } from './constant'
import type { ThemeData } from './types'
import { getLocalThemeData } from './utils'

export const useThemeData = () => {
  const colorMode = useColorMode()
  const currentThemeIndex = ref(0)
  const currentTheme = computed<ThemeData>(() => {
    const [themeName, themeIcon, themeDescription] = themeToIcon[currentThemeIndex.value]
    return {
      themeName,
      themeIcon,
      themeDescription,
    }
  })

  const trySetLocalThemeData = () => {
    const localThemeData = getLocalThemeData()
    const themeIndex = themeToIcon.findIndex(([themeName]) => themeName === localThemeData?.themeName)

    if (themeIndex > -1) {
      currentThemeIndex.value = themeIndex
      colorMode.preference = localThemeData!.themeName
    }
  }

  const initThemeData = () => {
    trySetLocalThemeData()
    window.addEventListener('storage', trySetLocalThemeData)
  }

  const destroy = () => {
    window.removeEventListener('storage', trySetLocalThemeData)
  }

  const changeTheme = () => {
    currentThemeIndex.value = (currentThemeIndex.value + 1) % themeToIcon.length
    nextTick(() => {
      localStorage.setItem(THEME_KEY, JSON.stringify(currentTheme.value))
      colorMode.preference = currentTheme.value.themeName
    })
  }

  onBeforeMount(initThemeData)
  onBeforeUnmount(destroy)

  return {
    currentTheme,
    changeTheme,
  }
}
