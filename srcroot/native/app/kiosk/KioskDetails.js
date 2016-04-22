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

class Tour extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLocation: {}
    }
  }
  componentWillReceiveProps(nextProps){
    Actions.refresh(nextProps)
  }
    render() {
        return(
            <View>
                <Text style={{fontSize:5}}>abc
                </Text>
                <Text style={{fontSize:5}}>123
                </Text>
            </View>
        )
    }

}

module.exports = Tour