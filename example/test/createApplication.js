import { Application } from 'spectron';
import electron from 'electron-prebuilt';
import path from 'path';
import fakeMenu from 'spectron-fake-menu';

export default function createApplication() {
  const app = new Application({ path: electron, args: [ path.join(__dirname, '..') ] });
  fakeMenu.apply(app);
  return app;
}
