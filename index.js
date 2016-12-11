const path = require('path');

function apply(app) {
  app.args.unshift(path.join(__dirname, 'preload.js'));
  app.args.unshift('--require');
  return app;
}

function clickMenu(app, ...labels) {
  app.electron.ipcRenderer.send('SPECTRON_FAKE_MENU/SEND', labels);
}

module.exports = { apply, clickMenu };
