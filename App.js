import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults';

// const post1 = feed[0];

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        <SearchResultsScreen />
      </SafeAreaView>
    </>
  );
}
