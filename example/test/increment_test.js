import createApplication from './createApplication';
import { waitForChangeCount } from './helper';
import fakeMenu from 'spectron-fake-menu';
import assert from 'power-assert';

describe('Increment', function() {
  this.timeout(10000);
  let app;
  beforeEach(function() {
    app = createApplication();
    return app.start();
  });
  afterEach(function() {
    return app.stop();
  });

  it('increment count', () => {
    return app.client.waitForExist('#count')
      .then(() => {
        fakeMenu.clickMenu('Count', 'Increment');
        return waitForChangeCount(app, '1');
      })
      .then(() => assert.ok(true));
  });
});

