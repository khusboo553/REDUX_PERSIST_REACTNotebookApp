import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,FlatList,ScrollView,Image,TouchableHighlight,Alert
} from 'react-native';
import { userLogin } from '../Actions/LoginAction';
import AddNotebookClass from './AddNewNotebookPage.js';
import {StackNavigator} from 'react-navigation';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { userSignUp } from '../Actions/SignupAction.js';

// import Navigation from './Route.js';
// import DetailsNotebookClass from './DetailsSelectedNote';

// var count=0;
var self;
var rowData;
var userIdSelected;
var selectUserNote=[];
// var fireData = firebaseClassManager.getInstance();
// var commonDataSingletone = singleToneDataManager.getInstance();

// const Navigation=StackNavigator({
//   //  Login:{screen:LoginClass}


//   //  SignUp:{screen:SignUpClass},
//   //  Home:{screen:HomeClass},
//    NewNote:{screen:AddNotebookClass},
//    DetailsNote:{screen:DetailsNotebookClass}
//
// });
// export default Navigation;
class HomeClass extends Component {
  //

  static navigationOptions = ({ navigation }) => ({
    title: 'Home Page',
    gesturesEnabled:false,
       headerLeft:(
        <Button
          title='Log Out'
          onPress={()=>self.logoutAction()}
        />
      )
      // headerLeft:(<Button onPress={() => navigation.goBack(null)} />)
  });

 componentWillMount(){
   selectUserNote=this.props.signUpUser;

   for (var i = 0; i < selectUserNote.length; i++) {
     if (this.props.navigation.state.params.username==selectUserNote[i]["email"] &&
     this.props.navigation.state.params.password==selectUserNote[i]["password"]) {
       console.log("hhhhhhhhhhhhhhhh");
       userIdSelected=selectUserNote[i]["userId"];
       this.setState({
         NotebookArray: selectUserNote[i]["selectedUserNoteDetails"],
       });
       console.log("49875948797495903");
       console.log(this.state.NotebookArray);
      //  NotebookArray=selectUserNote[i]["selectedUserNoteDetails"];

     }
   }

  }
 // componentDidUpdate(){
 //   console.log("@@@@@");
 //   console.log(count);
 //   if (count==0) {
 //
 //    this.setPropertyRefresh();
 //    count++;
 //   }
 // }
 // setPropertyRefresh(){
 //
 //        console.log(this);
 //       // var dataDetails=[];
 //       // this.props.userDetails;
 //
 //       console.log(this.props);
 //      this.setState({
 //          NotebookArray: this.props.userDetails,
 //     });
 //
 // }
  constructor() {

    super();
    this.state={
      NotebookId:'',
      NotebookName:'',
      AuthorName:'',
      ImageUrl:'',
      Description:'',
      NotebookArray:[],
    }
    }

    logoutAction=()=>{
    self.props.navigation.goBack();
     console.log("logout");
    }

  refresh(){

    //  count=0;
     selectUserNote=this.props.signUpUser;


      // this.setState({
      //   NotebookArray:
      // })
     for (var i = 0; i < selectUserNote.length; i++) {
       if (this.props.navigation.state.params.username==selectUserNote[i]["email"] &&
       this.props.navigation.state.params.password==selectUserNote[i]["password"]) {
              var array=[];
              array=selectUserNote[i]["selectedUserNoteDetails"];
              console.log(array);
              this.setState({
                     NotebookArray: array,
                   });
                   console.log("4546456");
                   console.log(this.state.NotebookArray);
            break;
       }
     }
     //
    //      userIdSelected=selectUserNote[i]["userId"];
    //       console.log("hhhhhhhhhhhhhhhh");
     //

    //
    //      this.setState({
    //        NotebookArray: array,
    //      });
    //     //  NotebookArray=selectUserNote[i]["selectedUserNoteDetails"];
    //    }
    //  }
  //   var IdDetails =  singleToneDataManager.getInstance().getLoginDetailsArray();
  //   var uid=IdDetails["uid"];
  //  firebaseClassManager.getInstance()._FirebaseStoreData(uid,IdDetails,dataDetails);

}

  DetailsButtonPressed(){
    // console.log("+++++++++++reached+++++++++++");
    // console.log(value);
    //  self.props.navigation.navigate('DetailsNote',{
    //   ValueData:value, onGoBack : () => self.refresh(),
    //  });

  }

  AddButtonPress(){
    //  count=0;
     console.log("scdscfdsf");
    //  console.log(count);
     self.props.navigation.navigate('NewNote',{
      userId:userIdSelected, onGoBack : () => self.refresh(),
     });

 }

