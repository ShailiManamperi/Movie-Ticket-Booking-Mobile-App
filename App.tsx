/* eslint-disable */
import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import HomeScreen from "./src/Screens/HomeScreen.tsx";
import { upcomingMovies,popularMovies,nowPlayingMovies,searchMovies} from "./src/Api/apiCalls.tsx";
import { Colors } from "react-native/Libraries/NewAppScreen";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
//
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const movie = searchMovies('Uranus2324');
  console.log(movie);
  console.log(searchMovies('Uranus2324'));
  // @ts-ignore
  return (
    <View style={styles.container}>
      <HomeScreen/>

    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingHorizontal: 16,
  },
});
