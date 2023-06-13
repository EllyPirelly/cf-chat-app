import { useState } from 'react';
import { StyleSheet, Alert, Image, ImageBackground, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getAuth, signInAnonymously } from 'firebase/auth';

const backgroundImage = require('../assets/start-bg-img.png');
const userFlower = require('../assets/user-flower.png');

const Start = ({ navigation }) => {
  const auth = getAuth();
  const [name, setName] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  // anonymous sign-in logic
  const signInUser = () => {
    signInAnonymously(auth)
      .then(result => {
        // navigation is passed as prop from App.js Stack.Navigator
        // object as a 2nd parameter representing the data you want
        navigation.navigate('Chat', {
          userID: result.user.uid,
          name: name,
          backgroundColor: backgroundColor,
        });
        Alert.alert('Signed in successfully!');
      })
      .catch((error) => {
        Alert.alert('Unable to sign in, try again later.');
      })
  }

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode='cover'
      style={styles.startImgBg}
    >
      <View style={styles.container}>
        <Text style={styles.mainHeadline}>Chat Up!</Text>

        <View style={styles.contentWrapper}>
          {/* text input */}
          <View style={styles.inputWrapper}>
            <Image
              source={userFlower}
              style={styles.inputImage}
            />
            <TextInput
              style={styles.inputText}
              value={name}
              onChangeText={setName}
              placeholder='Enter your name'
            />
          </View>

          {/* color headline and button */}
          <View style={styles.colorWrapper}>
            <Text style={styles.colorHeadline}>Choose background color</Text>

            <View style={styles.colorButtonWrapper}>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel='Press to choose background color'
                accessibilityHint='Pressing chooses dark blue as the background color for the chat.'
                accessibilityRole='button'
                style={[styles.colorBtn, { backgroundColor: '#fedb72' }]}
                onPress={() => setBackgroundColor('#fedb72')}
              ></TouchableOpacity>

              <TouchableOpacity
                accessible={true}
                accessibilityLabel='Press to choose background color'
                accessibilityHint='Pressing chooses dark vanilla as the background color for the chat.'
                accessibilityRole='button'
                style={[styles.colorBtn, { backgroundColor: '#edbf9e' }]}
                onPress={() => setBackgroundColor('#edbf9e')}
              ></TouchableOpacity>

              <TouchableOpacity
                accessible={true}
                accessibilityLabel='Press to choose background color'
                accessibilityHint='Pressing chooses light purple as the background color for the chat.'
                accessibilityRole='button'
                style={[styles.colorBtn, { backgroundColor: '#c9d4e0' }]}
                onPress={() => setBackgroundColor('#c9d4e0')}
              ></TouchableOpacity>

              <TouchableOpacity
                accessible={true}
                accessibilityLabel='Press to choose background color'
                accessibilityHint='Pressing chooses light olive green as the background color for the chat.'
                accessibilityRole='button'
                style={[styles.colorBtn, { backgroundColor: '#c3cfa0' }]}
                onPress={() => setBackgroundColor('#c3cfa0')}
              ></TouchableOpacity>
            </View>
          </View>

          {/* submit button */}
          <TouchableOpacity
            accessible={true}
            accessibilityLabel='Press to start chatting'
            accessibilityHint='Navigates to the chat.'
            accessibilityRole='button'
            style={styles.btnSubmit}
            // onPress activates navigator and navigates to defined screen 'Chat'
            onPress={signInUser}>
            <Text style={styles.btnSubmitText}>Start chatting</Text>
          </TouchableOpacity>
        </View>

        {
          Platform.OS === 'ios'
            ? <KeyboardAvoidingView behavior='padding' />
            : null
        }
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  startImgBg: {
    flex: 1,
    // as a fallback
    backgroundColor: '#ffffb7',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  mainHeadline: {
    color: '#a44a3f',
    fontSize: 44,
    fontWeight: 700,
    marginTop: 64
  },
  contentWrapper: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 64,
    padding: 16,
    width: '88%',
  },
  inputWrapper: {
    alignItems: 'center',
    borderColor: '#4c572c',
    borderRadius: 4,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    width: '100%',
  },
  inputImage: {
    height: 32,
    opacity: 0.5,
    width: 32,
  },
  inputText: {
    fontSize: 16,
    width: '85%',
  },
  colorHeadline: {
    color: '#4c572c',
    fontSize: 16,
    marginTop: 16,
  },
  colorButtonWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  colorBtn: {
    borderRadius: 20,
    height: 40,
    width: 40,
  },
  btnSubmit: {
    alignItems: 'center',
    backgroundColor: '#4c572c',
    justifyContent: 'center',
    marginTop: 16,
    padding: 16,
    width: '100%',
  },
  btnSubmitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 700,
  },
});

export default Start;