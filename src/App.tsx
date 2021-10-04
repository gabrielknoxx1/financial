import React, {Suspense} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Home} from './screens/Home';

const App = () => {
  return (
    <Suspense fallback={<Text>Loading ...</Text>}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </Suspense>
  );
};

export default App;
