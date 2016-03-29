import React, {
  Component,
  Text,
  View
} from 'react-native';

class About extends Component {
    render() {
        return(
      	<View style={ {marginTop: 100} }>
	        <Text>
	          About things
	        </Text>
        </View>
        )
    }
}

module.exports = About