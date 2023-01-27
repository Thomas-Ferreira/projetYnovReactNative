import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Chat from '../components/Chat';
import { readUser } from '../config/firebaseconfig';
import { RootTabScreenProps } from '../types';

export default function TabThreeScreen({ navigation }: RootTabScreenProps<'TabThree'>) {

  useEffect(() => {
    if (!readUser()) {
      navigation.navigate("TabOne");
    }
  }, []);

  return (
    <Chat
    messages={[
      {id: '1', message: 'test message', user: 'user1', timestamp: '20/01'},
      {id: '2', message: 'test message', user: 'user2', timestamp: '20/01'},
    ]}
  />
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