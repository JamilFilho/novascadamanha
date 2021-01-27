module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      height: {
        'header-desktop':'80vh',
        'header-mobile':'70vh',
        'post-header':'80vh'
      },
      colors: {
        'brand-background':'#282c35',
        'brand-text':'#C8AA74',
        'pilgrim':'#ff9a42'
      },
      spacing: {
        40: '12rem'
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
