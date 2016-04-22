import React, {
  Component,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import _ from "lodash"

import Lay from "../layout/Layout"
var {height, width} = Dimensions.get('window');

class MoneyShot extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

    render() {
        return(
      	<Lay.PageContainer>
          <Image
            resizeMode="stretch"
            style={styles.dollar}
            source={this.props.billType.pic} />
        </Lay.PageContainer>
        )
    }
}

var styles = {
  dollar:{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: width,
    height: height
  },
}

module.exports = MoneyShot