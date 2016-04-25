import React, {
  Component,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import _ from "lodash"
import {Actions} from 'react-native-router-flux'

var {height, width} = Dimensions.get('window');

class BreadCrumbs extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
    	<View style={styles.container}>
        { this.crumbs(_.initial(this.props.path)) }
        { this.lastCrumb(_.last(this.props.path)) }
      </View>
    )
  }
  crumbs(crumbs){
    return  _.map(crumbs,(crumb,indx)=>{
              return(
                <TouchableHighlight key={indx} onPress={ Actions[crumb.link] }>
                  <View style={styles.crumb}>
                    <Text style={{ fontWeight: "700",fontSize: 10 }}>
                      {crumb.title}
                    </Text>
                  </View>
                </TouchableHighlight>
              )
            })
  }
  lastCrumb(crumb){
    return(
      <View style={styles.lastCrumb}>
        <Text style={{ fontWeight: "700",fontSize: 10 }}> {crumb.title}</Text>
      </View>
    )
  }
}

var styles = {
  container:{
    position: "absolute",
    top: 10,
    left: 10,
    height: 20,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  crumb:{
    flex: 1,
    padding: 3,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 3
  },
  lastCrumb:{
    flex: 1,
    padding: 3,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 3
  }
}

module.exports = BreadCrumbs