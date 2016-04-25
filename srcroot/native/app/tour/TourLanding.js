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

        let h = width-30,
            w = height

    this.state = {
      currentLocation: 0,
      locations:[{
          title:"Counterfiet Money",
          about: "Shows the security features in currency",
          link: {data:"testing"},
          bottom: (45*h/100),
          left: (38*w/100),
          pic: require("../assets/money/50_noface.jpg")
        },{
          title:"Coin Wall",
          about: "Coins from every president",
          link: {data:"testing"},
          bottom: (37*h/100),
          left: (69*w/100),
          pic: require("../assets/money/50_noface.jpg")
        },{
          title:"abc123",
          about: "abc and 123",
          link: {data:"testing"},
          bottom: (26*h/100),
          left: (51*w/100),
          pic: require("../assets/money/50_noface.jpg")
        },{
          title:"123",
          about: "abc and 123",
          link: {data:"testing"},
          bottom: (35*h/100),
          left: (30*w/100),
          pic: require("../assets/money/50_noface.jpg")
      }]
    }
  }
  componentWillReceiveProps(nextProps){
    Actions.refresh(nextProps)
  }
  render() {
     let breadCrumbs = [{
          title:"home",
          link: "home"
        },{
          title:"Guided Tour",
          link: "tour"
        }]

    return(
      <Lay.HorzPageContainer>
        <BreadCrumbs path={breadCrumbs} />
        <View style={{flex:3}}>
          <Lay.PageContainer>
            <Image
              resizeMode="stretch"
              style={_.assign({}, styles.map, styles.pos)}
              source={require("../assets/money/GuidedTour_bg2.jpg")} />
            { _.map(this.state.locations,this.buttons.bind(this)) }
            { this.currentlyNear(this.state.locations[1]) }
          </Lay.PageContainer>
        </View>
      </Lay.HorzPageContainer>
    )
  }
  buttons(btn, indx){
    return(
      <LocBtn key={indx} data={btn} active={this.state.currentLocation==indx}
        btnKey={indx} onPress={ this.currentBtn.bind(this) } />
    )
  }
  currentBtn(indx){
    this.setState({currentLocation: indx})
  }
  currentlyNear(item){
    if(this.state.currentLocation == 3)
    return(
      <View style={ _.assign({}, styles.near) }>
        <TouchableHighlight onPress={ this.gotoNear.bind(this,item) }>
            <Text style={{fontSize:10}}>
              go to kiosk ->
            </Text>
        </TouchableHighlight>
      </View>
    )
  }
  gotoNear(item){
    Actions.kiosk_details(item)
  }

}

var styles = {
  near:{
    position: "absolute",
    height:30,
    width:50,
    top: -20,
    right: 10,
    borderColor: "darkgray",
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: "lightgray",
  },
  pos:{
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  map:{
    backgroundColor:"gray",
    height: width-30,
    width: height
  }
}

module.exports = Tour