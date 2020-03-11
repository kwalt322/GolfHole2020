const Bundler = require('parcel-bundler');

const entryFiles = ['./build/sass/styles.scss'];
// ['./build/js/path.js', './build/etc']

const options = {
  minify:true,
  outDir:"./static/built",
  sourceMaps:false,
  contentHash:false
};

(async function() {
  const bundler = new Bundler(entryFiles, options);
  bundler.serve();
})();