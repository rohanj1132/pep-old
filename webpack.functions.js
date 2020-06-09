module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        loader: 'raw-loader',
      }
    ],
  },
//   optimization: {
//     minimize: false
// },
};