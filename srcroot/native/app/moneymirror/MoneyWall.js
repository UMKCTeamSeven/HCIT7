import React, {
  Component,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');

import {Actions} from 'react-native-router-flux'
import _ from "lodash"

import LocBtn from "../UI/LocBtn"
import Lay from "../layout/Layout"
import BreadCrumbs from "../layout/BreadCrumbs"

class MoneyWall extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLocation: {}
    }
  }
    render() {
        let breadCrumbs = [{
          title:"home",
          link: "home"
        },{
          title:"coins",
          link: "moneywall"
        }]
        return(
          <Lay.HorzPageContainer>
            <BreadCrumbs path={breadCrumbs} />
            <View style={{flex:1}}>
              <View style={styles.container}>
                <Image
                  resizeMode="stretch"
                  style={_.assign({}, styles.wall)}
                  source={require("../assets/money/GuidedTour_bg2.jpg")} />
                <Text>
                abc
                </Text>
              </View>
            </View>
          </Lay.HorzPageContainer>
        )
    }
}

var styles = {
  wall:{
    height: 100,
    width: height
  },
  container:{
  }
}

module.exports = MoneyWall