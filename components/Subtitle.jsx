import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Subtitle() {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
      <Text>Our Story</Text>
      </View>
      <View style={styles.subOptions}>
        <TouchableOpacity>
        <View style={styles.listView}>
          <Image style={styles.image} source={require("../assets/Listview.png")} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.filter}>
          <Image style={styles.image} source={require("../assets/Filter.png")} />
        </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 50
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    subOptions: {
      flexDirection: 'row',
      justifyContent:'space-around',
      right: 0
    },
    listView: {
      height: 42,
      width: 42,
      borderRadius: 25,
      backgroundColor: 'lightgray'
    },
    filter: {
      height: 42,
      width: 42,
      borderRadius: 25,
      backgroundColor: 'lightgray'
    },
    image: {
      marginTop: 12,
      marginLeft: 12
    }
})