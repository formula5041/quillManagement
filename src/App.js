// css
import './App.css';
import 'react-quill/dist/quill.snow.css';
// assets
import logo from './assets/atom.svg';
// modules
import React, { useState, useEffect } from 'react';
import ReactQuill, { Quill }  from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
// UI modules
import { Grid, Spacer } from '@nextui-org/react';
import { TiCancel } from "react-icons/ti";
import { IoMdSave, IoIosEye, IoMdEye, IoLogoIonic } from "react-icons/io";
import { IoCloudDone, IoCloudOffline, IoAirplane, IoBriefcase, IoFastFood, IoBook } from "react-icons/io5";
// components
// import Card from './components/nextui/Card'
import CardArticleBox from './components/nextui/modular/CardArticleBox'
import Button from './components/nextui/Button'
import Input from './components/nextui/Input'
import Switch from './components/nextui/Switch'
import Text from './components/nextui/Text'
import SingleSelection from './components/nextui/SingleSelection'
import Progress from './components/nextui/Progress'
// mixin
import booklists from './mixin/booklists'
import quillModules from './mixin/quillConfig'
// register quill components
Quill.register('modules/ImageResize', ImageResize);

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

const App = () => {
  const [quillContent, setQuillContent] = useState('')
  const [scrollPosition, setScrollPosition] = useState(0)
  const [articleFilrerValue, setArticleFilrerValue] = useState('')
  const [articleLatestState, setArticleLatestState] = useState(false)
  const [articlePublishedState, setArticlePublishedState] = useState(false)
  

  const moveBar = () =>{
    let progress = Math.ceil((Math.round(window.pageYOffset) /(document.body.scrollHeight - window.innerHeight)) * 100)
    setScrollPosition(progress)
  }

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      moveBar()
    })
    return () => {
      window.removeEventListener('scroll', moveBar);
    };
  },[scrollPosition])

  const saveFunc = () =>{
    console.log('Content is saved!')
    console.log(quillContent)
  }
  const clearFunc = () =>{
    setQuillContent('')
  }

  const selectFun = (value) =>{
    console.log(value)
  }

  const articleSelector = (e) => {
    let selectType = e.target.textContent
    switch (selectType) {
      case 'Show All':
        setArticleLatestState(false)
        setArticleFilrerValue('')
        break
      case 'Show Latest':
        setArticleLatestState(!articleLatestState)
        break
      case 'Show Published':
        setArticlePublishedState(!articlePublishedState)
        break
      default:
        console.log('default')
    }
  }
  const articleFilterFun = (e) =>{
    let value = e.target.value
    setArticleFilrerValue(value)
  }

  return (
      <div className="App">
        <div className="App-container">
          <Progress
            positionValue={scrollPosition}
            css={{
              position: "sticky",
              top: 0,
              zIndex: 100,
            }}
          />
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
                  css={{
                    textAlign: "start",
                    width: "500px",
                  }}
                />
              </Grid>
              <Grid xs={12} justify="flex-start" alignItems="center">
                  <Text 
                    text="Type:"
                    color="#75757570"
                    h5={true}
                    css={{
                      margin: 0
                    }}
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
                    text="Published:"
                    color="#75757570"
                    h5={true}
                    css={{
                      margin: 0
                    }}
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
              value={quillContent} 
              onChange={setQuillContent} 
              modules={quillModules}
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
          <Grid.Container
            css={{
              padding: '40px'
            }}
          >
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

            <Grid xs={12}>
              <Input
                clearable
                rounded
                label="SEARCH"
                placeholder="Enter your articles"
                size="xl"
                status="warning"
                css={{
                  textAlign: "start",
                  width: "400px",
                  margin: 10,
                }}
                onChange={articleFilterFun}
              />
            </Grid>
            <Grid xs={4} justify="center">
              <Button
                shadow={true}
                size="xl"
                color="success"
                icon={<IoMdEye size={24}/>}
                iconName="Show All"
                clickHandler={articleSelector}
                css={{
                  margin: 10
                }}
              />
            </Grid>
            <Grid xs={4} justify="center">
              <Button
                shadow={true}
                size="xl"
                color="warning"
                icon={<IoIosEye size={30}/>}
                iconName="Show Latest"
                clickHandler={articleSelector}
                css={{
                  margin: 10
                }}
              />
            </Grid>
            <Grid xs={4} justify="center">
              <Button
                shadow={true}
                size="xl"
                color="secondary"
                icon={<IoLogoIonic size={30}/>}
                iconName="Show Published"
                clickHandler={articleSelector}
                css={{
                  margin: 10
                }}
              />
            </Grid>
            <Grid.Container gap={2} justify="flex-start">
              <CardArticleBox 
                lists={booklists}
                fil={articleFilrerValue}
                latestState={articleLatestState}
                publishedState={articlePublishedState}
              />
            </Grid.Container>
          </Grid.Container>
        </div>
      </div>
  );
}

export default App;
