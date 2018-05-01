import React from 'react';
import { AlertIOS, Text, ScrollView, Image, TouchableOpacity, View } from 'react-native';
import { Card, CardSection, TextButton, UserButton, MenuTile, MenuSection, SearchButton } from '../components/common';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: (
        <Image source={{ uri: 'https://www.clker.com/cliparts/3/u/P/P/q/W/walking-icon-hi.png' }} style={{ height: 35, width: 20 }} />
      ),
      headerLeft: (
        <UserButton onPress={params.GoToUser} />
      ),
      headerRight: (
        <SearchButton onPress={params.GoToSearch} />
      ),
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({
      GoToSearch: this.GoToSearch,
      GoToUser: this.GoToUser,
    });
  }


  componentDidMount() {
    AlertIOS.alert(
      'Age Verification',
      'Budlr operates in compliance with state laws regarding access to cannabis. Are you at least 21 years old or a valid medical marijuana patient?',
    [
      {
        text: 'No',
        onPress: this.locationAlert,
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: this.locationAlert,
      },
    ]
    );
  }
  GoToSearch = () => {
    this.props.navigation.navigate('Search');
  };
  GoToUser = () => {
    this.props.navigation.navigate('User');
  };

  locationAlert() {
    AlertIOS.alert(
      'Location Services',
      'If you enable Location Services we can show you nearby dispensaries and deals for delivery services while this app is in use.',
    [
      {
        text: 'Not Now',
        onPress: () => console.log('No Pressed'),
        style: 'cancel',
      },
      {
        text: 'Enable',
        onPress: () => console.log('Yes Pressed'),
      },
    ]
    );
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
          <MenuSection>
            <MenuTile height={100} width={'98%'} title='$3.99 Delivery' fontSize={16} image={'https://8583b52b4a309671f69d-b436b898353c7dc300b5887446a26466.ssl.cf1.rackcdn.com/15976779_cruise-no-201-energize-your-body--calm_t3365ccda.jpg'} />
          </MenuSection>
          <MenuSection>
            <MenuTile height={100} width={'32%'} title='Accessories' fontSize={8} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRerLKAYj4vX-tzzVi6eRrK6SYA1ulMcMVN9yzKWhwjcndptFcyiQ'} />
            <MenuTile height={100} width={'33%'} title='New On Budlr' fontSize={8} image={'https://static.dezeen.com/uploads/2017/08/netflix-weed-carrot-design-graphics_dezeen_2364_col_1-852x479.jpg'} />
            <MenuTile height={100} width={'32%'} title='Edibles' fontSize={8} image={'https://greatist.com/sites/default/files/Weed%20Edibles%20Feature.png'} />
          </MenuSection>

          <MenuSection>
            <MenuTile onPress={() => this.props.navigation.navigate('Map')} fontSize={24} height={250} width={'98%'} title='Dispensaries Near You' image={'https://my420tours.com/wp-content/uploads/2014/05/blog29.jpg'} />
          </MenuSection>
          <MenuSection>
            <MenuTile height={150} width={'65%'} title='MedMen' onPress={() => {
              this.props.navigation.navigate('Dispensary', { rating: ' 4.9 ', title: 'MedMen', deliveryTime: '|  15 - 20 mins ' });
            }} fontSize={16} image={'https://medmen.com/img/content/touts/homepage-tout-1.jpg'} />
            <MenuTile height={150} width={'33%'} title='Sativa' fontSize={14} image={'https://hightimes.com/wp-content/uploads/2016/04/indicavssativa-afghanidream.jpg'} />
          </MenuSection>
          <MenuSection>
            <MenuTile height={100} width={'32%'} title='Indica' fontSize={10} image={'https://cdn.shopify.com/s/files/1/0441/8845/products/pure-indica-marijuana-seeds_large.jpg?v=1508222946'} />
            <MenuTile height={100} width={'33%'} title='Other' fontSize={10} image={'https://images.weedmaps.com/photos/products/000/017/111/large/87762_170815_HabitCrafted_SparklingStrawberryBeverage_1.jpg'} />
            <MenuTile height={100} width={'32%'} title='Joints' fontSize={10} image={'https://liftedbud.com/wp-content/uploads/sites/8/sites/8/2017/09/prerolled-joint-sandiego-2.jpg'} />
          </MenuSection>
          <MenuSection>
            <MenuTile onPress={() => {
              this.props.navigation.navigate('Dispensary', { rating: ' 4.9 ', title: 'MedMen', deliveryTime: '|  15 - 20 mins ' });
            }} fontSize={24} height={150} width={'98%'} title='Dispensary Page' image={'https://metroxmd.com/wp-content/uploads/2015/11/dispensary-1200x480.jpg'} />
          </MenuSection>
          <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <TextButton onPress={() => this.props.navigation.navigate('Cart')} >
              Your Cart
            </TextButton>
        </View>
    </ScrollView>

    );
  }
}

export default HomeScreen;
