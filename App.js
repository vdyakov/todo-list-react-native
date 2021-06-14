import * as Font from 'expo-font';

import HomeContainer from './src/containers/HomeContainer';
import Container from './src/components/Container/Container';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      });

      setIsReady(true);
    };

    loadFonts();
  }, []);

  if (!isReady) {
    return <ActivityIndicator />;
  }

  return (
    <Container>
      <HomeContainer/>
    </Container>
  );
};

export default App;