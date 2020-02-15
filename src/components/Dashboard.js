import React, { Component } from 'react';
import Greeting from './Greeting';
import SwitchCard from './SwitchCard';
import SliderCard from './SliderCard';
import SelectCard from './SelectCard';
import SystemNotifications from './SystemNotifications';
  

class Dashboard extends Component {
    state = {
      notifications: [],
      checked: true,
      volume: 0,
      quality: 30
    };
  
    render() {
      const notifications = this.state.notifications;
  
      return (
        <div>
          <Greeting />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px"
            }}
          >
            <SwitchCard
              onChange={this.handleChange}
              value={this.state.checked}              
            />
            <SliderCard
              onChange={this.handleVolumeChange}
              value={this.state.volume}
            />
            <SelectCard
              onChange={this.handleQualityChange}
              value={this.state.quality}
            />
          </div>
          <SystemNotifications notifications={notifications} />
        </div>
      );
    }
  }
  
  export default Dashboard;