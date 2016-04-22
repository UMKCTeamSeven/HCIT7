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
          <View style={{flex:1}}>
            <View style={ _.assign({},styles.btn) }>
              <TouchableHighlight onPress={ Actions.tour }>
                <Text>Guided Tour</Text>
              </TouchableHighlight>
            </View>
            <View style={ _.assign({}, styles.btn) }>
              <TouchableHighlight onPress={ Actions.moneymirror }>
                <Text>Money Mirror</Text>
              </TouchableHighlight>
            </View>
            <View style={ _.assign({}, styles.btn) }>
              <TouchableHighlight onPress={ Actions.kioskOverview }>
                <Text>Kiosk Overview</Text>
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
    marginTop: 100,
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