import React, {
  Component,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import {Actions} from 'react-native-router-flux'


class PageContainer extends Component {
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
    marginTop:30,
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "red"
  }
})

module.exports = PageContainer