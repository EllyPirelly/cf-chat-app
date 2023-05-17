import { useState } from 'react';
import { StyleSheet, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Start = ({ navigation }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  return (
    <ImageBackground
      source={require('../assets/start-bg-img.png')}
      resizeMode='cover'
      style={styles.startImgBg}
    >
      <View style={styles.container}>
        <Text style={styles.mainHeadline}>Chat Up!</Text>

        <View style={styles.contentWrapper}>
          {/* text input */}
          <View style={styles.inputWrapper}>
            <Image
              source={require('../assets/user-ninja.png')}
              style={styles.inputImage}
            />
            <TextInput
              style={styles.inputText}
              value={name}
              onChangeText={setName}
              placeholder='Enter your name'
            />
          </View>

          {/* color headlline and button */}
          <View style={styles.colorWrapper}>
            <Text style={styles.colorHeadline}>Choose background color</Text>

            <View style={styles.colorButtonWrapper}>
              <TouchableOpacity
                style={[styles.colorBtn, { backgroundColor: '#3d405b' }]}
                onPress={() => setColor('#3d405b')}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[styles.colorBtn, { backgroundColor: '#f2cc8f' }]}
                onPress={() => setColor('#f2cc8f')}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[styles.colorBtn, { backgroundColor: '#c9d4e0' }]}
                onPress={() => setColor('#c9d4e0')}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[styles.colorBtn, { backgroundColor: '#81b29a' }]}
                onPress={() => setColor('#81b29a')}
              ></TouchableOpacity>
            </View>
          </View>

          {/* submit button */}
          <TouchableOpacity
            accessible={true}
            accessibilityLabel='Press to start chatting'
            accessibilityHint='Pressing sends you to the chat.'
            accessibilityRole='button'
            style={styles.btnSubmit}
            // navigation is passed as prop from App.js Stack.Navigator
            // onPress activates navigator and switches to defined screen 'Chat'
            // object as a 2nd parameter representing the data you want to use in 'Chat'
            onPress={() => navigation.navigate('Chat', {
              name: name ? name : 'User',
              color: color ? color : 'white'
            })}>

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
    // as a fallback?
    backgroundColor: '#fdf6e5',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  mainHeadline: {
    color: '#fff',
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
    borderColor: '#757083',
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
    color: '#757083',
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
    backgroundColor: '#757083',
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