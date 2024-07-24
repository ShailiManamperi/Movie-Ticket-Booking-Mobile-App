import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import HomeScreen from "./src/Screens/HomeScreen.tsx";
import MovieDetailScreen from "./src/Screens/MovieDetailScreen.tsx";
import SeatBookingScreen from "./src/Screens/SeatBookingScreen.tsx";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from "./src/navigation/TabNavigator.tsx";
import { upcomingMovies,popularMovies,nowPlayingMovies,searchMovies} from "./src/Api/apiCalls.tsx";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  // @ts-ignore
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={"Tab"} component={TabNavigator} options={{animation:'default'}}/>
        <Stack.Screen name={"MovieDetails"} component={MovieDetailScreen} options={{animation:'slide_from_right'}}/>
        <Stack.Screen name={"SeatBooking"} component={SeatBookingScreen} options={{animation:'slide_from_bottom'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingHorizontal: 16,
  },
});
