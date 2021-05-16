import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Face from './FaceComponent';
import Board from './BoardComponent';

import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { PICS } from '../shared/dogpics';
import { AWARDS } from '../shared/awards';



class Main extends Component {
    // looks like html code but is composed of react elements
    constructor(props) { //lifting state up
      super(props);
      this.state = { 
        pics: PICS,
        awards: AWARDS
      };
    }

  render() {
    // console.log("pics is", this.state.pics);

    const HomePage = () => {
        return (
          <Home 
            pic1= {this.state.pics.filter((pic) => pic.featured)[0]}
            pic2= {this.state.pics.filter((pic) => pic.featured)[1]}
            dog1= {this.state.awards.filter((award) => award.featured)[0]}
            dog2= {this.state.awards.filter((award) => award.featured)[1]}
            dog3= {this.state.awards.filter((award) => award.featured)[2]}

          />  
        );
    }

    return(
      <div>
        {/* component={() => <Clothes clothes={this.state.clothes} />}/>  */}
        
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} /> 
            <Route exact path="/faceapi" component={Face}/>
            <Route exact path="/dogeboard" component={() => <Board pic1 = {this.state.pics.filter((pic) => pic.featured)[0]}/>}/>
            <Redirect to = "/home" /> 
        </Switch>
      </div>
    );
        
  }
}

export default Main;