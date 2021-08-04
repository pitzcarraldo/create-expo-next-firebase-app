import React from 'react'
import { StyleSheet, View } from 'react-native'
import Greeting from '../components/Greeting'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
})

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Greeting />
    </View>
  )
}
