
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/components/**/*.js',
    './pages/**/*.js',
  ],
  theme: {
        extend: {
      screens: {
        xm: '320px',
      },
      height: {
        'almost-screen': 'calc(-16rem + 100vh)',
        '225px': '14.063rem',
        '338px': '21.125rem',
      },
      width: {
        '400px': '25rem',
        '600px': '37.5rem',
      },
      minHeight: {
        'almost-screen': 'calc(-16rem + 100vh)',
        '42px': '2.625rem',
      },
    },
  },
  variants: {},
  plugins: [
    require( 'tailwindcss' ),
    require( 'precss' ),
    require( 'autoprefixer' ),
  ],
};


module.exports = {
  theme: {
    extend: {
    colors: {
      'link-water': {
        DEFAULT: '#E2EFF8',
        '50': '#FFFFFF',
        '100': '#FFFFFF',
        '200': '#FFFFFF',
        '300': '#FFFFFF',
        '400': '#FFFFFF',
        '500': '#E2EFF8',
        '600': '#B9D8EE',
        '700': '#90C2E4',
        '800': '#67ABDA',
        '900': '#3E94D0'
      },
      'portage': {
        DEFAULT: '#7B7EEA',
        '50': '#FFFFFF',
        '100': '#FFFFFF',
        '200': '#FFFFFF',
        '300': '#D3D4F8',
        '400': '#A7A9F1',
        '500': '#7B7EEA',
        '600': '#4F53E3',
        '700': '#2328DC',
        '800': '#1C20B0',
        '900': '#151884'
      },
      'bittersweet': {
        DEFAULT: '#FF6B6B',
        '50': '#FFFFFF',
        '100': '#FFFFFF',
        '200': '#FFFFFF',
        '300': '#FFD1D1',
        '400': '#FF9E9E',
        '500': '#FF6B6B',
        '600': '#FF3838',
        '700': '#FF0505',
        '800': '#D10000',
        '900': '#9E0000'
      },
      }
    }
  }
}

plugins: [
  require('tailwindcss-textshadow')
]