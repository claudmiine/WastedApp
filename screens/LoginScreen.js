import React from 'react'
// import all necessary packages, files from react-native
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'

//load the app Login screens
const LoginScreen = () => {
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
        // value={}
        // onChangeText={text => }
        style={styles.input}
        //placeholder for password input, text is insvisible
        />
        <TextInput
        placeholder='Password'
        // value={}
        // onChangeText={text => }
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
        <Text styles={styles.button}>
        Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        onPress={() => { }}
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
    alignItems:'center',
    }
})
