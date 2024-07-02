import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TitleCart from '../components/TitleCart'
import Product from '../components/Product'

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <TitleCart />
      <Product />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
  }
})