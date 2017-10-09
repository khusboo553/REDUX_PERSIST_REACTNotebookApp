import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Image,TextInput,TouchableOpacity,Alert
} from 'react-native';
const Dimensions = require('Dimensions');

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import LinearGradient from 'react-native-linear-gradient';
import { userLogin } from '../Actions/LoginAction';

var {height, width} = Dimensions.get('window');

class Login extends Component {
  static navigationOptions={
    title:'Notebook App',
  };

  constructor() {
    super();
    this.state={
      animating:false,
      email: '',
      password: '',
    }
  }

  componentWillMount() {
    console.log(this);
    console.log('data in redux : ' + this.props.users);
  }

  render(){
    return(
      <View>
        <Image
          source={{uri: 'ImageAsset:/nature.png'}}
          style={{flex:1}}
          blurRadius={1}
        />
        <View style={{justifyContent:'center',alignItems: 'center',marginTop:height/3}}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1,width:width/2}}
            placeholder="Enter your Email"
            onChangeText={(emailid)=>this.setState({
              email: emailid
            })}
          />
          <View style={{height:20}}/>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1,width:width/2}}
            placeholder="Enter your Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({
              password: password
            })}
          />

          <TouchableOpacity
            style={{marginLeft:20,marginRight:20,marginTop:40,backgroundColor:"skyblue",width:100,height:30}}
            onPress={this.LoginButtonPress}>
            <Text style={{color:'white',fontSize:20,textAlign:"center"}}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{marginLeft:20,marginRight:20,marginTop:40,backgroundColor:"skyblue",width:200,height:30}}
            onPress={this.SignupButtonPress}>
            <Text style={{color:'white',fontSize:20,textAlign:"center"}}>New user Please SignUp</Text>
          </TouchableOpacity>
          <LinearGradient
             start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              locations={[0,0.5,0.6]}
             colors={['#4c669f', '#3b5998', '#192f6a']}
           style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            Sign in with Facebook
            </Text>
          </LinearGradient>
          </View>
        </View>
    )
  }

  LoginButtonPress = () => {

    let user = {
      email: this.state.email,
      password: this.state.password
    };

     this.props.userLogin(user);
     console.log("++++++++");
      console.log(this);

    //[this.props.signUpUser[i]["password"]==user["password"]]
     for (var i = 0; i < this.props.signUpUser.length; i++) {

       if (this.props.signUpUser[i]["email"]==user["email"]) {
         if (this.props.signUpUser[i]["password"]==user["password"]) {

        this.props.navigation.navigate('Home',{username:user["email"],password:user["password"]});

         }else {
        //    Alert.alert(
        //   'Sorry',
        //   'Password is incorrect!!',
        //   [
        //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //   {text: 'OK', onPress: () => console.log('OK Pressed')},
        //   ],
        //   { cancelable: false }
        // );
        //
         }
       }else {
      //    Alert.alert(
      //   'Sorry',
      //   'Email has not registerd yet!!',
      //   [
      //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      //   {text: 'OK', onPress: () => console.log('OK Pressed')},
      //   ],
      //   { cancelable: false }
      // );

    }
  }
}

  SignupButtonPress=()=>{
    this.props.navigation.navigate('Signup');
  }
 }
 var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    marginTop:20,
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

//retrive data from store
function mapStateToProps(state){
  return {
    users: state.users,
    signUpUser:state.signUpUser,

  };
}

//dispatch to store
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    userLogin: userLogin
  },dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);
