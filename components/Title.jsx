import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Title() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <View style={styles.menu}>
      <Image source={require("../assets/Menu.png")} />
      </View>
      </TouchableOpacity>
      <View style={styles.textTitle}>
        <Image source={require("../assets/Logo.png")} />
      </View>
      <View style={styles.optionsContainer}>
      <TouchableOpacity>
      <View style={styles.searchTitle}>
        <Image style={styles.image} source={require("../assets/Search.png")} />
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.bagTitle}>
        <Image style={styles.image} source={require("../assets/shoppingBag.png")} />
      </View>
      </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create ({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  textTitle: {
    alignItems: "center",
    marginLeft: 80,
    marginRight: 40
  },
  optionsContainer: {
    flexDirection: "row",
  },
  searchTitle: {
    height: 35,
    width: 35,
    borderRadius: 18,
    marginRight: 8,
    backgroundColor: 'lightgray'
  },
  bagTitle: {
    height: 35,
    width: 35,
    borderRadius: 18,
    marginRight: 15,
    backgroundColor: 'lightgray'
  },
  image: {
    marginTop: 5,
    marginLeft: 5
  }
})