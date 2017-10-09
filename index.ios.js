/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,AsyncStorage
} from 'react-native';
import AppClass from './NotePadFile/indexApp.js';
import { Provider } from 'react-redux';
import {createStore, combineReducers,applyMiddleware, compose} from 'redux';
import allReducer from './NotePadFile/Reducer/ReducerIndex';
import { persistStore, autoRehydrate } from 'redux-persist';
// import {loadState,saveState} from './NotePadFile/localStorage';

// const enhancer = compose(
//     applyMiddleware(thunk, promise),
//     devTools({
//            name: 'NativeStarterKit', realtime: true
//     }),
// );
const store = createStore(allReducer,autoRehydrate());
console.log('before persister store.getState():',store.getState());
const persister=persistStore(store,{storage: AsyncStorage});
console.log('after persister store.getState():',store.getState());
// if (typeof self === 'object') persistStore(store, [{storage: AsyncStorage},
//    console.log('finish persist')
//  ]);
// persistStore(store, {storage: AsyncStorage}, () => {
//   console.log('restored')
// })

// store.subscribe(()=>{
//   saveState(store.getState());
// });

export default class ReduxNotePadApp extends Component {
  constructor() {
    super()
    this.state = { rehydrated: false }
  }


  componentWillMount(){
    persistStore(store, {storage: AsyncStorage}, () => {
      this.setState({ rehydrated: true })
    })
  }

  render() {
    if(!this.state.rehydrated){
      return <Text style={{marginTop:40}}>Loading...</Text>
    }

    return (
      <Provider store={store} persister={persister}>
       <AppClass />
       </Provider>
    );
  }
}

AppRegistry.registerComponent('ReduxNotePadApp', () => ReduxNotePadApp);
