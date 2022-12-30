import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactQuill, { Quill }  from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import ImageResize from 'quill-image-resize-module-react';
Quill.register('modules/ImageResize', ImageResize);

const modules = {
  toolbar: [
    [{size: []}],
    [{ 'font': [] }],
    [{ 'color': [] }, { 'background': [] }], 
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
  ImageResize: {
    modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
  }   
}

function App() {
  const [value, setValue] = useState('');
  console.log(value)
  
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className='title-text'>React-quill</h1>
        <div className='Quill-container'>
          <ReactQuill 
            theme="snow" 
            value={value} 
            onChange={setValue} 
            modules={modules}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
