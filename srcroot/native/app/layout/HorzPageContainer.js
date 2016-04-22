import React, {
  Component,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import {Actions} from 'react-native-router-flux'


class HorzPageContainer extends Component {
    render() {
      return(
      	<View style={ styles.container }>
          {this.props.children}
        </View>
      )
    }
}

let styles = StyleSheet.create({
  container:{
    paddingTop:30,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around"
  }
})

module.exports = HorzPageContainer