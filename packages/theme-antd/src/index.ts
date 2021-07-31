import Theme from './components'
import image from '@frontity/html2react/processors/image'
import iframe from '@frontity/html2react/processors/iframe'
import ThemePackage from '../types'

const themeAntD: ThemePackage = {
  name: 'theme-antd',
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    theme: {
      menu: [
        ['Home', '/'],
        ['Nature', '/category/nature/'],
        ['Travel', '/category/travel/'],
        ['Japan', '/tag/japan/'],
        ['About Us', '/about-us/'],
      ],
      featured: {
        showOnList: true,
        showOnPost: true,
      },
      autoPrefetch: 'in-view',
      isMobileMenuOpen: false,
    },
  },
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false
      },
      beforeSSR: async ({ actions }) => {
        await actions.source.fetch('/contact-form')
      },
    },
  },
  libraries: {
    html2react: {
      processors: [image, iframe],
    },
  },
}

export default themeAntD
