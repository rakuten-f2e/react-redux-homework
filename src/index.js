import http from 'http';
import app from './server';

const server = http.createServer(app);
const newApp = require('./server').default;

let currentApp = app;

server.listen(process.env.PORT || 3000, (error) => {
  if (error) {
    console.log(error);
  }

  console.log('🚀 started');
});

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    server.on('request', newApp);
    currentApp = newApp;
  });
}
