module.exports = {
  plugins: {
      '@fullhuman/postcss-purgecss': {
          content: [
              './themes/postcss/layouts/**/*.html', 
              './themes/postcss/assets/js/*.js',
              './themes/postcss/static/js/*.js',
              './layouts/**/*.html',
              './static/js/*.js'
            ],
          whitelist: [
              'highlight',
              'language-bash',
              'pre',
              'video',
              'code',
              'content',
              'h3',
              'h4',
              'ul',
              'li'
          ]
      },
      autoprefixer: {},
      cssnano: {preset: 'default'}
  }
};