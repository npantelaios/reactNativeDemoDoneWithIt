// cd /usr/local/android-studio/bin
// .//studio.sh (Android studio path)
// start: npm start
// on web browser: click "run on android emulator"
import React from 'react';
import { 
  Dimensions,
  StyleSheet, 
  View,
  SafeAreaView, 
  Alert, 
  Button, 
  StatusBar, 
  Platform,
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  return <ViewImageScreen />;
}