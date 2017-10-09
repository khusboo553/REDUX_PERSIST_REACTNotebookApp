import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,FlatList,ScrollView,Image,TouchableHighlight,TextInput,TouchableOpacity,Alert,
} from 'react-native';
import { userSignUp } from '../Actions/SignupAction.js';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
var allUsersArray=[];
class SignUpClass extends Component {

  static navigationOption={
    title:'Notebook App',
  };
  constructor(){
    super();
    this.state={
      email:'',
      password:'',
      rePassword:'',
    }
  }

  Sign_UpButtonPress=()=>{
  console.log("khusboo here");
    if (allUsersArray.length!=0) {
      let signUpUser=
            {
            userId:allUsersArray.length,
            email:this.state.email,
            password:this.state.password,
            rePassword:this.state.rePassword,
            selectedUserNoteDetails:[],
          };
    allUsersArray.push(signUpUser);
    }else {
      let signUpUser=[{
        userId:0,
        email:this.state.email,
        password:this.state.password,
        rePassword:this.state.rePassword,
        selectedUserNoteDetails:[],
      }];

      console.log("khusboo here");
      console.log(signUpUser);
      allUsersArray=signUpUser;
    }
    this.props.userSignUp(allUsersArray);
    console.log("khusboo here");
    console.log(this);
  }

  render(){
      self=this;
      console.log(this.props.signUpUser);
      if (this.props.signUpUser.length>0) {
        allUsersArray=this.props.signUpUser;
      }
      return(
        <View style={styles.Maincontainer}>
        <View style={styles.SidebySidecontainer}>
        <Text style={styles.TextStyleContainer}>
        Email:</Text>
        <TextInput
           placeholder="Enter your Email"
           onChangeText={(text) => this.setState({email:text})}
         />
        </View>

        <View style={styles.SidebySidecontainer}>
        <Text style={styles.TextStyleContainer}>
        Password:</Text>
        <TextInput
        secureTextEntry={true}
           placeholder="Enter your Password!!!!"
           onChangeText={(text) => this.setState({password:text})}
         />
        </View>
        <View style={styles.SidebySidecontainer}>
        <Text style={styles.TextStyleContainer}>
        Confirm Password:</Text>
        <TextInput
        secureTextEntry={true}
           placeholder="Confirm your Password!"
           onChangeText={(text) => this.setState({rePassword:text})}
         />
        </View>
        <TouchableOpacity style={{marginLeft:20,marginRight:20,marginTop:40,marginBottom:30,height:30,backgroundColor:"skyblue"}}
        onPress={this.Sign_UpButtonPress}>
          <Text style={{color:'white',fontSize:20,textAlign:"center"}}>SignUp</Text>
        </TouchableOpacity>
        </View>
      )
    }
  }
  //retrive data from store
  function mapStateToProps(state){
    console.log("*************");
    console.log(state);
    return {
      signUpUser: state.signUpUser
    };
  }
  //dispatch to store
  function matchDispatchToProps(dispatch) {

    return bindActionCreators({
      userSignUp: userSignUp
    },dispatch)
  }

  const styles=StyleSheet.create(
    {
      Maincontainer:{
        marginTop:80,
        marginLeft:40,
        marginRight:40,
        backgroundColor:'white'
      },
      SidebySidecontainer:{
        flexDirection:'row',
          marginTop:40,
          justifyContent:'space-between'
      },
      TextStyleContainer:{
        // textAlign:'left',
        width:100,
      },
    }
  )
export default connect(mapStateToProps, matchDispatchToProps)(SignUpClass);
