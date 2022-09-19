import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native-web';
import Task from './components/Task';
export default function App() {
  const [task,setTask]=useState('')
  const [addTask,setAddTask]=useState([])

  const handleAddTask=()=>{
    // Keyboard.dismiss();
setAddTask([...addTask,task])
setTask('')

  }

  const handleCompleteTask=(index)=>{
    let itemCopy=[...addTask]
    itemCopy.splice(index,1)
    setAddTask(itemCopy)
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>TOday Tasks </Text> 
<View style={styles.items}>
  {
    addTask.map((item,idx) => {
       return (
        <TouchableOpacity key={idx} onPress={()=>handleCompleteTask(idx)}>
          <Task  text={item}/>
</TouchableOpacity>
       )
    })
  }
  {/* <Task/> */}
</View>

            </View>

<KeyboardAvoidingView
behavior={Platform.OS === 'ios' ?"padding":"hight"}
style={styles.writeTaskWrapper}
>
  <TextInput style={styles.input} placeholder={"Write your task"}  onChangeText={text=>setTask(text)} value={task}/>
  <TouchableOpacity onPress={()=>handleAddTask() } >
    <View style={styles.addWrapper}>
      <Text style={styles.addText}>+</Text>
    </View>
  </TouchableOpacity>
</KeyboardAvoidingView>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  
  },
tasksWrapper:{
  paddingTop:80,
  paddingHorizontal:20,

},
sectionTitle:{
  fontSize:24,
  fontWeight: 'bold',

},
items:{
marginTop : 30, 
},

writeTaskWrapper:{
   position:'absolute',
   bottom:60,
   width:'100%',
   flexDirection:'row',
   justifyContent: " space-between",
   alignItems: " center",
},
input:{
  paddingVertical:15,
  paddingHorizontal:15,
  backgroundColor:"gray",
  borderRadius:60,
  borderColor:"black",
  borderWidth:1,
  width:250,

},
addWrapper:{
  width:60,
  height:60,  
  backgroundColor:"#FFF",
  borderRadius:60,
  justifyContents: "center",
  alignItems: "center",
  borderColor:"#C0C0C0",
  borderWidth:1,

},
addText:{

},



});
