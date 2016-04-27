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

import List from "../layout/List"
import Store from "../layout/Store"
import Locations from "../location"

class KioskLanding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemsActive: {}
    }
  }
  componentDidMount(){
    _.map(Locations,this.isActive.bind(this,""))
  }
  isActive(path, item, indx){
    path = `${path}${indx}`

    Store.get("TOC"+path)
    .then((res)=>{
        let active = this.state.itemsActive
        active[`${path}`] = res
        this.setState({itemsActive:active})

    })

    _.map(item.subSections,this.isActive.bind(this,path))
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
          <List items={Locations}/>
        </View>
      </Lay.HorzPageContainer>
        )
    }
    card(item,indx){
      return(
        <TouchableHighlight key={indx} style={styles.card}
            onPress={ this.gotoKiosk.bind(this,item) }>
            <View>
              <View style={styles.topPart}>
                <Text style={{fontSize:10}}>
                  {item.title}
                </Text>
                { this.visited(item.path) }
              </View>

              <Image
                resizeMode="stretch"
                style={_.assign({}, styles.pic)}
                source={item.pic} />
            </View>
        </TouchableHighlight>
      )
    }
    visited(path){
      if(this.state.itemsActive[path] == "true")
        return(
          <Image
            resizeMode="stretch"
            style={{height:10,width:10}}
            source={require("../assets/checkmark.png")} />
        )
    }
    gotoKiosk(item){
      Actions.kiosk_details(item)
    }
}

var styles = {
  topPart:{
    flexDirection: "row",
    justifyContent: "space-around"
  },
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