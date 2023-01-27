import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-facebook';
import * as React from 'react';


WebBrowser.maybeCompleteAuthSession();

export default function Login() {
    
  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "168737528368-nb7t1sfrt0jo5ttfmtrqe7c21p90ut17.apps.googleusercontent.com",
    iosClientId: "168737528368-s512d7ntlcm62in1dote7mm4hr6l66l6.apps.googleusercontent.com",
    androidClientId: "168737528368-m9acm0ehgh99i3nj0epm77ada9bbslg8.apps.googleusercontent.com"
  });
  
  
  async function logIn() {
    try {
      await Facebook.initializeAsync({
        appId:'1191908361493389'
      });
      const {
        type,
        tokken,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profiles'],
      });
      if (type === 'success') {
        const response = await fetch('https://graph.facebook.com/me?access_tokken=${tokken}&fields=id,name,email,picture.height(500)');
        Alert.alert('Logged in!', 'Hi ${(await response.json()).name}!');
      }else {

      }
    } catch ({ message }) {
      alert('Facebook Error: ${message}');
    }
  }
  
  
  React.useEffect(() => {
    if(response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
    }
  }, [response, accessToken])

  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const useInfo = await response.json();
    setUser(useInfo);
  }

  const ShowUserInfo = () => {
    if(user) {
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 35, fontWeight: 'bold', marginBottom: 20}}>Welcome</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{user.name}</Text>
        </View>
      )
    }
  }  

  return (

    <View style={styles.container}>
      {user && <ShowUserInfo />}
      {user === null &&
          <>
          <Text style={{fontSize: 35, fontWeight: 'bold'}}>Welcome</Text>
          <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20, color: 'gray'}}>Please login</Text>
        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
            }} 
        >
         <Image source={require("../assets/images/btn.png")} style={{width: 300, height: 30}}/> 
        </TouchableOpacity>
        <Button title='Login with Facebook' onPress={logIn}/>
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn:{
    backgroundColor: "#4267b2",
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius:20,

  }
})