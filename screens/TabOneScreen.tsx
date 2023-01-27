import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { RootTabScreenProps } from '../types';
import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { createUser } from '../config/firebaseconfig';
import Login from '../components/Login';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (email: string, password: string) => {
    try {
        const userCredentials = await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
        console.log('Error signing in', e)
    }
  }
  
  const handleSubmit = (email: string, password: string) => {
    handleLogin(email,password);
    createUser();
    setEmail('');
    setPassword('');
  };


  return (
    <>
    <Login />
    <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true} />
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit(email, password)}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width: '80%',
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  }
});
