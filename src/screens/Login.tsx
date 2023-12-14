import { View, Text, StyleSheet,ScrollView, StatusBar, TextInput, ActivityIndicator, Button, Alert, KeyboardAvoidingView } from 'react-native'
import React,{useState} from 'react'
import{FIREBASE_AUTH} from '../Config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {COLORS, SPACING} from '../theme/theme';
import AppHeader from '../components/AppHeader';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () =>{
        setLoading(true);
        try{
            FIREBASE_AUTH.signOut();
            const response = await signInWithEmailAndPassword(auth, email,password);
            console.log(response);
        }catch(error :any){
            console.log(error);
        }finally{
            setLoading(false);
        }
      }

    const signUp = async() =>{
        setLoading(true);
        try{
            const response = await createUserWithEmailAndPassword(auth, email,password);
            console.log(response);
        }catch(error){
            console.log(error);
           
        }finally{
            setLoading(false);
        }
    }

  return (
    
    <View style={styles.container}>

    <Text style={styles.welcomeText}>Welcome to Cine World!</Text>
    <KeyboardAvoidingView behavior="padding">
      <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none'
      onChangeText={(text) => setEmail(text)}></TextInput>
      <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password' autoCapitalize='none'
      onChangeText={(text) => setPassword(text)}></TextInput>

      {loading ? ( <ActivityIndicator size="large" color="#FF5524"/> 
      ):(
      <>
      <View style={styles.ButtonContainer}>
        
      <Button color="#FF5524"  title='Login' onPress={signIn}/>
         </View>
      <View style={styles.ButtonContainer}>
     
      <Button color="#FF5524" title='Create Account' onPress={signUp}/>
      </View>
      
      </>
      
      )}
    </KeyboardAvoidingView>
    </View>

  )
}

export default Login;

const styles = StyleSheet.create({
   
    container:{
        marginHorizontal:0,
        flex:1,
        justifyContent: 'center',
        backgroundColor: COLORS.Black,
      },

      welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.White,
        textAlign: 'center',
        marginBottom: 20,
    },
    input:{
        marginVertical:8,
        marginHorizontal:30,
        height:50,
        //width:100,
        justifyContent:'center',
        borderWidth:1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: COLORS.Grey,
        //backgroundColor: '#fff'
    },
    separator: {
        marginVertical: 10,
        marginHorizontal:8,
        //borderBottomColor: '#737373',
        borderBottomColor: COLORS.Black,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      ButtonContainer:{
        marginVertical: 10,
        marginHorizontal:30,
      //padding:50,
      },
});