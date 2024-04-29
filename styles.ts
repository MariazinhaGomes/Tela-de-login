 import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  scrollview:{
    backgroundColor:'#fff',
    paddingHorizontal: 15,
    paddingTop:40,
  },
  container:{
    alignItems:'center',

  },
  logo:{
    width: 150,
    height:150,

  },
  h1:{
    color:  '#000',
    fontSize:27,
    fontWeight: 'bold',
    paddingVertical: 10,
  
    
  },
  h2:{
    color: '#777',
    fontSize: 15,
  },
  h3:{
    color: '#777',
    fontSize: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  h4:{
    color: '#777',
    fontSize: 15,
    alignItems: 'center',
  },
  inputArea:{
    width: '100%',
    paddingTop:20,
  },
  inputLabel:{
    color:'#777',
    fontSize:14,
    fontWeight:'bold',
    paddingBottom:7,
  },
  inputField:{
    color:'#000',
    borderWidth:2,
    borderRadius:5,
    borderColor:'#ddd',
    fontSize:15,
    padding:10,
  },
  aditionals:{
    width:'100%',
  },
  forgotBtnArea:{
    paddingVertical:20,
    alignSelf:'flex-end',
  },
  forgoBtnText:{
    fontSize:14,
    fontWeight:'bold',
    color:'#4162b7',
  },
  button:{
    backgroundColor:'#4162b7',
    width:'100%',
    padding:10,
    borderRadius:5,

  },
  buttonText:{
    alignSelf:'center',
    color:  'whit',
    fontSize:16,
  },
  signUpArea:{
    flexDirection:'row',
    marginTop:30,
  },
  signUpText:{
    fontSize:13,
    fontWeight:'bold',
    color:'#999',
  },
  signUpBtnText:{
    fontSize:13,
    fontWeight:'bold',
    color:'#4162b7',
    marginLeft:5,
  },
  footerArea:{
    marginVertical:30,
  },
  footerText:{
    fontSize:13,
    color:'#999',
  },
  forgotButton:{
    marginTop: 20,
    backgroundColor:'#4162b7',
    width:'100%',
    padding:10,
    borderRadius:5,

  }
})