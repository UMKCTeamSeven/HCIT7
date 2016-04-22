import React, {
  AsyncStorage
} from 'react-native';

import _ from "lodash"


let Store = {
	get(key){
		return AsyncStorage.getItem(key)
	},
  set(key,val) {
    AsyncStorage.setItem(key, val)
  }
}


module.exports = Store