const Application = require('spectron').Application;
const electron = require('electron-prebuilt');
const path = require('path');
const fakeMenu = require('../index');

const app = new Application({ path: electron, args: [ path.join(__dirname, '.') ] });
fakeMenu.apply(app);

const assert = require('power-assert');
const fs =  require('fs');

describe('click File->Save Menu', function() {
  this.timeout(10000);

  beforeEach(function() {
    return app.start();
  });
  afterEach(function() {
    fs.unlink('sandbox/test.txt');
    return app.stop();
  });

  it('creates test file', () => {
    return app.client.getWindowCount()
      .then((count) => assert.equal(count, 1))
      .then(() => {
        fakeMenu.clickMenu('File', 'Save');
        return new Promise((resolve, _reject) => {
          const timer = setInterval(() => {
            if (fs.existsSync('./sandbox/test.txt')) {
              const text = fs.readFileSync('./sandbox/test.txt', 'utf8');
              resolve(text);
              clearInterval(timer);
            }
          }, 1000);
        });
      }).then((text) => {
        assert.equal(text, 'test');
      });
  });
});
