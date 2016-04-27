import React, {
  Component,
  View,
  Text,
  Image,
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

    return(
      <View style={ _.assign({}, styles.location, active) }>
        <TouchableHighlight onPress={ this.btnPress.bind(this,this.props.btnKey) }>
            { this.area() }
        </TouchableHighlight>
      </View>
    )
  }
  area(){
    if(!this.props.active)
      return(<Text/>)
    return(
      <Image
        resizeMode="stretch"
        style={_.assign({}, styles.map)}
        source={require("../assets/checkmark.png")} />
    )
  }
  btnPress(indx){
    this.props.onPress(indx)
  }
}

var styles = {
  map:{
    position: "relative",
    top: -10,
    left: 8,
    height:25,
    width:35,
  },
  location:{
    position: "absolute",
    height:25,
    width:35
  }
}

module.exports = MoneyButton


/*




*/