import React, {
  Component,
  TouchableHighlight,
  Text,
  Image,
  StyleSheet,
  View
} from 'react-native';

import Lay from "../layout/Layout"
import BreadCrumbs from "../layout/BreadCrumbs"
import _ from "lodash"
import {Actions} from 'react-native-router-flux'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state={
      loc: "ov"
    }
  }
    render() {


     let breadCrumbs = [{
          title:"home",
          link: "home"
        },{
          title:"Admin",
          link: "admin"
        },{
          title:"Stats",
          link: "stats"
        }]
        return(

      <Lay.HorzPageContainer>
        <BreadCrumbs path={breadCrumbs} />
        <View style={ styles.container }>
          <View style={ styles.column }>


            <View style={ _.assign({},styles.btn) }>
              <TouchableHighlight onPress={ this.goto.bind(this,"ov") }>
                <Text>Overview</Text>
              </TouchableHighlight>
            </View>
            <View style={ _.assign({},styles.btn) }>
              <TouchableHighlight onPress={ this.goto.bind(this,"k1") }>
                <Text>Coin Wall</Text>
              </TouchableHighlight>
            </View>
            <View style={ _.assign({},styles.btn) }>
              <TouchableHighlight onPress={ this.goto.bind(this,"k2") }>
                <Text>Gold Bar</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={ _.assign({},styles.column,{flex:3}) }>
            { this.showOverview() }
            { this.k1() }
            { this.k2() }
          </View>
        </View>
      </Lay.HorzPageContainer>


        )
    }
    goto(loc){
      this.setState({loc:loc})
    }
    showOverview(){
      if(this.state.loc == "ov")
        return(
          <Image
            resizeMode="stretch"
            style={{height:200,width:200}}
            source={require("../assets/ov.png")} />
        )
    }
    k1(){
      if(this.state.loc == "k1")
        return(
          <Image
            resizeMode="stretch"
            style={{height:200,width:200}}
            source={require("../assets/k1.png")} />
        )
    }
    k2(){
      if(this.state.loc == "k2")
        return(
          <Image
            resizeMode="stretch"
            style={{height:200,width:200}}
            source={require("../assets/k2.png")} />
        )
    }
}

var styles = {
  column:{
    flex:1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  },

  header:{
    flex: 1
  },
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  btn:{
    flexDirection: "row",
    alignSelf: "center",
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20
  }
}

module.exports = Home