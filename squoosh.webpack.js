const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new ImageMinimizerPlugin({
      minify: ImageMinimizerPlugin.squooshMinify,
      minimizerOptions: {
        encodeOptions: {
          mozjpeg: {
            // That setting might be close to lossless, but it’s not guaranteed
            // https://github.com/GoogleChromeLabs/squoosh/issues/85
            quality: 100,
          },
          webp: {
            lossless: 1,
          },
          avif: {
            // https://github.com/GoogleChromeLabs/squoosh/blob/dev/codecs/avif/enc/README.md
            cqLevel: 0,
          },
        },
      },
    }),
  ],
};