# SpectronFakeMenu

Provide manipulation of menus in your spectron's specs.

## Installation

```
npm install --save-dev spectron-fake-menu
```

## Usage

```
const Application = require('spectron').Application;
const fakeMenu = require('spectron-fake-menu');
const app = new Application({ path: electron, args: [ path.join(__dirname, '.') ] });

fakeMenu.apply(app); // apply fake menu
fakeMenu.clickMenu('Config'); // 'Config' Menu click
fakeMenu.clickMenu('File', 'CloseTab'); // File->CloseTab Menu click
```

## Example

https://github.com/joe-re/spectron-fake-menu/tree/master/example

## API

### fakeMenu.apply(application: Application)

initialize spectronFakeMenu

### fakeMenu.clickMenu(...labels: string)

Find memu by labels and click.
If the target is nested, it can be specified with variable length arguments.

ex) File -> CloseTab: `fakeMenu.clickMenu('File', 'CloseTab');`

## TODO
- [ ] provides check box API
- [ ] provides radio button API

## License

MIT
