const path = require('path');
let _app = null;

function apply(app) {
  _app = app;
  _app.args.unshift(path.join(__dirname, 'preload.js'));
  _app.args.unshift('--require');
  return _app;
}

function clickMenu(...labels) {
  _app.electron.ipcRenderer.send('SPECTRON_FAKE_MENU/SEND', labels);
}

module.exports = { apply, clickMenu };
