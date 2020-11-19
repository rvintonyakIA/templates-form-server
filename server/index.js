import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
const bodyParser = require('body-parser');

import RenderTemplate from 'self_service_template_component'

import App from '../src/SelfServiceForm';
// const TemplateFormModule = require('../static/feIndex.js')
// import TemplateFormComponent from '../static/feIndex.js';

const PORT = process.env.PORT || 3006;
const app = express();

const BODY_SIZE = 1;
// parse body params and attache them to req.body
app.use(bodyParser.json({ limit: `${ BODY_SIZE }mb` }));
app.use(bodyParser.urlencoded({ extended: true, limit: `${ BODY_SIZE }mb` }));

app.get('/', (req, res) => {
  // console.log('********* REQUEST query: ', req.query, req.body)
  const note = req.body || {}

  const reqQueryNoteType = req.query && req.query.noteType || 'ReactDOMServer.renderToString'
  const app = ReactDOMServer.renderToString(<App noteType={reqQueryNoteType}/>);

  console.log(RenderTemplate)
  RenderTemplate()
 //  const app1 = ReactDOMServer.renderToString(
 //    <Temp
 //     selectedNoteType={ note.note_type_id }
 //     noteData={ note }
 //     viewMode={ 'clientRead' }
 //
 //     onFieldChange={ noop }
 //
 //     onFormErrorChange={ noop }
 //     isManagedBySelfServiceCallback={ noop }
 //    />
 // );

  return res.send(`<div>${app}</div>`);
});

app.use(express.static('./static'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});