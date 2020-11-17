import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/SelfServiceForm';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App noteType='ReactDOMServer.renderToString'/>);

  return res.send(app);
});

app.use(express.static('./static'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});