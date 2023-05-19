// react navigation library
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// firebase and firestore
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import Start from './components/Start';
import Chat from './components/Chat';

// creates navigator (react navigation library)
// returns an object containing 2 components: Navigator and Screen
const Stack = createNativeStackNavigator();

const App = () => {
  // web app firebase config info
  const firebaseConfig = {
    apiKey: 'AIzaSyDsTKaxaykNt_3kCoiUg4bG_eVgYmLw9nw',
    authDomain: 'chat-app-128ae.firebaseapp.com',
    projectId: 'chat-app-128ae',
    storageBucket: 'chat-app-128ae.appspot.com',
    messagingSenderId: '93131347177',
    appId: '1:93131347177:web:1e12a524971b7338280c78'
  };

  // firebase initialization
  const app = initializeApp(firebaseConfig);

  // gets reference to firestore service
  const db = getFirestore(app);

  return (
    // NavigationContainer is needed in order for react-navigation to work
    <NavigationContainer>
      <Stack.Navigator
        // first screen loaded upon start
        initialRouteName='Start'
      >
        <Stack.Screen
          name='Chat Up!'
          // component you want to use
          component={Start}
        />
        <Stack.Screen
          name='Chat'>
          {/* passes props to the chat component */}
          {props => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;