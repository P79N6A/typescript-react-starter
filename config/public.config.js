const paths = require('./paths');
const path = require("path")

exports.alias = {
  'assets': path.resolve(paths.appSrc, 'assets'),
  'components': path.resolve(paths.appSrc, 'components')
}
