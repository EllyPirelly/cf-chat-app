// react navigation library
import { NavigationContainer } from '@react-navigation/native';
// react navigation library
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './components/Start';
import Chat from './components/Chat';

// create navigator (react navigation library)
// returns an object containing two components: Navigator and Screen
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // NavigationContainer is needed in order for react-navigation to work
    <NavigationContainer>
      <Stack.Navigator
        // first screen loaded upon start
        initialRouteName='Start'
      >
        <Stack.Screen
          // handler used to open or navigate to
          name="Chat Up!"
          // component you want to use
          component={Start}
        />
        <Stack.Screen
          // handler used to open or navigate to
          name='Chat'
          // component you want to use
          component={Chat}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;