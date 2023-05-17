# Chat App

### What is this about?
A Chat App for mobile devices (phones) using React Native. The App will provide users with a chat interface and options to share images and their location.
<br>
This Chat App has been built as a task for Achievement 5 in [Career Foundry's Full-Stack Web Development Program](https://careerfoundry.com/en/courses/become-a-web-developer/).

ToDo: Screenshots

### Technical requirements
The Chat App
- must be written in React Native
- must be developed using Expo (Expo CLI and Expo Go App) and Android Studio
- must be styled according to the given screen design
- must authenticate users anonymously via Google Firebase authentication
- chat conversations must be stored in Google Firestore database
- chat conversations must be stored locally
- chat interface and functionality must be created with Gifted Chat library
- must let users pick and send images from the phone's image library
- must let users take pictures with device's camera app and send them
- must store images in Firebase Cloud Storage
- must be able to read the user's location data
- location data must be sent via chat in a map view
- codebase must contain comments

### Feature requirements
- start screen, where a user can enter their name and choose a background color for the chat screen
- chat screen displaying the conversation, an input field, a submit button
- sending images via chat
- retaining location data
- store data on- and offline

### Given design
![Screenshot of given design](/assets/screenshots/screenshot-given-design.png)

### Languages, Libraries, Frameworks, Tools
- React Native
- [Expo](https://expo.dev/)
  - [Expo CLI](https://docs.expo.dev/get-started/installation/) and Expo Go App
  - [Watchman](https://docs.expo.dev/get-started/installation/#requirements)
- [Android Studio](https://developer.android.com/studio) to - when as in my case developing on MAC - emulate Android devices
- Google Firestore

### Heads-up
- at time of writing to use Expo CLI you need to downgrade Node to `16.19.0`

### Dependencies
- `expo`
- `react`
- `react-native`
- `react-navigation` - third party library to navigate between screens

### Dev Dependencies
- `babel`

### How to run this? - ToDo
With Expo installed
- `npm start` or `expo start`