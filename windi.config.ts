import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  attributify: {
    prefix: 'wnd'
  },
  theme: {
    extend: {
      colors: {
        primary: '#2060B0',
        dark: '#0F1730',
        error: '#C91E63',
        warning: '#BFA017',
        success: '#0F8822'
      }
    }
  },
  shortcuts: {
    textarea: {
      '@apply': 'bg-transparent border-2 border-primary outline-none rounded-md p-2',
      '&:disabled': { '@apply': 'opacity-50' }
    },
    button: {
      '@apply': 'bg-primary hover:bg-primary/80 active:bg-primary/50 rounded-md duration-300 px-4 py-2',
      '&:disabled': { '@apply': 'opacity-50' }
    },
    'ghost-button': 'text-primary hover:bg-primary/10 active:bg-primary/30 rounded-md duration-300 px-4 py-2'
  }
})
