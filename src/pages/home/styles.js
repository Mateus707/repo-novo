import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boxImg:{
    flex:0.6,
    width:'100%',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'#3fdc34',
    borderBottomEndRadius:150,
    borderBottomStartRadius:150,
  
  },  
  boxButton:{
      flex:0.10,
      width:'100%',
      alignItems:'center',
      justifyContent: 'center',
  
    },  
    boxInput:{
      flex:0.20,
      alignItems:'center',
      justifyContent: 'center',
    },
    boxSenha:{
      flex:0.10,
      alignItems:'center',
      justifyContent: 'center',
    },
    boxTitulo:{
      flex:0.10,
      alignItems:'center',
      justifyContent: 'center',
    },
    textSenha:{
      fontSize:20,
    },
    input:{  
      width: '80%',
        height: 30,
        margin:5,
        padding:10,
        borderRadius: 50,
        color: '#fff',
        outlineStyle: 'none',
        backgroundColor: '#3fdc34'
      },
      textButton:{
        textAlign:'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
      },
      textTitulo:{
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 36
      },
      button:{
        width: '50%',
        height:40,  
        borderRadius:50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3fdc34'
       
      },
    img:{
      width:'90%',
      height:'80%',

   },
   load:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
   }
    
    
})