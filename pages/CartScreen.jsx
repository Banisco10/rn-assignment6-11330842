import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text>CartScreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  }
})