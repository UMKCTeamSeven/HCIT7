import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from "./app/App"

class native extends Component {
  render() {
    return (
        <App />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('native', () => native);
