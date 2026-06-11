const fs = require('fs');
const esbuild = require('esbuild');

const files = [
  'config/business-rules.js',
  'config/payment-methods.js',
  'config/printer.js',
  'config/notification.js',
  'modules/core/utils.js',
  'modules/core/event-bus.js',
  'modules/core/icons.js',
  'modules/core/vietqr.js',
  'modules/core/sepay.js',
  'modules/core/db.js',
  'modules/core/models.js',
  'modules/auth/session.js',
  'modules/auth/permissions.js',
  'modules/pos/cart.js',
  'modules/dashboard/dashboard.js',
  'modules/import/csv-parser.js',
  'modules/import/import-wizard.js',
  'modules/sync/gas-client.js',
  'modules/sync/sync-queue.js',
  'modules/sync/telegram-bot.js',
  'modules/sync/kiotviet-pull.js',
];

let combined = '';
for (const f of files) {
  combined += fs.readFileSync(f, 'utf-8') + '\n';
}

esbuild.build({
  stdin: { contents: combined, sourcefile: 'bundle.js' },
  outfile: 'assets/bundle.js',
  format: 'iife',
  platform: 'browser',
  minify: true,
  allowOverwrite: true,
}).then(() => {
  const orig = files.reduce((s, f) => s + fs.statSync(f).size, 0);
  const bsize = fs.statSync('assets/bundle.js').size;
  console.log('bundle.js created!');
  console.log('Original: ' + (orig/1024).toFixed(1) + ' KB');
  console.log('Bundled:   ' + (bsize/1024).toFixed(1) + ' KB');
  console.log('Saved:     ' + ((orig-bsize)/1024).toFixed(1) + ' KB (' + (100-bsize/orig*100).toFixed(1) + '%)');
}).catch(err => {
  console.error('Failed:', err);
  process.exit(1);
});
