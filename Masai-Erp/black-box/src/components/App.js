import React from 'react';
import Allregister from './Allregister';
import MentorRegister from './MentorRegister';
import CurrentStRegister from './CurrentStRegister';
import { BrowserRouter as Router, Route } from "react-router-dom";
export default class App extends React.Component{
  render(){
    return (
      <div>
        <Route path='/' exact component={Allregister}/>
        <Route path='/mentor' component={MentorRegister}/>
        <Route path='/current' component={CurrentStRegister}/>
         {/* <Allregister/> */}
      </div>
    )
  }
}




