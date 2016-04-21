import React, {
  Component,
  Text,
  View,
  StyleSheet
} from 'react-native';

import {Actions} from 'react-native-router-flux'
import _ from "lodash"

import Lay from "../layout/Layout"


class TourCounterfiet extends Component {
  render() {
    return(
      <Lay.PageContainer>
        <Text>Spot the counterfiet</Text>
      </Lay.PageContainer>
    )
  }
}


module.exports = TourCounterfiet