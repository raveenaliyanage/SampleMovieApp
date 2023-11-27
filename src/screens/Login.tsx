import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, Alert, KeyboardAvoidingView } from 'react-native'
import React,{useState} from 'react'
import{FIREBASE_AUTH} from '../Config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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
    <KeyboardAvoidingView behavior="padding">
      <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none'
      onChangeText={(text) => setEmail(text)}></TextInput>
      <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password' autoCapitalize='none'
      onChangeText={(text) => setPassword(text)}></TextInput>

      {loading ? ( <ActivityIndicator size="large" color="#0000ff"/> 
      ):(
      <>
      <View style={styles.ButtonContainer}>
      <Button color="#000"  title='Login' onPress={signIn}/>
      
      </View>
      <View>
      <Button color="#000" title='Create Account' onPress={signUp}/>
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
        marginHorizontal:20,
        flex:1,
        justifyContent: 'center'
    },
    input:{
        marginVertical:4,
        height:50,
        borderWidth:1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      ButtonContainer:{
        marginVertical: 8,
      },
});