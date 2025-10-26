import { ref, onMounted, watchEffect } from 'vue'

const THEME_KEY = 'theme'

export function useDarkMode() {
  const isDarkMode = ref(false)
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement
    html.classList.toggle('dark', dark)
  }

  const computeTheme = (): boolean => {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'dark') return true
    if (saved === 'light') return false
    return systemPrefersDark.matches
  }

  /** Initialize theme */
  const initTheme = () => {
    isDarkMode.value = computeTheme()
    applyTheme(isDarkMode.value)
  }

  /** Manually toggle dark mode */
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem(THEME_KEY, isDarkMode.value ? 'dark' : 'light')
    applyTheme(isDarkMode.value)
  }

  onMounted(() => {
    initTheme()

    systemPrefersDark.addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        isDarkMode.value = e.matches
        applyTheme(isDarkMode.value)
      }
    })
  })

  watchEffect(() => applyTheme(isDarkMode.value))

  return {
    isDarkMode,
    toggleDarkMode,
  }
}
