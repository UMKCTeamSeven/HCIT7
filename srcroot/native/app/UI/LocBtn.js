import React, {
  Component,
  View,Image,
  Text,
  TouchableHighlight,
  Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');

import _ from "lodash"
import {Actions} from 'react-native-router-flux'

import Store from "../layout/Store"
import Locations from "../location"

class LocationButton extends Component {
  constructor(props) {
    super(props)
    this.state={
      explored:false
    }
  }
  componentDidMount(){
    Store.get("TOC"+this.props.data.path)
    .then((res)=>{
        this.setState({explored:res})
    })
  }
  render() {
        let h2 = width-30,
            w2 = height

    let active = {  bottom: this.props.data.bottom*h2/100,
                    left: this.props.data.left*w2/100
    }

    if(this.state.explored == "true")
      active.backgroundColor ="dodgerblue"

    if(this.props.data.grade == 1)
      active.borderColor = "green"
    else if(this.props.data.grade == 2)
      active.borderColor = "yellow"
    else if(this.props.data.grade == 3)
      active.borderColor = "red"

    if(this.props.active)
      active.backgroundColor = active.borderColor

    return(
      <View style={ _.assign({}, styles.location, active) }>
        <TouchableHighlight onPress={ this.btnPress.bind(this,this.props.btnKey) }>
            <Text/>
        </TouchableHighlight>
        { this.infoBox() }
      </View>
    )
  }
  btnPress(indx){
    this.props.onPress(indx)
  }
  infoBox(){
    if(this.props.active)
    return(
      <View style={_.assign({}, styles.info)}>
        <View style={styles.tags}>
          { _.map(this.props.data.tags, this.tagBtn.bind(this) ) }
        </View>
        <Image
          resizeMode="stretch"
          style={_.assign({}, styles.map)}
          source={this.props.data.pic} />
        <Text style={{fontSize:5}}>
          { "Location: "+ this.props.data.title }
        </Text>
        <Text style={{fontSize:5}}>
          About: { this.props.data.about }
        </Text>
        <TouchableHighlight onPress={ this.moreInfoPress.bind(this) } underlayColor={"white"}>
          <Text style={{fontSize:5,color:"blue"}}>
            More...
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
  tagBtn(item,indx){
    let type = {}
    let txt = {fontSize:5}
    if(item=="interactive"){
      type = {
        borderColor: "#32cd32"
      }
      txt.color = "#90ee90"
    }else{
      type = {
        borderColor: "#daa520"
      }
      txt.color = "#ffd700"
    }
    return(
        <View key={item} style={_.assign({},styles.tag,type)}>
          <Text style={txt}>
            { item }
          </Text>
        </View>
    )
  }
  moreInfoPress(){
    Actions.kiosk_details(this.props.data)
  }
}

var styles = {
  map:{
    position: "relative",
    height:40,
    width:60,
  },
  tags:{
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 10
  },
  tag:{
    width: 20,
    height: 10,
    borderWidth: 1
  },
  info:{
    position: "relative",
    borderStyle:"solid",
    bottom: 50,
    left: 15,
    borderColor: "darkgray",
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "lightgray",
    padding: 3,
    width: 70
  },
  location:{
    position: "absolute",
    height:20,
    width:20,
    borderRadius: 20,
    borderWidth: 3,
  }
}

module.exports = LocationButton


/*




*/