# Chat App

### What is this about?
A Chat App for mobile devices (phones) using React Native.
<br>
The App will provide users with a chat interface that includes options to:
- give access/then access their media library (to access and share photos)
- give access/then access their device's camera (to take and share a photo)
- give access/then access their geo location data (to display and share it as a map)

This Chat App has been built as a task for Achievement 5 in [Career Foundry's Full-Stack Web Development Program](https://careerfoundry.com/en/courses/become-a-web-developer/).

![Screenshot of different screens of the Chat App](/assets/screenshots/screenshot-chat-app-new.png)

### Technical requirements
The Chat App
- must be written in [React Native](https://github.com/facebook/react-native)
- must be developed using [Expo (Expo CLI and the Expo Go App)](https://expo.dev/) and [Android Studio](https://developer.android.com/studio)
- must use [Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat) to create the chat interface and functionality
- must be styled according to the given design
- must use [Google Firebase](https://firebase.google.com/) as cloud storage solution
  - Firestore Database to store chat conversations (plus geo location)
  - Storage to store images sent in chat conversations
  - Authentication of users (Anonymous) at first enter
- must use [Expo AsyncStorage](https://docs.expo.dev/versions/latest/sdk/async-storage/) to store chat conversations locally
- must use [Expo NetInfo](https://docs.expo.dev/versions/latest/sdk/netinfo/) to detect network connection
- must enable the user to read previous messages while being offline
- must disable the user to create new messages while being offline
- must use [Expo ImagePicker](https://docs.expo.dev/versions/latest/sdk/imagepicker/) to
  - ask the user for permission to access device's image library
  - have the user select an image off of device's image library
  - ask the user for persmission to access device's camera
  - have the user take a photo with device's camera
- must use [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/) to
  - ask the user for permission to share their geo location
  - app must read user's geo location data
- must use [MapView component](https://github.com/react-native-maps/react-native-maps) to share geo location in chat conversations
- must display an action menu with four options ('Choose From Library', 'Take Picture', 'Send Location', 'Cancel'), using [ActionSheet](https://github.com/expo/react-native-action-sheet), (GiftedChat already uses this internally)
- codebase must contain comments

### Feature requirements
- two screens - start screen and chat screen
- start screen
  - a user can enter their name and choose a background color for the chat screen
- chat screen
  - display of chat conversation, an input field, a submit button
  - picking an image off of device's image library
  - taking photo with device's camera
  - sending an image via chat conversation
  - retaining and sending geo location data via chat conversation
- storing data on- and offline to enable users to read their messages while being offline
- disallow the creation of new messages when users are offline

### Given design
![Screenshot of given design](/assets/screenshots/screenshot-given-design.png)

#### Passed assignment with following, changed design afterwards
![Screenshot of different screens of the Chat App](/assets/screenshots/screenshot-chat-app.png)

### Languages, Libraries, Frameworks, Tools
- [React Native](https://github.com/facebook/react-native)
  - JSX
  - JavaScript
- [React Navigation](https://reactnavigation.org/docs/getting-started/)
- [Expo](https://expo.dev/)
  - [Expo CLI](https://docs.expo.dev/get-started/installation/) and Expo Go App
  - [Watchman](https://docs.expo.dev/get-started/installation/#requirements)
- [Android Studio](https://developer.android.com/studio)
- [Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat)
- [Google Firebase](https://firebase.google.com/)
- [Expo AsyncStorage](https://docs.expo.dev/versions/latest/sdk/async-storage/)
- [Expo NetInfo](https://docs.expo.dev/versions/latest/sdk/netinfo/)
- [Expo ImagePicker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)
- [MapView component](https://github.com/react-native-maps/react-native-maps)
- [ActionSheet](https://github.com/expo/react-native-action-sheet)

### Heads-up
At time of writing to use Expo CLI you need to downgrade Node to `16.19.0` <br>
Eventhough [Expo's site is a bit misleading regarding LTS](https://docs.expo.dev/get-started/installation/) if you try latest you will run into an error. <br>
[Also see here.](https://github.com/expo/expo/issues/21026)

### Global
- `expo-CLI` - to create new projects and start running Expo

### Dependencies
- `expo` - to set up, develop and test React Native Apps
- `expo-image-picker` - to request access to image library/camera, sent images via chat
- `expo-location` - to request access to geo location
- `firebase` - to enable real-time chat/saving of messages/images, anonymous sign-in
- `react`
- `react-native` - to build apps for Android and iOS quickly with one codebase
- `react-native-gifted-chat` - library specifically created for developing chat apps
- `react-native-safe-area-context`
- `react-native-screens`
- `react-native-maps` - to use MapView component for geo location display in chat conversation
- `@react-native-async-storage/async-storage` - to store messages offline
- `@react-native-community/netinfo` - to check if user is on- or offline
- `react-navigation` - third party library to navigate between screens
- `@react-navigation/native`
- `@react-navigation/native-stack`

### Dev Dependencies
- `babel`

## How to run this?
- as this has been built with Expo, you best have an Expo account and download Expo Go on your mobile device
- it's also beneficial to set up an emulated device via Android Studio
- before cloning check your current Node version and downgrade to `16.19.0`
- after that
  - clone the repo
  - `cd` into project
  - `npm install`
- `expo login` will log you in via terminal
- `expo whoami` will check the currently logged-in account
- `npm start` or `expo start` will start the project (the Metro Bundler)
![Screenshot of Metro Bundler](/assets/screenshots//screenshot-metro-bundler.png)
- on MAC, you do NOT need the "full" XCode version to start the Android or iOS simulator and can hit `n`
- then open your iPhone
- open the Expo Go App
- open the project, this will start the building of files
- `control c` to stop the project from running
- `expo start --offline` to test the app offline
