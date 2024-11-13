import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './src/redux/Features/counterSlice';

const App = () => {
  const dispatch = useDispatch();

  const {value} = useSelector((state) => state.counterSlice);

  
  return (
    <View style={styles.container}>

      <View style={styles.innerView}>
        <Text  style={{fontSize:30, color:"#fff", textAlign:"center"}}>{value}</Text>

        <Button title='Increment' onPress={() => dispatch(increment())} />
        <Button title='Decrement' onPress={() => dispatch(decrement())}  />

      </View>

      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    justifyContent:"center",
    alignItems:"center"

  },
  innerView: {
    width:'90%',
    backgroundColor:'black',
    height:400,
    gap:10,
    justifyContent:"center",
  }
})