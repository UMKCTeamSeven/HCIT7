import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');

import _ from "lodash"

class LocationButton extends Component {
  constructor(props) {
    super(props)
    this.state = {width: 0}
  }
  render() {

    var styles = {
      location:{
        position: "absolute",
        backgroundColor: "white",
        height: 30,
        bottom: this.props.dim.bottom,
        left: this.props.dim.left-(this.state.width/2),
        borderRadius: 5,
        borderWidth: 1,
      }
    }
    let active = {}
    if(this.props.active.title == this.props.activekey)
      active = {backgroundColor:"green"}

    return(
      <TouchableHighlight onPress={ this.props.onPress }
        style={ _.assign({}, styles.location, active) }>
          <Text style={ {justifyContent:"center"} } onLayout={ this.getSize.bind(this) }>
            { (this.props.title)? this.props.title : "?" }
          </Text>
      </TouchableHighlight>
    )
  }

  getSize(a){
    this.setState({width:a.nativeEvent.layout.width})
  }
}


module.exports = LocationButton