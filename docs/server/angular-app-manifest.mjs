
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
    'index.csr.html': {size: 653, hash: 'f778d4b6d5b832162fb963838a3c5e46afcf1fd1a271347f3bce5d81973513fb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 971, hash: '12988672c739e01097318e33788606e22674d39636c93d610392b9fba1781949', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6738, hash: '35e24eecc58fff32735d71c4e15f6353e366ba39ccee9707ed5a5212b7517a29', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CVMPDVDB.css': {size: 117, hash: 'UJ1Ft6Lwi7Q', text: () => import('./assets-chunks/styles-CVMPDVDB_css.mjs').then(m => m.default)}
  },
};
