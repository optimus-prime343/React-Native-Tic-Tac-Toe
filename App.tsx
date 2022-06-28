import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './screens/home-screen'
import { ToastProvider } from 'react-native-toast-notifications'

const App = () => {
  return (
    <ToastProvider>
      <StatusBar />
      <HomeScreen />
    </ToastProvider>
  )
}

export default App
