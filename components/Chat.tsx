/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';

interface Message {
  id: string;
  message: string;
  user: string;
  timestamp: string;
}

interface Props {
  messages: Message[];
}

const Chat: React.FC<Props> = ({messages}) => {
  const [data, setData] = useState(messages)
  const [newMessage, setNewMessage] = useState('');
  let messageSend : Message

  const handleRefresh = (value: string) => {
    const newId : number = +data[data.length - 1]['id']+1
    messageSend = {id:newId.toString(), message:value, user:'user1', timestamp:'25/01'}
    messages = [...messages, messageSend];
    setData([...data, messageSend]);
    setNewMessage('');
  }
  

  return (
    <View style={styles.container}>
      <FlatList style={styles.messageList}
        data={data}
        keyExtractor={item => item.id}
        //onRefresh={handleRefresh}
        refreshing={false}
        renderItem={({item}) => (
          <View style={styles.messageBubble}>
            <Text style={styles.messageAvatar}>{item.user}</Text>
            <Text style={styles.messageText}>{item.message}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          value={newMessage}
          onChangeText={text => setNewMessage(text)}
          placeholder="Type your message here..."
        />
        <Button title="Send" onPress={() => handleRefresh(newMessage)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  messageList: {
    padding: 10,
  },
  messageBubble: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 18,
    color: '#000',
  },
  messageAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageTimestamp: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputField: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
    color: '#000',
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
  },
  sendButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Chat;
