import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import AsyncStorage from '@react-native-async-storage/async-storage';


const DATA = [
  { id: '1', job_title: 'Office Wear', prize: '$120', companyName: 'Office wear for you', image: require('../assets/dress1.png')},
  { id: '2', job_title: 'Lamerei', prize: '$120', companyName: 'Rercycle Boucle Knit Cardigan Pink',  image: require('../assets/dress4.png')},
  { id: '3', job_title: 'Church Wear', prize: '$120', companyName: 'Rercycle Boucle Knit Cardigan Pink', image: require('../assets/dress3.png')},
];

export default function Product() {
  const [DATA, setDATA] = useState([]);
  const [selectedProductlist, setselectedProductlist] = useState(null);

    const loadCart = async () => {
      let DATA = await AsyncStorage.getItem('DATA');
      DATA = DATA? JSON.parse(DATA) : [];
      setDATA(DATA);
    };

    const removeFromCart = async (product) => {
     let updatedDATA = DATA.filter((item) => item.id !== product.id);
     await AsyncStorage.setItem('DATA', JSON.stringify(updatedDATA));
     setDATA(updatedDATA);
    };

    useEffect(() => {
      loadCart();
    }, []);


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle = {styles.contentContainer}
       showsVerticalScrollIndicator={false}
      >
        {DATA.map((item) => (
        <ProductCard
          data = {DATA}
          key={item.id}
          item = {item}
          selectedProductlist={selectedProductlist}
          removeFromCart={removeFromCart}
        /> 
      ))}
      </ScrollView>
      <View style={styles.total}>
        <Text style={styles.text}>EST. TOTAL</Text>
        <Text style={styles.text}>$ 240</Text>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '80.7%',
      justifyContent: 'space-between',
    },
    contentContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    total: {
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 10,
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  }
})