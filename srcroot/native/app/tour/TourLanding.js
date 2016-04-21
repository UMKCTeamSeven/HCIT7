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

class Tour extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLocation: {}
    }
  }
    render() {
        let h2 = height-60,
            w2 = 3*width/4
        return(
          <Lay.PageContainer>
              <Image
                resizeMode="stretch"
                style={_.assign({}, styles.map, styles.pos)}
                source={require("../../CurrencyPhotos/map.png")} />
              <LocBtn title="Counterfiet" active={this.state.currentLocation}
                activekey="Counterfiet Money"
                dim={ {bottom: (90*h2/100), left: (58*w2/100)} }
                onPress={ this.gotoLoc.bind(this,"t") } />
              <LocBtn title="Coins" active={this.state.currentLocation}
                activekey="Coin Wall"
                dim={ {bottom: (39*h2/100), left: (86*w2/100)} }
                onPress={ this.gotoLoc.bind(this,"r") } />
              <LocBtn title="abc" active={this.state.currentLocation}
                activekey="abc"
                dim={ {bottom: (3*h2/100), left: (50*w2/100)} }
                onPress={ this.gotoLoc.bind(this,"b") } />
              <LocBtn title="abc" active={this.state.currentLocation}
                activekey="123"
                dim={ {bottom: (47*h2/100), left: (15*w2/100)} }
                onPress={ this.gotoLoc.bind(this,"l") } />
              <View style={_.assign({}, styles.pos,
                {bottom: (h2-54), left: (w2-50),
                  borderStyle:"solid", borderColor: "red", borderWidth:1,
                  height:50,width:50})}>
                <TouchableHighlight onPress={ this.nav.bind(this,this.state.currentLocation.link) } underlayColor={"white"}>
                  <View>
                  <Text style={{fontSize:5}}>
                    { "Location: "+ this.state.currentLocation.title }
                  </Text>
                  <Text style={{fontSize:5}}>
                    { "About: "+ this.state.currentLocation.about }
                  </Text>
                  </View>
                </TouchableHighlight>
              </View>
          </Lay.PageContainer>
        )
    }

    nav(loc){
      Actions[loc]()
    }

    gotoLoc(loc){
      switch(loc){
        case "t":
          this.setState({currentLocation:{
            title:"Counterfiet Money",
            about: "Shows the security features in currency",
            link: "tour_counterfiet"
          }})
          break;
        case "r":
          this.setState({currentLocation:{
            title:"Coin Wall",
            about: "Coins from every president",
            link: "tour_coins"
          }})
          break;
        case "b":
          this.setState({currentLocation:{
            title:"abc",
            about: "abc and 123",
            link: "tour_coins"
          }})
          break;
        case "l":
          this.setState({currentLocation:{
            title:"abc",
            about: "abc and 123",
            link: "tour_coins"
          }})
          break;
      }
      console.log(loc)
    }
}

var styles = {
  pos:{
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  map:{
    backgroundColor:"gray",
    height: height-60,
    width: 3*width/4
  }
}

module.exports = Tour