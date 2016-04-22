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
import BreadCrumbs from "../layout/BreadCrumbs"



class TourContainer extends Component {
  render() {
        let breadCrumbs = [{
          title:"home",
          link: "home"
        },{
          title:"Guided Tour",
          link: "tour"
        }]
    return(
    	<Lay.HorzPageContainer>
        <BreadCrumbs path={breadCrumbs} />
    		<View style={{flex:3}}>
    			<DefaultRenderer navigationState={this.props.navigationState.children[0]} />
    		</View>
  		</Lay.HorzPageContainer>
		)
  }
}


module.exports = TourContainer

/*

        <View style={{flex:1,marginTop:10}}>
          <TableofContents />
        </View>
*/