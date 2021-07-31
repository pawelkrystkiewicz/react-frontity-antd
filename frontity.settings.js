const url = 'https://test.frontity.org'

const settings = {
  name: 'frontity-antd',
  state: {
    frontity: {
      url,
      title: 'Test Frontity Blog',
      description: 'WordPress installation for Frontity development',
    },
  },
  packages: [
    {
      name: 'theme-antd',
    },
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          api: `${url}/wp-json`,
        },
      },
    },
    '@frontity/tiny-router',
    '@frontity/html2react',
    '@aamodtgroup/frontity-contact-form-7',
  ],
}

export default settings
