import { useState, useEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, View } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';

const Chat = ({ route, navigation, db }) => {
  const [messages, setMessages] = useState([]);
  // accesses name, backgroundColor, userID via route.params
  // route is passed as prop from App.js Stack.Navigator
  const { name, backgroundColor, userID } = route.params;

  // will be called only once right after the component is mounted
  useEffect(() => {
    navigation.setOptions({ title: name });

    // query conditions for fetching messages from Firestore messages collection
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
    // executes real-time whenever there's a change in the targeted database reference
    const unsubscribeMessages = onSnapshot(q, (documentsSnapshot) => {
      let newMessages = [];

      documentsSnapshot.forEach(doc => {
        newMessages.push({
          id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toMillis()),
        });
      });

      setMessages(newMessages);
    });

    // effect cleanup
    return () => {
      // code to execute when the component unmounts
      // checks if unsubscribeMessages is not undefined; protection in case onSnapshot fails
      if (unsubscribeMessages) unsubscribeMessages();
    }
    // empty dependency array to not rely on any state changes of the component
  }, []);


  // called when user sends message
  const onSend = (newMessages) => {
    addDoc(collection(db, 'messages'), newMessages[0]);
  };

  // returns altered version of Gifted Chat's speech bubble
  const renderBubble = (props) => {
    return <Bubble
      // inherits props
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#6e5488',
          color: '#fff',
        },
        left: {
          backgroundColor: '#FFF'
        }
      }}
    />
  };

  return (
    <View style={[{ backgroundColor: backgroundColor }, styles.container]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={messages => onSend(messages)}
        user={{
          _id: userID,
          name: name,
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