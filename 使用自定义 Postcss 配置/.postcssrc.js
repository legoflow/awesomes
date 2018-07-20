module.exports = {
  map: true,
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      browsers: [ '> 0.01%', ],
    },
    'autoprefixer': {
      browsers: [ '> 0.01%', ],
    },
  }
}
