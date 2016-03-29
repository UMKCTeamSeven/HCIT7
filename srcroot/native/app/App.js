import {Actions, Scene, Router} from 'react-native-router-flux';
import React, {Component, Text} from 'react-native';

import Login from "./Login"
import Home from "./Home"
import About from "./About"
import Photos from "./Photos"

class TabIcon extends Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

class App extends Component {
  render() {
    return(
    	<Router>
        <Scene key="root">
          <Scene key="tabbar" tabs={true} default="tab2" >
              <Scene key="tab1"  title="Tab #1" icon={TabIcon} navigationBarStyle={{backgroundColor:'red'}} titleStyle={{color:'white'}}>
                  <Scene key="tab1_1" component={Login} title="Tab #1_1" onRight={()=>alert("Right button")} rightTitle="Right" />
                  <Scene key="tab1_2" component={Login} title="Tab #1_2" titleStyle={{color:'black'}}/>
              </Scene>
              <Scene key="tab2" initial={true} title="Tab #2" icon={TabIcon}>
                  <Scene key="tab2_1" component={Login} title="Tab #2_1" onLeft={()=>alert("Left button!")} leftTitle="Left"/>
                  <Scene key="tab2_2" component={Login} title="Tab #2_2"/>
              </Scene>
              <Scene key="about" component={About} title="About" icon={TabIcon}/>
              <Scene key="photos" component={Photos} title="Photos" icon={TabIcon} />
              <Scene key="tab5" component={Login} title="Tab #5" icon={TabIcon} />
          </Scene>
          <Scene key="home" component={Home}/>
          <Scene key="login" component={Login} title="Login"/>
        </Scene>
      </Router>
    )
  }
}

module.exports = App