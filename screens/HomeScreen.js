import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {

 const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
    return (
        <View style={styles.container}>
            <Text style={styles.wText}>Welcome {auth.currentUser?.email}! 
             </Text>
           <Text style={styles.cText}>Your next collection day is tomorrow. </Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#7dc248',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  wText:{
  width: '50%',
  alignItems: 'center',
  fontWeight: 'bold',
  fontSize: 24,
  paddingBottom: '5%',
  },
  cText:{
  width: '50%',
  alignItems: 'center',
  }
})
