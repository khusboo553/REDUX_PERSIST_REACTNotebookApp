import React,{Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from './Component/LoginPage.js';
import {Provider} from 'react-redux';
import Signupclass from './Component/SignupPage.js';
import HomeClass from './Component/HomePage.js';
import AddNotebookClass from './Component/AddNewNotebookPage.js';
const Navigation=StackNavigator({
   Login:{
     screen:Login
   },
   Signup:{
     screen:Signupclass
   },
   Home:{
     screen:HomeClass,

   },
   NewNote:{screen:AddNotebookClass},
  //  DetailsNote:{screen:DetailsNotebookClass},

});

export default Navigation;



// export default class AppClass extends Component {
//   render(){
//     return(
//       <Text style={{marginTop:40}}>hello</Text>
//     );
//   }
// }
