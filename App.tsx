import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';
import SeatBookingScreen from './src/screens/SeatBookingScreen';
import Login from './src/screens/Login';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './src/Config/firebase';


const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout(){
  return(

    <InsideStack.Navigator>
              <InsideStack.Screen
          name="Tab"
          component={TabNavigator}
          options={{animation: 'default'}}
        />
        <InsideStack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
          options={{animation: 'slide_from_right'}}
        />
        <InsideStack.Screen
          name="SeatBooking"
          component={SeatBookingScreen}
          options={{animation: 'slide_from_bottom'}}
        />
    </InsideStack.Navigator>

  )
}


export default function App(){

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) =>{
      console.log('user',user);
      setUser(user);
    });
    
  },[]);
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          {user ? (
             <Stack.Screen name='Inside' component={InsideLayout} options={{headerShown: false}}/>
          ) : (
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
          )}
         
          
        </Stack.Navigator>
      </NavigationContainer>
  );
}