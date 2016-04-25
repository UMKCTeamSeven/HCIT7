import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');

import _ from "lodash"
import {Actions} from 'react-native-router-flux'

class MoneyButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
        let h2 = width-30,
            w2 = height

    let active = {  bottom: this.props.data.bottom*h2/100,
                    left: this.props.data.left*w2/100
    }
    if(this.props.active)
      active.borderWidth = 2

    return(
      <View style={ _.assign({}, styles.location, active) }>
        <TouchableHighlight onPress={ this.btnPress.bind(this,this.props.btnKey) }>
            <Text/>
        </TouchableHighlight>
      </View>
    )
  }
  btnPress(indx){
    this.props.onPress(indx)
  }
}

var styles = {
  info:{
    position: "relative",
    borderStyle:"solid",
    bottom: 30,
    left: 15,
    borderColor: "darkgray",
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "lightgray",
    padding: 3,
    width: 70
  },
  location:{
    position: "absolute",
    height:25,
    width:35,
    borderRadius: 2
  }
}

module.exports = MoneyButton


/*




*/