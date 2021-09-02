module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        wd: '1170px',
        'v5-wd': '1220px'
      }
    },
    colors: {
      gray: {
        '4a': '#4a4a4a',
        666: '#666666',
        999: '#999999',
        eee: '#eeeeee',
        de: '#DEDEDE',
        a2: '#a2a2a2',
        f1: '#F1F1F1',
        '9a': '#9AABB8',
        f3: '#F8F8F8',
        97: '#979797'
      },
      blue: {
        100: '#70ccfa',
        b: '#45D6D1'
      },
      yellow: '#FCC80E',
      white: '#fff',
      black: '#000',
      orange: '#ff9900',
      red: '#E6213A'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
      // head: '1600px'
    }
  },
  plugins: [],
} 