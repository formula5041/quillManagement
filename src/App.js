// css
import './App.css';
import 'react-quill/dist/quill.snow.css';
// assets
import logo from './assets/atom.svg';
// modules
import React, { useState } from 'react';
import ReactQuill, { Quill }  from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
// UI modules
import { Grid } from '@nextui-org/react';
import { TiCancel } from "react-icons/ti";
import { IoMdSave } from "react-icons/io";
// components
import Card from './components/nextui/Card'
import Button from './components/nextui/Button'
// register quill components
Quill.register('modules/ImageResize', ImageResize);

const modules = {
  toolbar: [
    [{size: []}],
    [{ 'font': [] }],
    [{ 'color': [] }, { 'background': [] }], 
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      {'list': 'ordered'}, {'list': 'bullet'}, 
      {'indent': '-1'}, {'indent': '+1'}
    ],
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
  const [value, setValue] = useState('')

  const saveFunc = () =>{
    console.log('Content is saved!');
    console.log(value);
  }
  const clearFunc = () =>{
    setValue('')
  }

  return (
      <div className="App">
        <div className="App-container">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className='title-text'>React-quill</h1>
          <div className='Quill-container'>
            <ReactQuill 
              theme="snow" 
              value={value} 
              onChange={setValue} 
              modules={modules}
            />
            <div className='button-click'>
              <Grid.Container gap={2} justify="center">
                <Button
                  shadow={true}
                  size="md"
                  color="myColor"
                  icon={<IoMdSave size={24}/>}
                  iconName="Save"
                  clickHandler={saveFunc}
                />
                <Button
                  shadow={true}
                  size="md"
                  color="error"
                  icon={<TiCancel size={24}/>}
                  iconName="Cancle"
                  clickHandler={clearFunc}
                />
              </Grid.Container>
            </div>
          </div>
          <Grid.Container>
            <Grid xs={4}>
              <Card
                text="The Shawshank Redemption."
                color="$colors$secondary"
              />
            </Grid>
            <Grid xs={4}>
              <Card
                text="Fall from Innocence."
                color="$colors$success"
              />
            </Grid>
            <Grid xs={4}>
              <Card
                text="Summer of Corruption."
                color="$colors$warning"
              />
            </Grid>
          </Grid.Container>
        </div>
      </div>
  );
}

export default App;
