
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/SweetHeavenAngular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/SweetHeavenAngular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 653, hash: 'f264c0610664aa9b06fd281c24be75822c6f3096a27e6ff36a012d79225dadf8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 971, hash: '124eaee4dcabe069e37e3b2c8932c1b32c0a80113f2dfd191696eb20eb3e0401', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6738, hash: '5e978a40947c647325be648958537c981fa0280c0cad693bca2617325a3b3bf0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CVMPDVDB.css': {size: 117, hash: 'UJ1Ft6Lwi7Q', text: () => import('./assets-chunks/styles-CVMPDVDB_css.mjs').then(m => m.default)}
  },
};
