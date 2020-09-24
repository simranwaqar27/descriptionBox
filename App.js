import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.textAreaContainer}>
      <Text style={{fontSize:28, fontWeight:'bold', justifyContent:'flex-start', paddingTop: 30}}>Create New Workout List</Text>
      <Text style={{marginBottom:10,marginTop:10 ,fontSize:20}}>List Name</Text>
      <TextInput
      style={styles.textArea}
      placeholderTextColor="grey"
      numberOfLines={5}
      multiline={true}
    

    />

      <Text style={{marginBottom:20, marginTop: 10, fontSize:20}}>Description</Text>
      <TextInput
      style={styles.textArea1}
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
    />
    <View style={{width:'100%', flexDirection:'row'}}>
      <View style={{marginTop: 20, width:'50%'}}>
      <Button
      title='Save' 
      />
      </View>
      <View style={{marginTop: 20, width:'50%', paddingHorizontal: 20}}>
      <Button
      title='Cancel'
      />
      </View>
    </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  textArea: {
    height: 100,
    justifyContent: "flex-start",
    borderWidth: 1,
    
  },
  textAreaContainer: {
    borderColor: 'black',
    //borderWidth: 2,
    padding: 5
  },
  textArea1:{
    height: 150,
    justifyContent: "flex-start",
    borderWidth: 1,
  }
});
