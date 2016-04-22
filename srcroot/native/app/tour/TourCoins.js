import React, {
  Component,
  Text,
  View,
  StyleSheet
} from 'react-native';

import {Actions} from 'react-native-router-flux'
import _ from "lodash"

import Lay from "../layout/Layout"


class TourCoins extends Component {
  render() {
    return(
      <Lay.PageContainer>
        <Text>Look at all the coins</Text>
      </Lay.PageContainer>
    )
  }
}


module.exports = TourCoins