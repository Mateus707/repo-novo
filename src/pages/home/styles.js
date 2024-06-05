import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    
  },
  box1: {
    flex: 0.2,
    borderWidth:1,
    borderColor:'black',
  },
  box2: {
    flex: 0.5,
    borderWidth:1,
    borderColor:'black',

  },
  box3: {
    flex: 0.4,
    borderWidth:1,
    borderColor:'black',

  },
  boxIconsText:{
    flex:0.4,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
    borderWidth:1,
    borderColor:'blue',
  },
  boxIconsNav:{
    flex:0.2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
    borderWidth:1,
    borderColor:'blue',
  },
  boxMoney:{
    flex:0.3,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20,
    borderWidth:1,
    borderColor:'blue',
  },
  titleMoney:{
    fontWeight:'bold',
    fontSize:20
  },
  boxBemVindo:{
    flex:0.6,
    justifyContent:'center',
    paddingHorizontal:20,
    borderWidth:1,
    borderColor:'blue',
  },
  boxIcons:{
    flexDirection:'row',
    gap:20,
    borderWidth:1,
    borderColor:'blue',
  },
  boxModalIcons:{
    flex:0.5,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    gap:20,
    borderWidth:1,
    borderColor:'yellow',
  },

})