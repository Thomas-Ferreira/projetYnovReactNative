
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const handleLogin = async (email: string, password: string) => {
    try {
        const userCredentials = await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log('User signed in!', userCredentials.user)
    } catch (e) {
        console.log('Error signing in', e)
    }
}

useEffect(()=>{
  handleLogin('test@gmail.com','123456');
});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
