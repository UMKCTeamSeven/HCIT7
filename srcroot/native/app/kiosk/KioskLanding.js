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

import Locations from "../location"

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
        
        return (
      <Lay.HorzPageContainer>
        <BreadCrumbs path={breadCrumbs} />
        <View style={{flex:1}}>
          <View style={styles.container}>
            { _.map(Locations, this.card.bind(this)) }
          </View>
        </View>
      </Lay.HorzPageContainer>
        )
    }
    card(item,indx){
      return(
        <TouchableHighlight key={indx} style={styles.card}
            onPress={ this.gotoKiosk.bind(this,item) }>
            <View>
              <Text style={{fontSize:10}}>
                {item.title}
              </Text>
              <Image
                resizeMode="stretch"
                style={_.assign({}, styles.pic)}
                source={item.pic} />
            </View>
        </TouchableHighlight>
      )
    }
    gotoKiosk(item){
      Actions.kiosk_details(item)
    }
}

var styles = {
  pic:{
    height: width/3,
    width: width/3
  },
  card:{
    width: width/3,
    height: width/3+20,
    backgroundColor: "lightgray",
    borderColor: "black",
    borderWidth: 1
  },
  container:{
    flexDirection: "row",
    flexWrap: "wrap"
  }
}

module.exports = KioskLanding