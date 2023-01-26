import { StyleSheet } from 'react-native';
import Chat from '../components/Chat';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {
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