import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,FlatList,ScrollView,Image,TouchableHighlight,TextInput,Textfield,TouchableOpacity,ImagePickerIOS
} from 'react-native';
import HomeClass from './HomePage.js';
// import { afterLogin } from '../Actions/NotedetailsAction.js';
import { userSignUp,saveArray } from '../Actions/SignupAction.js';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
var allUsersArray=[];
var self;
var arrayDetails=[];
var detailsDict=[];

class AddNotebookClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:new Date().toDateString(),
      NotebookName:"",
      AuthorName:"",
      Description:"",
      UserID:"",
      NoteID:"",
     };
  }


    SaveButtonPress=()=>{

    if (this.props.signUpUser.find(o => o.userId === this.props.navigation.state.params.userId)){
    let obj = this.props.signUpUser.find((o, i) => {
    if (o.userId === this.props.navigation.state.params.userId) {
      console.log("88888888");
      console.log(this.props.navigation.state.params.userId);
      arrayDetails=this.props.signUpUser[i]["selectedUserNoteDetails"];
    // this.props.signUpUser[i].selectedUserNoteDetails = { name: 'new string', value: 'this', other: 'that' };
      if (!this.props.signUpUser[i]["selectedUserNoteDetails"]) {
        console.log("here1");
          var noteId=0;
           detailsDict=[{
            NoteID:noteId,
            NotebookName:this.state.NotebookName,
            AuthorName:this.state.AuthorName,
            CurrentTime:this.state.text,
            Description:this.state.Description,
          }];
          console.log(detailsDict);
          this.props.signUpUser[i]["selectedUserNoteDetails"]=detailsDict;
        }else {
          if (this.props.signUpUser[i]["selectedUserNoteDetails"].length>0) {
          console.log("here2");
            var noteId=this.props.signUpUser[i]["selectedUserNoteDetails"].length;
            detailsDict={
              // UserID:IdDetails["uid"],
              NoteID:noteId,
              NotebookName:this.state.NotebookName,
              AuthorName:this.state.AuthorName,
              CurrentTime:this.state.text,
              Description:this.state.Description,
            };
            console.log("%%%%%");
            arrayDetails.push(detailsDict);
            console.log(arrayDetails);
            this.props.signUpUser[i]["selectedUserNoteDetails"]=arrayDetails;
          }
        else {
          console.log("here3");
          var noteId=0;
          detailsDict=[{
            NoteID:noteId,
            NotebookName:this.state.NotebookName,
            AuthorName:this.state.AuthorName,
            CurrentTime:this.state.text,
            Description:this.state.Description,
          }];
          console.log(detailsDict);
          arrayDetails=detailsDict;
          this.props.signUpUser[i]["selectedUserNoteDetails"]=arrayDetails;
        }
      }
    //
    //  if (!this.props.signUpUser[i]["selectedUserNoteDetails"]) {
    //   arrayDetails=detailsDict;
    //  }else {
    //   if (this.props.signUpUser[i]["selectedUserNoteDetails"].length==undefined ||
    //     this.props.signUpUser[i]["selectedUserNoteDetails"].length==null||
    //     this.props.signUpUser[i]["selectedUserNoteDetails"].length==0) {
    //      console.log("4444");
    //
    //      arrayDetails=detailsDict;
    //
    //       // this.props.userDetails=detailsDict;
    //   }else {
    //     console.log("8888");
    //     arrayDetails.push(detailsDict);
    //     console.log(arrayDetails);
    //   }
    // }


      //  var my_array = [];
      //  my_array=[this.props.signUpUser[i]["selectedUserNoteDetails"]];

      // for (var i = 0; i < my_array.length; i++) {
      //
      // }
      //  var start_index = 0
      //  var number_of_elements_to_remove =5;
      //  var removed_elements = my_array.
      //  splice(start_index, number_of_elements_to_remove,arrayDetails[0]);
      //
      //  this.props.signUpUser[i]["selectedUserNoteDetails"]=my_array;
      //  console.log("%%8909090%%");
      //   console.log(this.props.signUpUser[i]["selectedUserNoteDetails"]);

         var allUsers_Array=this.props.signUpUser;
           console.log("0 index++++++");
           console.log(allUsers_Array.length);
           for (var i = 0; i<allUsers_Array.length; i++) {
             console.log("here");
             if (i>0) {
               let signUpUser=
                     {
                     userId:allUsers_Array.length,
                     email:this.props.signUpUser[i].email,
                     password:this.props.signUpUser[i].password,
                     rePassword:this.props.signUpUser[i].password,
                     selectedUserNoteDetails:this.props.signUpUser[i]["selectedUserNoteDetails"],
                   };
                   console.log("khusboo here");
                   console.log(signUpUser);
                 allUsersArray.push(signUpUser);
              }else {
               let signUpUser=[{
                 userId:0,
                 email:this.props.signUpUser[0].email,
                 password:this.props.signUpUser[0].password,
                 rePassword:this.props.signUpUser[0].rePassword,
                 selectedUserNoteDetails:this.props.signUpUser[0]["selectedUserNoteDetails"],
               }];

               console.log("khusboo here");
               console.log(signUpUser);
               allUsersArray=signUpUser;
             }
           }

           this.props.saveArray(allUsersArray);
           this.props.userSignUp(allUsersArray);


          // for (var i = 0; i < allUsersArray.length; i++) {
         // this.props.saveArray(allUsersArray);
          // }

          // this.props.userSignUp(allUsersArray);
          console.log("dfgdgf");
          console.log(this);
          this.props.navigation.state.params.onGoBack();
          this.props.navigation.goBack();
          return true; // stop searching
      //  allUsersArray=signUpUser;
    }
    });
  }
    //  console.log(this);
    //  this.props.userSignUp(allUsersArray);
 }

  render(){
    console.log("newnote");
    console.log(this);
    const { navigate } = this.props.navigation;
    if (this.props.signUpUser.length>0) {
      allUsersArray=this.props.signUpUser;
    }
    return(
      <View style={styles.mainviewContainer}>
      <View style={styles.SidebySidecontainer}>
      <Text style={styles.TextStyleContainer}>
      NoteBook Name:</Text>
      <TextInput
         style={styles.TextInputStyleContainer}
         placeholder="Type Your Notebook Name"
         onChangeText={(text) => this.setState({NotebookName:text})}
       />
      </View>
      <View style={styles.SidebySidecontainer}>
      <Text style={styles.TextStyleContainer}>
      Author Name:</Text>
      <TextInput
         style={styles.TextInputStyleContainer}
         placeholder="Type Author Name"
         onChangeText={(text) => this.setState({AuthorName:text})}
       />
      </View>
      <View style={styles.SidebySidecontainer}>
      <Text style={styles.TextStyleContainer}>
       Date and Time: </Text>
       <Text style={styles.TextInputStyleContainer}>
        {this.state.text} </Text>
      </View>

          <Text style={styles.TextStyleContainer}>
         Description:</Text>
         <TextInput style={styles.TextInputDescriptionContainer}
 	       multiline={true}
         placeholder="Write your notebook Description!!!"
 	       numberOfLines={10}
 	       blurOnSubmit={false}
         onChangeText={(text) => {
            this.setState({Description:text})
        }}
          // value={this.state.text}
         />
         <Button style={styles.ButtonContainer}
         onPress={this.SaveButtonPress}
         title="Save"
         //titleColor="black"
         />
      </View>
      // <Text>Add a New Note</Text>
    )
  }
}

//retrive data from store
function mapStateToProps(state){
  console.log("*********addnote****");
  console.log(state);
  return {
    signUpUser:state.signUpUser,
  };
}


//dispatch to store
function matchDispatchToProps(dispatch) {

  return bindActionCreators({
    userSignUp:userSignUp,
    saveArray : saveArray,
  },dispatch)
}


const styles=StyleSheet.create(
  {
    mainviewContainer:{
      marginTop:40,
      marginLeft:20,
      marginRight:20,
      height:500,
      // width:350,
      backgroundColor:'white'
    },
    SidebySidecontainer:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    TextInputStyleContainer:{
      marginTop:15,
      height:30,
      width:150,
      borderColor:'blue',

    },
    TextStyleContainer:{
      marginTop:20,
      marginLeft:10,
      height:30,
      textAlign:'left'
    },
    TextInputDescriptionContainer:{
      marginLeft:10,
      marginTop:10,
      marginLeft:20,
      marginRight:20,
      height:100,
      borderColor:'white',
    },
    ButtonContainer:{
      marginLeft:10,
      marginRight:10,
      height:20,


    },
  }
)
export default connect(mapStateToProps, matchDispatchToProps)(AddNotebookClass);
