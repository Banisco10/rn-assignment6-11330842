import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Title />
      <Subtitle />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    }
})