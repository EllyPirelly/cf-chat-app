import { useState, useEffect } from 'react';
import { StyleSheet, Alert, KeyboardAvoidingView, Platform, View } from 'react-native';
import { Bubble, GiftedChat, InputToolbar } from 'react-native-gifted-chat';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomActions from './CustomActions';

const Chat = ({ route, navigation, db, isConnected }) => {
  // accesses name, backgroundColor, userID via route.params
  // route is passed as prop from App.js Stack.Navigator
  const { name, backgroundColor, userID } = route.params;
  const [messages, setMessages] = useState([]);

  let unsubscribeMessages;

  useEffect(() => {
    // checks internet connection
    if (isConnected === true) {
      navigation.setOptions({ title: name });

      // unregisters current onSnapshot() listener to avoid registering multiple listeners when useEffect code is re-executed
      if (unsubscribeMessages) unsubscribeMessages();
      unsubscribeMessages = null;

      // query conditions for fetching messages from Firestore messages collection
      // whenever it's changed with add, remove or update query, the onSnapshot callback is called
      const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
      // executes real-time whenever there's a change in the targeted database reference
      unsubscribeMessages = onSnapshot(q, (documentsSnapshot) => {
        let newMessages = [];

        documentsSnapshot.forEach(doc => {
          newMessages.push({
            id: doc.id,
            ...doc.data(),
            createdAt: new Date(doc.data().createdAt.toMillis()),
          });
        });

        // caches messages / updates state
        cacheMessages(newMessages);
        setMessages(newMessages);
      });
    } else {
      // loads cached messages if no internet connection
      loadCachedMessages();
    };

    // effect cleanup
    return () => {
      // code to execute when the component unmounts
      // checks if unsubscribeMessages is not undefined; protection in case onSnapshot fails
      if (unsubscribeMessages) unsubscribeMessages();
    }
    // isConnected prop as a dependency value allows the component to call the callback of useEffect whenever the isConnected props' value changes
  }, [isConnected]);

  // loads messages from AsyncStorage
  // called if isConnected in useEffect is false
  const loadCachedMessages = async () => {
    const cachedMessages = await AsyncStorage.getItem('messages') || [];
    setMessages(JSON.parse(cachedMessages));
  }

  // caches messages in AsyncStorage
  const cacheMessages = async (messagesToCache) => {
    try {
      await AsyncStorage.setItem('messages', JSON.stringify(messagesToCache))
    } catch (error) {
      console.log(error.message);
    }
  };

  // adds messages to Firestore database
  const addMessage = async (newMessage) => {
    const newMessageRef = await addDoc(collection(db, 'messages'), newMessage[0]);

    if (!newMessageRef.id) {
      Alert.alert('there is an error');
    };
    // if (newMessageRef.id) {
    //   setMessages([newMessage, ...messages]);
    // } else {
    //   Alert.alert('Unable to add. Please try later.');
    // }
  };

  // sends new messages
  const onSend = (newMessages) => {
    addMessage(newMessages);
  };

  // returns altered version of Gifted Chat's speech bubble
  const renderBubble = (props) => {
    return <Bubble
      // inheriting props
      {...props}
      wrapperStyle={{
        // sender bubble
        right: {
          backgroundColor: '#6e5488',
          color: '#fff',
        },
        // recipient bubble
        left: {
          backgroundColor: '#FFF'
        }
      }}
    />
  };

  // Gifted Chat's input toolbar
  const renderInputToolbar = (props) => {
    if (isConnected) return <InputToolbar {...props} />;
    else return null;
  };

  // creates circle button
  const renderCustomActions = (props) => {
    return <CustomActions {...props} />;
  };

  return (
    <View style={[{ backgroundColor: backgroundColor }, styles.container]}>
      <GiftedChat
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        renderActions={renderCustomActions}
        messages={messages}
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