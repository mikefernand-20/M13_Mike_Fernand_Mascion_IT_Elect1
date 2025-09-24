// App.js
import React from 'react';
import { ScrollView } from 'react-native';
import ColorChangerApp from './ColorChangerApp';
import CounterApp from './CounterApp';



const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Messenger />
      <NewsFeed />
      
    </ScrollView>
  );
};

export default App;
