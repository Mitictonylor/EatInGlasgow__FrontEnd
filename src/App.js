import React, {Component} from 'react';
import './App.css';
import MainContainer from './containers/MainContainer.js'
import UserRestaurantMap from './components/users/UserRestaurantMap.js'

class App extends Component {
  render(){
  return (
    <div>
    <MainContainer/>
    </div>
  );
}
}

export default App;
