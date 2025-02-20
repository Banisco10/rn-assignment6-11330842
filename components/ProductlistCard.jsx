import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProductlistCard = ( { item, selectedPopularJobs, addToCart }) => {
  return (
    <View style={styles.container(selectedPopularJobs, item)}>
      <View style={styles.infoContainer}>
      <Image style={styles.image} source={item.image}/>

      <TouchableOpacity style={styles.add} onPress={() => addToCart(item)}>
      <Image source={require("../assets/add_circle.png")}/>
      </TouchableOpacity>

      <View style={styles.descriptionsContainer}>
        <View style={styles.amount}>
        <Text style={styles.jobName(selectedPopularJobs, item)} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.companyName} numberOfLines={2}>{item.companyName}</Text>
        </View>

        <View style={styles.details}>
        <Text style={styles.prize} numberOfLines={1}>{item.prize}</Text>
        </View>
        
      </View>
      </View>
    </View>
  )
}

export default ProductlistCard


const styles = StyleSheet.create({
  container: (selectedPopularJobs, item) => ({
    backgroundColor: selectedPopularJobs === item.popularjobs ? '#FFFFFF' : '#FFFFFF',
    width: '49%',
    height: 400,
    marginTop: 40,
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'nowrap',
  }),
  amount: {
    width: 110,
    marginBottom: 5,
  },

  details: {
    width: 110,
  },
  jobName: (selectedPopularJobs, item) => ({
    fontSize: 14,
    fontWeight: selectedPopularJobs === item.popularjobs ? 'bold' : 'normal',
    color: selectedPopularJobs === item.popularjobs? '#0D0D26' : '#0D0D26',
  }),
  companyName: {
    fontSize: 13,
    color: '#808080',
  },
  prize: {
    fontSize: 20,
    color: '#daa520',
  },
  image: {
    height: 300,
    width: '100%',
    marginTop: -20
  },
  descriptionsContainer: {
  marginTop: 10
  },
  add: {
    position: 'absolute',
    top: 240,
    right: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

