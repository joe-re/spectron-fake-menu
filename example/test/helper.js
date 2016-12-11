export function waitForChangeCount(app, count) {
  return new Promise((resolve, _reject) => {
    // Since the click event is asynchronous processing in the native layer, wait for the count chang on DOM.
    // If the expected change does not occur, the test will fail with a timeout.
    const timer = setInterval(() => {
      app.client.getText('#count').then((text) => {
        if (text === count) {
          clearInterval(timer);
          resolve();
        }
      });
    }, 1000);
  });
}
