/* eslint-disable */
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLOR, FONTFAMILY, FONTSIZE } from "../Themes/themes.tsx";

const SeatBookingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SeatBookingScreen</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLOR.OrangeRGBA0,
  }
});

export default SeatBookingScreen;
