import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Chat = ({ route, navigation }) => {

  // access name and color via route.params
  // route is passed as prop from App.js Stack.Navigator
  const { name, color } = route.params;

  useEffect(() => {
    // will be called only once right after the component is mounted
    navigation.setOptions({ title: name });
    // empty array to not rely on any state changes of the component
  }, []);

  return (
    <View style={[{ backgroundColor: color }, styles.container]}>
      <Text>Hello Chat Screen...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Chat;