  DeleteButtonPressed=()=>{

    // console.log(value);
    //
    // for (var i = 0; i <this.state.NotebookArray.length; i++) {
    //   if (this.state.NotebookArray[i]== value) {
    //     var index = i;
    //     console.log(index);
    //     this.state.NotebookArray.splice(index,1);
    //     // delete this.state.NotebookArray[i][0];
    //   }

    // var details=this.state.NotebookArray
    //
    // console.log("updated row is");
    // console.log(this.state.NotebookArray);
    //
    //  singleToneDataManager.getInstance().setDictNotebookDetailsArrayD(this.state.NotebookArray);
    // var dataDetails =  singleToneDataManager.getInstance().getDictNotebookDetailsArray();
    // var IdDetails =  singleToneDataManager.getInstance().getLoginDetailsArray();
    //
    // var uid=IdDetails["uid"];
    // for (var i = 0; i < dataDetails.length; i++) {
    //
    //   dataDetails[i]["NoteID"]=i;
    //   dataDetails[i]["UserID"]=IdDetails["uid"];
    //   // console.log(dataDetails[i][0]);
    // }
    //
    //   firebaseClassManager.getInstance()._FirebaseStoreData(uid,IdDetails,dataDetails);
    //   this.setState({
    //     NotebookArray: details,
    //
    //   });
    // //
    // this.setState({
    //   NotebookArray: dataDetails,
    // });
  }

  ParseData(){

   console.log("!!!!!");
   console.log(self.state.NotebookArray);
    if (self.state.NotebookArray) {
      return self.state.NotebookArray.map((data,i) => {

        console.log(data);
          return (

          <View style={styles.TableContainer}
          key={i}>
         <View style={styles.SidebySidBecontainer}>
         <View>

          <Text key={i}>{data.NotebookName}</Text>

          </View>

          <View style={styles.SidebySidBtnecontainer}>
          <TouchableHighlight value={data} onPress={() =>
            this.DetailsButtonPressed(data)}>
            <Image
           style={styles.Optbtn}
           source={require('./ImageAsset/details1.png')}
          />
          </TouchableHighlight>
          <TouchableHighlight value={data} onPress={() =>
            this.DeleteButtonPressed(data)}>
          <Image
           style={styles.OptbtnDelete}
           source={require('./ImageAsset/delete1.png')}
          />
          </TouchableHighlight>

          </View>
      </View>
        </View>
        )
      }
    )
  }else {
    console.log("*****************nop");
  }
}


CreateUI(){

  return(
    <View style={styles.container}>
     <View style={styles.SidebySidecontainer}>
      <View style={styles.textContainer}>
        <Text style={{color:'blue'}}>{self.props.navigation.state.params.username}</Text>
      </View>
      <TouchableHighlight onPress=
      {this.AddButtonPress.bind(this)}>
     <Image
       style={styles.btn}
       source={require('./ImageAsset/plus1.png')}
     />
     </TouchableHighlight>
    </View>

    <ScrollView>
     {this.ParseData()}
    </ScrollView>
      </View>
  )

}

  render(){
     const { navigate } = this.props.navigation;
      self=this;
      console.log("(((((())))))");
       console.log(this.state.NotebookArray);
      // userIdSelected=this.props

    //   console.log( singleToneDataManager.getInstance().getDictNotebookDetailsArray());
    //  console.log("*++++*");
    //  console.log(this.state.NotebookArray)
     return(
      <View style={styles.Maincontainer}>
        {this.CreateUI()}
      </View>
    );
  }
 }

function mapStateToProps(state){
  console.log("*************");
  console.log(state);
  return {
    users: state.users,
    signUpUser:state.signUpUser,
  };
}
//dispatch to store
function matchDispatchToProps(dispatch) {
 console.log("7847");
  return bindActionCreators({
    userSignUp:userSignUp,
    userLogin: userLogin,
  },dispatch)
}

const styles=StyleSheet.create(
  {
    Maincontainer:{
      marginLeft:0,
      flex:1,
      paddingLeft:0,
      paddingRight:0
    },
    textContainer:{
      height:20,
      width:100,
    },
    mainviewContainer:{
      marginTop:40,
      marginLeft:20,
      marginRight:20,
      height:500,
      // width:350,
      backgroundColor:'white'
    },
    SidebySidBtnecontainer:{
        flexDirection:'row',
        marginLeft:-20,
        justifyContent:'center'
    },
    SidebySidecontainer:{
      flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between'
    },
    container:{
      // marginTop:40,
      marginLeft:20,
      flex:1,
      paddingLeft:15,
      paddingRight:15
    },
    btn:{
      marginTop:0,
      // marginLeft:200,
      height:40,
      width:40,
      // marginRight:50,
    },
    Optbtn:{
      // marginLeft:200,
      height:30,
      width:30,
    },
    OptbtnDelete:{
      marginLeft:230,
      height:40,
      width:40,
    },
    TableContainer:{
      justifyContent:'center',
      marginTop:5,
      marginBottom:5,
      //alignItems:'center'
    },

    AddButtonContainer:{
      //height:20,
      marginTop:0,
      marginRight:20,
      width:100,
      flexDirection:'row',
      backgroundColor:'blue',
    },

    itemList:{
      padding:10,
      fontSize:15,
      height:40,
    },

  }
)
export default connect(mapStateToProps, matchDispatchToProps)(HomeClass);
