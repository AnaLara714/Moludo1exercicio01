import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './Welcome';

const title =  process.env.REACT_APP_TITLE;
const footer_desc = process.env.REACT_APP_FOOTER;


ReactDOM.render(
    <Welcome title={title} footer_desc={footer_desc} />
    ,
  document.getElementById('root')
);
