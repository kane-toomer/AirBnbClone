import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
export default function App() {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      <Post />
    </SafeAreaView>
  );
}
