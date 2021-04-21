import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Face from './FaceComponent';

import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { PICS } from '../shared/dogpics';


class Main extends Component {
    // looks like html code but is composed of react elements
    constructor(props) { //lifting state up
      super(props);
      this.state = { 
        pics: PICS
      };
    }

  render() {
    // console.log("pics is", this.state.pics);

    const HomePage = () => {
        return (
          <Home 
            pic1= {this.state.pics.filter((pic) => pic.featured)[0]}
            pic2= {this.state.pics.filter((pic) => pic.featured)[1]}
          />  
        );
    }

    return(
      <div>
        
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} /> 
            <Route exact path="/faceapi" component={Face}/>
            <Redirect to = "/home" /> 
        </Switch>
      </div>
    );
        
  }
}

export default Main;