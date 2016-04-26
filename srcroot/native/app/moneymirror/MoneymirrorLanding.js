import React, {
  Component,
  Text,
  Image,
  View,
  TouchableHighlight,
  Dimensions,
  StyleSheet
} from 'react-native';
var {height, width} = Dimensions.get('window');

import _ from "lodash"
import {Actions} from 'react-native-router-flux'

import MoneyBtn from "../UI/MoneyBtn"
import Lay from "../layout/Layout"
import BreadCrumbs from "../layout/BreadCrumbs"



class MoneymirrorLanding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentBill: 0
    }
  }
    render() {
      let bills=[{
        value: 100,
        pic: require("../assets/money/100DollarUSAOriginal.jpg"),
        bottom: 52,
        left: 3
      },{
        value: 50,
        pic: require("../assets/money/50_noface.jpg"),
        bottom: 42,
        left: 3
      },{
        value: 20,
        pic: require("../assets/money/20_noface.jpg"),
        bottom: 32,
        left: 3
      },{
        value: 10,
        pic: require("../assets/money/10_noface.jpg"),
        bottom: 22,
        left: 3
      },{
        value: 5,
        pic: require("../assets/money/5_noface.jpg"),
        bottom: 12,
        left: 3
      },{
        value: 1,
        pic: require("../assets/money/1_noface.jpg"),
        bottom: 2,
        left: 3
      }]

      let breadCrumbs = [{
        title:"home",
        link: "home"
      },{
        title:"moneymirror",
        link: "moneymirror"
      }]

      return(
      <Lay.HorzPageContainer>
        <BreadCrumbs path={breadCrumbs} />
        <View style={{flex:3}}>
          <Lay.PageContainer>
            <Image
              resizeMode="stretch"
              style={_.assign({}, styles.map, styles.pos)}
              source={require("../assets/moneymirror.jpg")} />
            <Image
              resizeMode="stretch"
              style={_.assign({}, styles.map, styles.moneyPos)}
              source={bills[this.state.currentBill].pic} />
            { _.map(bills,this.buttons.bind(this)) }

            <View style={{ position: "absolute", backgroundColor: "#ff00ff00", width:35, left: 2*height/3-45, top: 10}}>
              <Text style={{fontSize:10}}>
                Take Photo
              </Text>
            </View>
          </Lay.PageContainer>
        </View>
      </Lay.HorzPageContainer>
      )
    }
    buttons(btn, indx){
      return(
        <MoneyBtn key={indx} data={btn} active={this.state.currentBill==indx}
          btnKey={indx} onPress={ this.currentBtn.bind(this) } />
      )
    }
    currentBtn(indx){
      this.setState({currentBill: indx})
    }
}

var styles = {
  pos:{
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  moneyPos:{
    position: "absolute",
    top: -25,
    left: height/3-10,
    height: 100,
    width: 2*height/3
  },
  map:{
    backgroundColor:"gray",
    height: width-30,
    width: height
  },
  billLink:{
    marginTop:50,
    borderWidth:1,
    borderColor:"black"
  },
}

module.exports = MoneymirrorLanding



/*




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

*/