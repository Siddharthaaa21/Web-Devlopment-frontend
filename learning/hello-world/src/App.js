import React, { Component, Fragment } from 'react'; 
import logo from './logo.svg';

import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import Classclick from './components/Classclick';
import Eventbind from './components/Eventbind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
// import NameList from './NameList';
import Stylesheets from './components/Stylesheets';
import CustomclassName from './components/CustomclassName';
import LifecycleA from './components/LifecycleA';
import Fragments from './components/Fragments';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './ParentComp';
import RefsDemo from './components/RefsDemo';

import FocusInput from './components/focus_input';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';

import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import ComponentC from './components/ComponentC';
import {UserProvider,UserConsumer} from './components/userContext'
import ComponentF from './components/ComponentF';
class App extends Component {
  render() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
{/*      
      <Greet/>
      {/* <Welcome/> */}
      {/* <Hello/> */}
      {/* <Greet name="siddhartha" Heroname="is the only batman"/>
      <Greet name="siddhartha1"Heroname="is the only savior"/>
      <Greet name="siddhartha2"Heroname="is the only important"  /> */}
      {/* * <Welcome name="siddhartha"Heroname="important"/>
      <Welcome name="siddhartha1" Heroname="important"/>
      <Welcome name="siddhartha2" Heroname="important"/>  */}
      {/* <Message name="new" Heroname="i k you"/>
      <Counter/>
      <FunctionClick/>
      <Classclick/>
      <Eventbind/>
      <ParentComponent />
      <UserGreeting/> */}
      {/* <NameList/> */}
       {/* <Stylesheets/> 

      // <CustomclassName primary={false}/> */}
      {/* // <LifecycleA/> */}
     {/* <Fragments/> */}
     {/* <Table/> */}
     {/* <PureComp/> */}
      {/* <ParentComp/> */}
      {/* <RefsDemo/> */}
       {/* <input/> */}
       {/* <FocusInput /> Correct casing */}
       {/* <FRParentInput/> */}
       {/* <PortalDemo/> */}
        {/* <ClickCounter/>
       <HoverCounter/>  */}
       {/* <ClickCounter2/>
       <HoverCounter2/> */}
       {/* <UserProvider value="siddhartha"> */}
       <ComponentF/>

       {/* </UserProvider> */}
       {/* //adding top layer and provide the valuw to attribut  */}

       


    </div> 



);
}
}

export default App;
