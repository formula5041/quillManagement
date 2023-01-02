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
import { Grid, Spacer } from '@nextui-org/react';
import { TiCancel } from "react-icons/ti";
import { IoMdSave } from "react-icons/io";
import { IoCloudDone, IoCloudOffline, IoAirplane, IoBriefcase, IoFastFood, IoBook } from "react-icons/io5";
// components
import Card from './components/nextui/Card'
import Button from './components/nextui/Button'
import Input from './components/nextui/Input'
import Switch from './components/nextui/Switch'
import Text from './components/nextui/Text'
import SingleSelection from './components/nextui/SingleSelection'
// import Progress from './components/nextui/Progress'
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

  const selectFun = (value) =>{
    console.log(value)
  }

  const dropdownItems = {
    travel:{
      name: "Travel",
      key: "travel",
      icon: <IoAirplane/>
    },
    work:{
      name: "Work",
      key: "work",
      icon: <IoBriefcase/>
    },
    bookReview:{
      name: "Book Review",
      key: "book_review",
      icon: <IoBook/>
    },
    foods:{
      name: "Foods",
      key: "foods",
      icon: <IoFastFood/>
    },
  }

  return (
      <div className="App">
        <div className="App-container">
          <img src={logo} className="App-logo" alt="logo"/>
          <Spacer y={2}/>
          <Text
            text="React-quill"
            size={70}
            css={{
              textGradient: "45deg, $blue600 -20%, $green800 80%",
              margin: 0,
            }}
          />
          <Spacer y={2}/>
          <div className='Quill-container'>
            <Grid.Container gap={2} justify="center">
              <Grid xs={12}>
                <Input
                  rounded
                  bordered
                  labelLeft="TITLE"
                  placeholder="ENTER YOUR TITLE"
                  color="warning"
                  size="xl"
                />
              </Grid>
              <Grid xs={12} justify="flex-start" alignItems="center">
                  <Text 
                    text="Type:"
                    color="#75757570"
                    h5={true}
                  />
                  <Spacer x={1} />
                  <SingleSelection
                    color="secondary"
                    selectionMode="single"
                    firstItemName="travel"
                    dropdownItems={dropdownItems}
                    selectionChangeHandler={selectFun}
                  />
                  <Spacer x={1} />
                  <Text 
                    text="Publish:"
                    color="#75757570"
                    h5={true}
                  />
                  <Spacer x={1} />
                  <Switch
                    checked={false}
                    size="md"
                    color="success"
                    iconOn={<IoCloudDone color='success'/>}
                    iconOff={<IoCloudOffline/>}
                  />
              </Grid>
            </Grid.Container>
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
                  color="success"
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
            <Grid xs={12} justify="flex-start" alignItems='center'>
              <Text
                text="Latest Articles"
                color="#67C2AE"
                h2={true}
                css={{
                  margin: 10,
                }}
              />
            </Grid>
            <Grid xs={4}>
              <Card
                text="Shawshank Redemption."
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
