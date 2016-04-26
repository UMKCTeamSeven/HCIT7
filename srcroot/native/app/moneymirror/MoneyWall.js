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
              <Image
                resizeMode="stretch"
                style={_.assign({}, styles.wall)}
                source={require("../assets/kiosks/CoinWall.jpg")} />
              <View style={styles.container}>
                <View style={styles.panel}>
                  <Image
                    style={_.assign({}, styles.panelImg)}
                    source={require("../assets/kiosks/CoinWall.jpg")} />
                </View>

                <View style={styles.coins}>
                  <Image
                    resizeMode="stretch"
                    style={_.assign({}, styles.panelImg)}
                    source={require("../assets/kiosks/CoinWall.jpg")} />
                </View>
              </View>
            </View>
          </Lay.HorzPageContainer>
        )
    }
}

var styles = {
  panelImg:{
    height: 150,
    width: 100
  },
  wall:{
    height: 150,
    width: height
  },
  panel:{
    flex:1,
    backgroundColor: "green"
  },
  coins:{
    flex:4,
    backgroundColor: "red"
  },
  container:{
    height: width-180,
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start"
  }
}

module.exports = MoneyWall