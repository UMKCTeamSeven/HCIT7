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



class KioskContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
        let breadCrumbs = [{
          title:"home",
          link: "home"
        },{
          title:"kiosks",
          link: "kiosksOverview"
        }]
    return(
    	<Lay.HorzPageContainer>
        <BreadCrumbs path={breadCrumbs} />
    		<View style={{flex:1}}>
    			<DefaultRenderer navigationState={this.props.navigationState.children[0]} />
    		</View>
  		</Lay.HorzPageContainer>
		)
  }
}


module.exports = KioskContainer