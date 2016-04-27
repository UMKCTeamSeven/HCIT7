import React, {
  Component,
  Text,
  View,Linking,
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

import Store from "../layout/Store"
import Locations from "../location"

class Tour extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLocation: {},
      itemsActive: {}
    }
  }
  componentDidMount(){
    Store.set("TOC"+this.props.path,"true")
  }
    render() {
        let breadCrumbs = [{
          title:"home",
          link: "home"
        },{
          title:"kiosks",
          link: "kiosk_landing"
        },{
          title: this.props.crumb,
          link: "kiosk_landing"
        }]
        return(
          <Lay.HorzPageContainer>
            <BreadCrumbs path={breadCrumbs} />
            <View style={{flex:1}}>
              <View>
                <View style={styles.container}>
                  <Text>
                    { this.props.title }
                  </Text>
                  { this.audio() }
                </View>
                <Image
                  resizeMode="stretch"
                  style={_.assign({}, styles.pic)}
                  source={this.props.pic} />
                <Text>
                  { this.props.about }
                </Text>
                { this.coinwall() }
              </View>
            </View>
          </Lay.HorzPageContainer>
        )
    }
    audio(){
      if(this.props.crumb == "map")
        return(
          <TouchableHighlight 
              onPress={ this.gotoAudio }>
            <Image
              resizeMode="stretch"
              style={{height:20,width:20}}
              source={require("../assets/audio_icon.png")} />
          </TouchableHighlight>
        )
    }
    gotoAudio(){
      Linking.openURL("https://youtu.be/3ki5bLuDAZQ?t=1m1s")
      .catch(err => console.error('An error occurred', err));
    }
    coinwall(){
      if(this.props.crumb == "coin wall")
        return(
          <TouchableHighlight style={styles.cw}
              onPress={ this.gotoCoinWall }>
              <View>
                <Text style={{fontSize:10}}>
                  Interactive Wall ->
                </Text>
              </View>
          </TouchableHighlight>
        )
    }
    gotoCoinWall(){
      Actions.moneywall()
    }
}

var styles = {
  cw:{
    height: 15,
    width: 100,
    borderWidth: 2,
    borderColor: "blue"
  },
  pic:{
    height: width-100,
    width: height
  },
  container:{
    flexDirection: "row",
    justifyContent: "space-around"
  }
}

module.exports = Tour