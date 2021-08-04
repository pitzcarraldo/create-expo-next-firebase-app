import React from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
})

export default function Greeting(): JSX.Element {
  return <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
}
