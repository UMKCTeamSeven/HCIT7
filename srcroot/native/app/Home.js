import React, {
  Component,
  TouchableHighlight,
  Text,
  StyleSheet,
  View
} from 'react-native';

import _ from "lodash"
import {Actions} from 'react-native-router-flux'

class Home extends Component {
    render() {
        return(
      	<View style={ styles.container }>
          <View style={ styles.header }>
            <Text style={ {fontSize:40,fontWeight:"900"} }>Money Museum</Text>
          </View>
          <View style={{flex:2}}>
            <View style={ _.assign({},styles.btn) }>
              <TouchableHighlight onPress={ Actions.tour_landing }>
                <Text>Guided Tour</Text>
              </TouchableHighlight>
            </View>
            <View style={ _.assign({}, styles.btn) }>
              <TouchableHighlight onPress={ Actions.moneymirror_landing }>
                <Text>Money Mirror</Text>
              </TouchableHighlight>
            </View>
            <View style={ _.assign({}, styles.btn) }>
              <TouchableHighlight onPress={ Actions.moneywall }>
                <Text>Coin Wall</Text>
              </TouchableHighlight>
            </View>
            <View style={ _.assign({}, styles.btn) }>
              <TouchableHighlight onPress={ Actions.kiosk_landing }>
                <Text>Kiosks</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        )
    }
}

var styles = {
  header:{
    flex: 1
  },
  container: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  btn:{
    flexDirection: "row",
    alignSelf: "center",
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20
  }
}

module.exports = Home