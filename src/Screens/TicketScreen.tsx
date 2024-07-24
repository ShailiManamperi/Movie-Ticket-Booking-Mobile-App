/* eslint-disable */
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TicketScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TicketScreen</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {},
  text:{
    color:'black',
    fontSize:16,
  }
});



export default TicketScreen;
