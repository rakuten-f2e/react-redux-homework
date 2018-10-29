// const http = require('http');
// const app = require('./server/index');
import http from 'http';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import app from './server/index';
import TableData from './models/tableData';

const dbUrl = 'mongodb://localhost/crud';
const newApp = require('./server').default;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(dbUrl, { useNewUrlParser: true }, (dbErr) => {
  if (dbErr) {
    throw new Error(dbErr);
  } else {
    console.log('db connected');
  }

  app.post('/api/tabledatas', (request, response) => {
    const {
      seq,
      status,
      title,
      category,
      owner,
      priority,
    } = request.body;

    new TableData({
      seq,
      status,
      title,
      category,
      owner,
      priority,
    }).save((err) => {
      if (err) {
        response.status(500);
      } else {
        response.status(200).send('newRow was successfully created');
      }
    });
  });

  app.get('/api/tabledatas', (request, response) => {
    TableData.find({}, (err, tableData) => {
      if (err) {
        response.status(500);
      } else {
        response.status(200).send(tableData);
      }
    }).sort({ seq: 1 });
  });

  app.put('/api/tabledatas', (request, response) => {
    const { obj } = request.body;
    TableData.updateOne({ seq: obj.id },
      { $set: { [obj.name]: obj.value } }, (err) => {
        if (err) {
          response.status(500);
        } else {
          response.status(200).send(obj);
        }
      });
  });

  app.delete('/api/tabledatas', (request, response) => {
    const { _id } = request.body;
    TableData.deleteOne({ _id }, (err) => {
      if (err) {
        response.status(500).send();
      } else {
        response.status(200).send(_id);
      }
    });
  });

  let currentApp = app;

  const server = http.createServer(app);
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
});
