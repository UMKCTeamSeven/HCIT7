import {Actions, Scene, Router} from 'react-native-router-flux';
import React, {Component, Text, AsyncStorage} from 'react-native';

import Home from "./Home"
import TableofContents from "./TableofContents"

import KioskContainer from "./kiosk/KioskContainer"
import KioskLanding from "./kiosk/KioskLanding"
import KioskDetails from "./kiosk/KioskDetails"

import MoneymirrorLanding from "./moneymirror/MoneymirrorLanding"
import MoneymirrorMoneyShot from "./moneymirror/MoneyShot"

import TourContainer from "./tour/TourContainer"
import TourLanding from "./tour/TourLanding"
import TourCounterfiet from "./tour/TourCounterfiet"
import TourCoins from "./tour/TourCoins"


class TabIcon extends Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

//reset table of contents
AsyncStorage.clear()

class App extends Component {
  render() {
    return(
    	<Router>
        <Scene key="root">
          <Scene key="home" component={Home} hideNavBar={true} initial={true}/>

          <Scene key="moneymirror">
            <Scene key="moneymirror_landing" component={MoneymirrorLanding} hideNavBar={true}/>
            <Scene key="moneyshot" component={MoneymirrorMoneyShot} hideNavBar={true}/>
          </Scene>

          <Scene key="kioskOverview" component={KioskContainer}>
            <Scene key="kiosk_landing" component={KioskLanding} hideNavBar={true}/>
            <Scene key="kiosk_details" component={KioskDetails} hideNavBar={true}/>
          </Scene>

          <Scene key="tour" component={TourContainer}>
            <Scene key="tour_landing" component={TourLanding} hideNavBar={true} />
            <Scene key="tour_counterfiet" component={TourCounterfiet} hideNavBar={true} />
            <Scene key="tour_coins" component={TourCoins} hideNavBar={true} />
          </Scene>

        </Scene>
      </Router>
    )
  }
}

module.exports = App



/*


          <Scene key="tabbar" tabs={true} default="tab2" >
              <Scene key="tab1"  title="Tab #1" icon={TabIcon} navigationBarStyle={{backgroundColor:'red'}} titleStyle={{color:'white'}}>
                  <Scene key="tab1_1" component={Login} title="Tab #1_1" onRight={()=>alert("Right button")} rightTitle="Right" />
                  <Scene key="tab1_2" component={Login} title="Tab #1_2" titleStyle={{color:'black'}}/>
              </Scene>
              <Scene key="tab2" title="Tab #2" icon={TabIcon}>
                  <Scene key="tab2_1" component={Login} title="Tab #2_1" onLeft={()=>alert("Left button!")} leftTitle="Left"/>
                  <Scene key="tab2_2" component={Login} title="Tab #2_2"/>
              </Scene>
              <Scene key="about" component={About} title="About" icon={TabIcon}/>
              <Scene key="photos" component={Photos} title="Photos" icon={TabIcon} />
              <Scene key="tab5" component={Login} title="Tab #5" icon={TabIcon} />
          </Scene>

*/