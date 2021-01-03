import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';

const post1 = feed[0];

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <Post post={post1} />
      </SafeAreaView>
    </>
  );
}
