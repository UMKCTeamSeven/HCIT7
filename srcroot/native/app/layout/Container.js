
import React, {
  Component,
  View,
} from 'react-native';

import {DefaultRenderer} from 'react-native-router-flux'


class Container extends Component {
  render() {
    const children = this.props.navigationState.children;
    return(
  		<View style={{marginTop:60}}>
  			<DefaultRenderer navigationState={children[0]} />
  		</View>
		)
  }
}


module.exports = Container