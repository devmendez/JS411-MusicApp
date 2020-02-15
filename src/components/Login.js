import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import Dashboard from './Dashboard';

class Login extends Component {
    state = {
        user: '',
        pass: '',
        loggedIn: false
    }
    
    handleChange = (e) => {
        const copy = { ...this.state }
        copy[e.target.id] = e.target.value
        this.setState(copy)
    }
  
    submit = (e) => {
        e.preventDefault()
        if (this.state.pass === 'password') {
          this.setState({ loggedIn: true })
        }
    }

    render() {
        if (this.state.loggedIn) {
            return <Dashboard />
        } else {
            return (
                <div>
                <form style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    width: '250px', 
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingTop: '70px',
                    alignContent: 'center',                     
                    }} 
                    onSubmit={this.submit}
                    >
                    <TextField 
                    id='user' 
                    label='Username*' 
                    value={this.state.user} 
                    onChange={this.handleChange}
                    />
                    <TextField 
                    id='pass' 
                    label='Password*' 
                    type='password' value={this.state.pass} 
                    onChange={this.handleChange}
                    />
                    <Button style= {{marginTop:'20px'}} variant="contained" color="primary" type='Submit'>Login</Button>
               </form>
               </div> 
            );
        }
    }
}
export default Login;
