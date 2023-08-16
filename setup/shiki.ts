import { defineShikiSetup } from '@slidev/types'
import { resolve } from 'path'
export default defineShikiSetup(async ({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme(resolve(__dirname, '../styles/shiki-storyblok-theme.json')),
      light: await loadTheme(resolve(__dirname, '../styles/shiki-storyblok-theme.json')),
    },
  }
})
