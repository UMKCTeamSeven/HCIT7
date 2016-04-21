
import React, {
  Component,
  Text,
  View,
  StyleSheet
} from 'react-native';

import {Actions, Scene, Router, DefaultRenderer} from 'react-native-router-flux'
import _ from "lodash"

import TableofContents from "../TableofContents"
import Lay from "../layout/Layout"

import TourLanding from "./TourLanding"
import TourCounterfiet from "./TourCounterfiet"
import TourCoins from "./TourCoins"


class TourContainer extends Component {
  render() {
    return(
    	<Lay.HorzPageContainer>
    		<View style={{flex:1,marginTop:10}}>
    			<TableofContents />
    		</View>
    		<View style={{flex:3}}>
		    	<Router>
		        <Scene key="tourw" hideNavBar={true} type={"push"}>
		            <Scene key="tour_landing" component={TourLanding}/>
		            <Scene key="tour_counterfiet" component={TourCounterfiet} />
		            <Scene key="tour_coins" component={TourCoins} />
		        </Scene>
		      </Router>
    		</View>
  		</Lay.HorzPageContainer>
		)
  }
}


module.exports = TourContainer