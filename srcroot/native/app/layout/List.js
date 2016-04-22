import React, {
  Component,
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';

import _ from "lodash"
import {Actions} from 'react-native-router-flux'

import Store from "./Store"

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemsActive: {},
      pathShowing: {},
      hasChildren: {},
    }
  }
  shouldComponentUpdate(){
    return true
  }

  componentDidMount(){
    _.map(this.props.items,this.isActive.bind(this,""))
  }
  isActive(path, item, indx){
    path = `${path}${indx}`

    Store.get("TOC"+path)
    .then((res)=>{
        let active = this.state.itemsActive
        active[`${path}`] = res
        this.setState({itemsActive:active})

    })
    Store.get("TOCShowing"+path)
    .then((res)=>{
        let showing = this.state.pathShowing
        showing[`${path}`] = res
        this.setState({pathShowing:showing})

    })

    let children = this.state.hasChildren
    children[`${path}`] = item.children
    this.setState({hasChildren:children})

    _.map(item.children,this.isActive.bind(this,path))
  }
  render() {
    return(
    	<View>
        { _.map(this.props.items,this.makeItem.bind(this,"")) }
      </View>
    )
  }
  makeItem(path, item, indx, object){
    path = `${path}${indx}`
    let textStyle = {},
        navStyle = {}
    if(this.state.itemsActive[path] == "true"){
      //navStyle ={borderColor:"red",borderWidth:1,borderStyle:"solid"}
      textStyle={color:"blue"}
    }

    return(
      <View key={path}>
        <TouchableHighlight onPress={ this.Nav.bind(this,path) } underlayColor={"white"}>
          <View style={ _.assign({}, {
            marginLeft:path.length*4,
            marginTop:(indx==0)?1:0,
            marginTop:(indx==path.length-1)?2:0
          },
            navStyle) }>
            <Text style={_.assign({},textStyle,{fontSize:8})}>
              { this.LIsymbol(path,indx) }
              { item.text }
              { this.isPathShowing.call(this,path) }
            </Text>
          </View>
        </TouchableHighlight>
        { this.showChildren(item.children,path) }
      </View>
    )
  }
  isPathShowing(path){
      if(this.state.pathShowing[path] == "true" && this.state.hasChildren[path]){
        return "!"
      }else if(this.state.hasChildren[path])
        return "->"
  }
  showChildren(children,path){
    if(this.state.pathShowing[path] == "true"){
      return(
        <View>
          { _.map(children,this.makeItem.bind(this,path)) }
        </View>
      )
    }

  }
  LIsymbol(path,indx){
    let symbols = [
      [1,2,3,4,5,6,7],
      ['a','b','c','d','e'],
      ['i','ii','iii','iv','v','vi']
    ]

    let symbol = symbols[path.length-1][indx]

    return(symbol + ") ")
  }

  Nav(path){
    Store.set("TOC"+path,"true")
    Store.set("TOCShowing"+path,"true")

    let active = this.state.itemsActive
    active[`${path}`] = "true"

    let showing = this.state.pathShowing
    if(showing[`${path}`] != "true")
      showing[`${path}`] = "true"
    else
      showing[`${path}`] = "false"


    this.setState({ itemsActive: active,
                    pathShowing: showing
                  })
  }

}

module.exports = List