import React from 'react';
import { Text, View, Image } from 'react-native';

// Make a component

const ListDescription = (props) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.textViewStyle}>
        <Text style={styles.nameText}>Gelato</Text>
        <Text style={styles.strainText}>Indica</Text>
        <Text style={styles.quantityText}>1/8</Text>
        <Text style={styles.priceText}>$65.00</Text>
      </View>
      <Image style={styles.arrowStyle} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdKtowj3LvusoWpxfergvkHIacyfVGu1OtzMGoqWpcIqPyDyVpIA' }} />
    </View>
  );
};


const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  arrowStyle: {
    height: 20,
    width: 20,
    marginTop: 30,
    marginLeft: 175,
    marginRight: 20
  },
  textViewStyle: {
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  imageStyle: {
    height: '10%',
    width: '35%'
  },
  nameText: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 20,
    paddingBottom: 3
  },
  strainText: {
    color: '#9a9c9e',
    fontSize: 10,
    paddingLeft: 20,
    paddingBottom: 10
  },
  quantityText: {
    color: '#9a9c9e',
    fontSize: 9,
    paddingLeft: 20,
    paddingBottom: 3
  },
  priceText: {
    fontSize: 10,
    paddingLeft: 20
  }
};

// Make the component available to other parts of the app
export { ListDescription };
