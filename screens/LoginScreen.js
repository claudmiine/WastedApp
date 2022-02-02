import React from 'react'
// import all necessary packages, files from react-native
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import { useState } from "react"
import { auth } from '../firebase'
//load the app Login screens
const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'
        >
        <View style={styles.inputCointainer}>
        <Image style ={styles.image}source={require('./logo.png')} /> 
            <Text>Join us and lets change the world together!</Text>
        <TextInput
        ////placeholder for email input
        placeholder='Email'
        value={email}
        onChangeText={text =>setEmail(text)}
        style={styles.input}
        //placeholder for password input, text is insvisible
        />
        <TextInput
        placeholder='Password'
        value={password}
        onChangeText={text =>setPassword(text) }
        style={styles.input}
        //that part make sure the password in secured
        secureTextEntry
        />
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={() => { }}
        style={styles.button}
        >
        <Text styles={styles.buttonText}>
        Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        onPress={handleSignUp}
        style={styles.button, styles.buttonOutline}
        >
        <Text styles={styles.buttonOutlineText}>
        Register</Text>
        </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
        
    )
}

//export file to access from outside
export default LoginScreen

// create style
const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    },
image:{
    resizeMode: 'contain',
    alignSelf: 'center',
    
    },
input: {
backgroundColor: 'white',
paddingHorizontal: 15,
paddingVertical: 10,
borderRadius:10,
marginTop: 40
},
buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
},
button: {
    backgroundColor: '#7dc248',
    width:'100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
},
buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#7dc248',
    borderWidth:2,
    padding: 15,
    borderRadius: 10,
    width:'100%',
    alignItems: 'center'
},
buttonOutlineText: {
    color: '#7dc248',
    fontSize:16,
    fontWeight: '700'
},
buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize:16,
},
})
