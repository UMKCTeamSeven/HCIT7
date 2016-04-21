import React, {
  Component,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import _ from "lodash"

import Lay from "./layout/Layout"
var {height, width} = Dimensions.get('window');

class Photos extends Component {
    render() {
        return(
      	<Lay.PageContainer>
          <Image
            resizeMode="stretch"
            style={styles.dollar}
            source={require("../CurrencyPhotos/10_noface-Copy.jpg")} />
        </Lay.PageContainer>
        )
    }
}

var styles = {
  dollar:{
    marginTop: 60,
    width: width,
    height: height
  },
}

module.exports = Photos