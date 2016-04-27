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

class Tour extends Component {
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
        },{
          title: this.props.data.type,
          link: "moneywall"
        }]
        return(
          <Lay.HorzPageContainer>
            <BreadCrumbs path={breadCrumbs} />
            <View style={{flex:1}}>
              <View style={styles.container}>
                    <Image
                      resizeMode="stretch"
                      style={_.assign({}, styles.coinImg)}
                      source={require("../assets/money/pennyfront.png")} />
                <Text>
                  things about a { this.props.data.type }
                </Text>
              </View>
            </View>
          </Lay.HorzPageContainer>
        )
    }
}

var styles = {
  pic:{
    height: width-100,
    width: height
  },
  coinImg:{
    height: 100,
    width: 100
  }
}

module.exports = Tour