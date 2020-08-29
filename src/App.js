
import React from 'react';
import Test from './Testimonial'
import {Switch ,  Route} from 'react-router-dom';
import Achievements from './achivements.js';

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Test></Test>
        <Switch>
            <Route path="/Achievements.js" component={Achievements}></Route>
        </Switch><br/>
        <Achievements></Achievements>
      </React.Fragment>
    )
  }
}
export default App;