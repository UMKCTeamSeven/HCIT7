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

class KioskLanding extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
    render() {
        return (
          <View style={styles.container}>
            { _.map(["kiosk 1","kiosk 2","3","4"],this.card) }
          </View>
        )
    }
    card(item,indx){
      return(
        <View key={indx} style={styles.card}>
          <Text style={{fontSize:15}}>
            {item}
          </Text>
        </View>
      )
    }
}

var styles = {
  card:{
    width: width/3,
    height: width/3,
    backgroundColor: "green",
    borderColor: "black",
    borderWidth: 1
  },
  container:{
    flexDirection: "row",
    flexWrap: "wrap"
  }
}

module.exports = KioskLanding