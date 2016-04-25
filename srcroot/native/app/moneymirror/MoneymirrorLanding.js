import React, {
  Component,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import _ from "lodash"
import {Actions} from 'react-native-router-flux'

import BreadCrumbs from "../layout/BreadCrumbs"

class MoneymirrorLanding extends Component {
    render() {
      let bills=[{
        value: 100,
        pic: require("../../CurrencyPhotos/100DollarUSAOriginal_ROT90.png")
      },{
        value: 50,
        pic: require("../../CurrencyPhotos/50_noface.jpg")
      },{
        value: 20,
        pic: require("../../CurrencyPhotos/20_noface.jpg")
      },{
        value: 10,
        pic: require("../../CurrencyPhotos/10_noface.jpg")
      },{
        value: 5,
        pic: require("../../CurrencyPhotos/5_noface.jpg")
      },{
        value: 1,
        pic: require("../../CurrencyPhotos/1_noface.jpg")
      }]
      let breadCrumbs = [{
        title:"home",
        link: "home"
      },{
        title:"moneymirror",
        link: "moneymirror"
      }]
      return(
        <View >
          <BreadCrumbs path={breadCrumbs} />
          {_.map(bills,(bill,indx)=>{
            return(
              <View key={indx} style={ _.assign({}, styles.billLink) }>
                <TouchableHighlight onPress={ this.gotoBill.bind(this,bill) }>
                  <Text>${bill.value}</Text>
                </TouchableHighlight>
              </View>
            )
          })}
        </View>
      )
    }

    gotoBill(bill){
      Actions.moneyshot({billType:bill})
    }
}

var styles = {
  billLink:{
    marginTop:50,
    borderWidth:1,
    borderColor:"black"
  },
}

module.exports = MoneymirrorLanding