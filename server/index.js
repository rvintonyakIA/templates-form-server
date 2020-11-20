import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
const bodyParser = require('body-parser');

// import RenderTemplate from 'self_service_template_component'
import DummyComponent from 'react-npm-component-rv'
import TemplateForm from 'self_service_template'
// import TemplateForm from './TemplateForm'

import App from '../src/SelfServiceForm';
// const TemplateFormModule = require('../static/feIndex.js')
// import TemplateFormComponent from '../static/feIndex.js';

const PORT = process.env.PORT || 3006;
const app = express();

const BODY_SIZE = 1;
// parse body params and attache them to req.body
app.use(bodyParser.json({ limit: `${ BODY_SIZE }mb` }));
app.use(bodyParser.urlencoded({ extended: true, limit: `${ BODY_SIZE }mb` }));

const noop = () => {}
app.post('/', (req, res) => {
  // console.log('********* REQUEST query: ', req.query, req.body)
  const note = req.body || {}

  const reqQueryNoteType = req.query && req.query.noteType || 'ReactDOMServer.renderToString'
  const app = ReactDOMServer.renderToString(<App noteType={reqQueryNoteType}/>);

  console.log(DummyComponent)
  const output = ReactDOMServer.renderToString(<DummyComponent/>)

  console.log(TemplateForm)
  const output1 = ReactDOMServer.renderToString(
    <div style={{height: "500px"}}>
      <TemplateForm
       template={ {"elements":{"khq4frqz":{"type":"staticText","text":"Text from REact template","layout":{"w":54,"h":5,"x":0,"y":0,"i":"khq4frqz","minW":6,"minH":3,"moved":false,"static":false}}},"customization":{"isMultiple":false,"prefixes":["mackeydemo"]}} }
       // template={ {"elements":{"kg97ug9q":{"id":"mackeydemo_current_price","name":"current_price","type":"input","isReadOnly":false,"isRequired":false,"fieldType":"number","selectedRenderer":1,"currencyCode":"","decimalPlaces":3,"useThousandSeparator":false,"dateFormat":"L","isCalculated":false,"maxLength":100,"maxSupportedLength":100,"layout":{"w":35,"h":3,"x":37,"y":10,"i":"kg97ug9q","minW":6,"minH":3,"maxH":3,"moved":false,"static":false},"minValue":10,"maxValue":50},"kg97vb01":{"type":"staticText","text":"Investment templates","fontSize":"26px","layout":{"w":43,"h":4,"x":0,"y":0,"i":"kg97vb01","minW":6,"minH":3,"moved":false,"static":false}},"kg97wk2u":{"id":"mackeydemo_due_date","name":"due_date","type":"input","isReadOnly":false,"isRequired":true,"fieldType":"date","selectedRenderer":4,"currencyCode":"","decimalPlaces":2,"useThousandSeparator":false,"dateFormat":"ll","isCalculated":false,"maxLength":100,"maxSupportedLength":100,"layout":{"w":24,"h":3,"x":103,"y":1,"i":"kg97wk2u","minW":6,"minH":3,"maxH":3,"moved":false,"static":false}},"kg97wyjx":{"id":"mackeydemo_roic","name":"roic","type":"input","isReadOnly":false,"isRequired":true,"fieldType":"number","selectedRenderer":1,"currencyCode":"","decimalPlaces":2,"useThousandSeparator":false,"dateFormat":"L","isCalculated":false,"maxLength":100,"maxSupportedLength":100,"layout":{"w":35,"h":3,"x":65,"y":1,"i":"kg97wyjx","minW":6,"minH":3,"maxH":3,"moved":false,"static":false}},"kguquku7":{"id":"mackeydemo_business_description","name":"business_description","type":"input","isReadOnly":false,"isRequired":false,"fieldType":"text","selectedRenderer":0,"maxLength":12,"maxSupportedLength":16777215,"layout":{"w":19,"h":3,"x":46,"y":1,"i":"kguquku7","minW":6,"minH":3,"maxH":3,"moved":false,"static":false}},"kh0pszqn":{"type":"divider","direction":"horizontal","layout":{"w":142,"h":1,"x":0,"y":15,"i":"kh0pszqn","minW":6,"maxW":150,"minH":1,"maxH":1,"moved":false,"static":false}},"kh0ptdiy":{"id":"mackeydemo_percent_upside","name":"percent_upside","type":"input","isReadOnly":false,"isRequired":false,"fieldType":"number","selectedRenderer":1,"currencyCode":"","decimalPlaces":2,"useThousandSeparator":false,"isCalculated":false,"layout":{"w":33,"h":3,"x":2,"y":19,"i":"kh0ptdiy","minW":6,"minH":3,"maxH":3,"moved":false,"static":false}},"kh0ptkg6":{"id":"mackeydemo_percent_downside","name":"percent_downside","type":"input","isReadOnly":false,"isRequired":false,"fieldType":"number","selectedRenderer":1,"currencyCode":"","decimalPlaces":2,"useThousandSeparator":false,"isCalculated":false,"layout":{"w":31,"h":3,"x":36,"y":19,"i":"kh0ptkg6","minW":6,"minH":3,"maxH":3,"moved":false,"static":false}},"kh0ptu69":{"type":"staticText","text":"<span style=\"font-size:20px;\"><span style=\"color:#a52a2a;\">Problem fields</span></span>","layout":{"w":45,"h":3,"x":0,"y":16,"i":"kh0ptu69","minW":6,"minH":3,"moved":false,"static":false}},"kh6cchw8":{"id":"mackeydemo_debt_capital","name":"debt_capital","type":"input","isReadOnly":false,"isRequired":false,"fieldType":"number","selectedRenderer":1,"currencyCode":"","decimalPlaces":2,"useThousandSeparator":false,"isCalculated":false,"layout":{"w":19,"h":3,"x":18,"y":23,"i":"kh6cchw8","minW":6,"minH":3,"maxH":3,"moved":false,"static":false}},"kh6ciao2":{"id":"mackeydemo_buy_trigger","name":"buy_trigger","type":"input","isReadOnly":false,"isRequired":false,"fieldType":"number","selectedRenderer":1,"currencyCode":"","decimalPlaces":2,"useThousandSeparator":false,"isCalculated":false,"layout":{"w":27,"h":3,"x":73,"y":10,"i":"kh6ciao2","minW":6,"minH":3,"maxH":3,"moved":false,"static":false}},"kh6ciilx":{"type":"staticText","text":"Curr price &amp; buy trigger","layout":{"w":34,"h":3,"x":0,"y":10,"i":"kh6ciilx","minW":6,"minH":3,"moved":false,"static":false}},"kh6cjdu0":{"id":"mackeydemo_sell_trigger","name":"sell_trigger","type":"input","isReadOnly":false,"isRequired":false,"fieldType":"number","selectedRenderer":1,"currencyCode":"","decimalPlaces":2,"useThousandSeparator":false,"isCalculated":false,"layout":{"w":27,"h":3,"x":18,"y":7,"i":"kh6cjdu0","minW":6,"minH":3,"maxH":3,"moved":false,"static":false}},"kh6ck20l":{"type":"staticText","text":"Sell trigger","layout":{"w":17,"h":3,"x":0,"y":7,"i":"kh6ck20l","minW":6,"minH":3,"moved":false,"static":false}},"kh6cls33":{"type":"staticText","text":"Debt capital","layout":{"w":17,"h":3,"x":1,"y":23,"i":"kh6cls33","minW":6,"minH":3,"moved":false,"static":false}}},"customization":{"isMultiple":false,"prefixes":["mackeydemo"]}} }
       noteData={ note }
       viewMode={ 'clientRead' }

       onElementSelect={ noop }
       onFieldChange={ noop }
       onFormErrorChange={ noop }
       isManagedBySelfServiceCallback={ noop }
      />
    </div>
 );
  console.log(output1)

  return res.send(`<div>${app}${output}${output1}</div>`);
});

app.use(express.static('./static'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});