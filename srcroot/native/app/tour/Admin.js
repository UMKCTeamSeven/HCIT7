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

import LocBtn2 from "../UI/LocBtn2"
import LocBtn3 from "../UI/LocBtn3"
import Lay from "../layout/Layout"
import BreadCrumbs from "../layout/BreadCrumbs"

import Store from "../layout/Store"
import Locations2 from "../location2"
import Locations3 from "../location3"

class Tour extends Component {
  constructor(props) {
    super(props)

        let h = width-30,
            w = height

    this.state = {
      currentLocation: 3
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
          title:"Guided Tour 2",
          link: "tour"
        }]

    return(
      <Lay.HorzPageContainer>
        <BreadCrumbs path={breadCrumbs} />
        <View style={{flex:3}}>
          <Lay.PageContainer>
            { _.map(Locations2,this.buttons.bind(this)) }
            { _.map(Locations3,this.buttons2.bind(this)) }
            { this.currentlyNear(Locations2[3]) }
          </Lay.PageContainer>
        </View>
      </Lay.HorzPageContainer>
    )
  }
  buttons(btn, indx){
    return(
      <LocBtn2 key={indx} data={btn} active={this.state.currentLocation==indx}
        btnKey={indx} onPress={ this.currentBtn.bind(this) } admin={true}/>
    )
  }
  buttons2(btn, indx){
    indx+=9
    return(
      <LocBtn3 key={indx} data={btn} active={this.state.currentLocation==indx}
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