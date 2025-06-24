import DefaultTheme from 'vitepress/theme'
import './custom.css'

import type { Theme } from 'vitepress'

const customTheme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Do nothing here for now, but this activates the custom theme
  }
}

export default customTheme
