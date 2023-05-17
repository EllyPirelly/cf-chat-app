import { useState, useEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';

const Chat = ({ route, navigation }) => {
  const [messages, setMessages] = useState([]);
  // access name and color via route.params
  // route is passed as prop from App.js Stack.Navigator
  const { name, color } = route.params;

  // will be called only once right after the component is mounted
  useEffect(() => {
    navigation.setOptions({ title: name });
    setMessages([
      {
        _id: 1,
        text: 'Hello and welcome to the chat!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'This is a system message',
        createdAt: new Date(),
        system: true,
      },
    ]);
    // empty array to not rely on any state changes of the component
  }, []);

  // called when user sends message
  const onSend = (newMessages) => {
    // previousMessage represents variable referring to latest value of the state
    // appends new message to newMessage array
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
  };

  // returns altered version of Gifted Chat's speech bubble
  const renderBubble = (props) => {
    return <Bubble
      // inherits props
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#000'
        },
        left: {
          backgroundColor: '#FFF'
        }
      }}
    />
  };

  return (
    <View style={[{ backgroundColor: color }, styles.container]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
          name
        }}
      />

      {
        Platform.OS === 'android'
          ? <KeyboardAvoidingView behavior='height' />
          : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Chat;