import React, {
  Component,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import _ from "lodash"

import Lay from "./layout/Layout"
import List from "./layout/List"
var {height, width} = Dimensions.get('window');

class TableofContents extends Component {
    render() {
      let list =[
        { text: "Coins",
          children:[
            { text: "WWII"},
            { text: "1920's",
              children:[
                { text: "abe lincon"},
                { text: "joe biden"}
              ]
            }
          ]
        },
        { text: "Bills",
          children:[
            { text: "Modern"},
            { text: "pre United States",
              children:[
                { text: "abe lincon"},
                { text: "joe biden"}
              ]
            },
            { text: "Other Countries"}
          ]
        }
      ]
      return( <List items={list}/> )
    }
}

module.exports = TableofContents