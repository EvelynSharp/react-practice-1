import React from 'react';
import ReactDom from 'react-dom';
//make a component which produce html
import{ YOUTUBE_DATA_API_KEY } from './keys'
const API_KEY = process.env.YOUTUBE_DATA_API_KEY;

//const as will never reassign App
const App = () => {
  return <div> hi {process.env.YOUTUBE_DATA_API_KEY}</div>;
}

//take the generated html and put in DOM
//need to tell where -> the second argument
//-> existing index.html element -> it's the root container
ReactDom.render(<App />, document.querySelector('.container'));
