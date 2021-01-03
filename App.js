import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import Router from './src/navigation/router';

// const post1 = feed[0];

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Router />
    </>
  );
}
