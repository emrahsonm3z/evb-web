const breakpoints = {
  sm: 544, // Small screen / phone
  md: 768, // Medium screen / tablet
  lg: 1024, // Large screen / desktop
  xl: 1200 // Extra large screen / wide desktop
}

module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: { '--d': `(min-width: ${breakpoints.lg}px)` } //desktop
        },
        {
          customMedia: {
            '--t': `(min-width: ${breakpoints.md}px) and (max-width:${
              breakpoints.lg - 1
            }px)` //tablet
          }
        },
        {
          customMedia: {
            '--m': `(max-width:${breakpoints.md - 1}px)` //mobile
          }
        },
        {
          customMedia: {
            '--dt': `(min-width: ${breakpoints.md}px)` //desktop-and-tablet
          }
        },
        {
          customMedia: {
            '--tm': `(max-width:${breakpoints.lg - 1}px)` //tablet-and-mobile
          }
        }
      ]
    },
    cssnano: {
      preset: 'default'
    }
  }
}
