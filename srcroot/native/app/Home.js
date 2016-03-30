import React, {
  Component,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import {Actions} from 'react-native-router-flux'

class Home extends Component {
    render() {
        return(
      	<View>
                <Text>Launch page</Text>

          <TouchableHighlight onPress={ ()=>Actions.login({data:"Custom data", title:'Custom title' }) }>
            <Text>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={ ()=>Actions.tabbar }>
            <Text>Home</Text>
          </TouchableHighlight>
        </View>
        )
    }
}

module.exports = Home