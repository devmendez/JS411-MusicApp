import React, { Component } from 'react'
import './App.css'
import { AppBar, Toolbar } from '@material-ui/core'
import Login from './components/Login'


class App extends Component {
  render() {
      return (
        <div className="App">
          <AppBar style={{ background: "primary" }} position="static">
            <Toolbar>My Music App</Toolbar>
          </AppBar>
            <Login />
        </div>
     );
   }
}
export default App;
