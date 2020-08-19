import React, { useState } from 'react'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import MainLayout from './src/components/MainLayout/MainLayout'

async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Lobster-Regular.ttf'),
  })
}

function App() {

  const [isReady, setIsReady] = useState(false)
  if (!isReady) {
    // If this component is rendered, then no further js code is executed
    return <AppLoading
      startAsync={loadApplication}
      onFinish={() => setIsReady(true)}
      onError={err => console.log(err)}
    />
  }

  return (
    <MainLayout />
  );
}

export default App;
