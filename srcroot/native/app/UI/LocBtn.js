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

class LocationButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
        let h2 = width-30,
            w2 = height

    let active = {  bottom: this.props.data.bottom,
                    left: this.props.data.left
    }
    if(this.props.active)
      active.backgroundColor ="green"

    return(
      <View style={ _.assign({}, styles.location, active) }>
        <TouchableHighlight onPress={ this.btnPress.bind(this,this.props.btnKey) }>
            <Text/>
        </TouchableHighlight>
        { this.infoBox() }
      </View>
    )
  }
  btnPress(indx){
    this.props.onPress(indx)
  }
  infoBox(){
    if(this.props.active)
    return(
      <View style={_.assign({}, styles.info)}>
        <Text style={{fontSize:5}}>
          { "Location: "+ this.props.data.title }
        </Text>
        <Text style={{fontSize:5}}>
          About: { this.props.data.about }
        </Text>
        <TouchableHighlight onPress={ this.moreInfoPress.bind(this) } underlayColor={"white"}>
          <Text style={{fontSize:5,color:"blue"}}>
            More...
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
  moreInfoPress(){
    Actions.kiosk_details(this.props.data)
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
    height:15,
    width:15,
    borderRadius: 15,
    borderWidth: 2,
  }
}

module.exports = LocationButton


/*




*/