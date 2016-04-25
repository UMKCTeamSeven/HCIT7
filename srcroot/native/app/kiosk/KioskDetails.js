import React, {
  Component,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');

import {Actions} from 'react-native-router-flux'
import _ from "lodash"

import LocBtn from "../UI/LocBtn"
import Lay from "../layout/Layout"
import BreadCrumbs from "../layout/BreadCrumbs"

class Tour extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLocation: {}
    }
  }
    render() {
        let breadCrumbs = [{
          title:"home",
          link: "home"
        },{
          title:"kiosks",
          link: "kiosk_landing"
        },{
          title:"details",
          link: "kiosk_landing"
        }]
        return(
          <Lay.HorzPageContainer>
            <BreadCrumbs path={breadCrumbs} />
            <View style={{flex:1}}>
              <View style={styles.container}>
                <Text>
                  { this.props.title }
                </Text>
                <Image
                  resizeMode="stretch"
                  style={_.assign({}, styles.pic)}
                  source={this.props.pic} />
                <Text>
                  { this.props.about }
                </Text>
              </View>
            </View>
          </Lay.HorzPageContainer>
        )
    }
}

var styles = {
  pic:{
    height: width-100,
    width: height
  },
  container:{
  }
}

module.exports = Tour