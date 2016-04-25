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

class KioskLanding extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
    render() {
        let breadCrumbs = [{
          title:"home",
          link: "home"
        },{
          title:"kiosks",
          link: "kiosk_landing"
        }]

      let locations = [{
          title:"Counterfiet Money",
          about: "Shows the security features in currency",
          link: {data:"testing"}
        },{
          title:"Coin Wall",
          about: "Coins from every president",
          link: {data:"testing"}
        },{
          title:"abc123",
          about: "abc and 123",
          link: {data:"testing"}
        },{
          title:"123",
          about: "abc and 123",
          link: {data:"testing"}
      }]
        return (
      <Lay.HorzPageContainer>
        <BreadCrumbs path={breadCrumbs} />
        <View style={{flex:1}}>
          <View style={styles.container}>
            { _.map(locations, this.card.bind(this)) }
          </View>
        </View>
      </Lay.HorzPageContainer>
        )
    }
    card(item,indx){
      return(
        <TouchableHighlight key={indx} style={styles.card}
            onPress={ this.gotoKiosk.bind(this,item) }>
          <Text style={{fontSize:15}}>
            {item.title}
          </Text>
        </TouchableHighlight>
      )
    }
    gotoKiosk(item){
      Actions.kiosk_details(item)
    }
}

var styles = {
  card:{
    width: width/3,
    height: width/3,
    backgroundColor: "green",
    borderColor: "black",
    borderWidth: 1
  },
  container:{
    flexDirection: "row",
    flexWrap: "wrap"
  }
}

module.exports = KioskLanding