import React from 'react';
import { AlertIOS, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card, CardSection, Button, UserButton, MenuTile, MenuSection, SearchButton } from '../components/common';

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
            <MenuTile height={100} width={'98%'} title='$3.99 Delivery' fontSize={16} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
          </MenuSection>
          <MenuSection>
            <MenuTile height={100} width={'32%'} title='Accessories' fontSize={8} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
            <MenuTile height={100} width={'33%'} title='New On Budlr' fontSize={8} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
            <MenuTile height={100} width={'32%'} title='Edibles' fontSize={8} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
          </MenuSection>

          <MenuSection>
            <MenuTile onPress={() => this.props.navigation.navigate('Map')} fontSize={24} height={250} width={'98%'} title='Dispensaries Near You' image={'https://my420tours.com/wp-content/uploads/2014/05/blog29.jpg'} />
          </MenuSection>
          <MenuSection>
            <MenuTile height={150} width={'65%'} title='Featured' fontSize={16} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
            <MenuTile height={150} width={'33%'} title='Sativa' fontSize={14} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
          </MenuSection>
          <MenuSection>
            <MenuTile height={100} width={'32%'} title='Indica' fontSize={10} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
            <MenuTile height={100} width={'33%'} title='Drinks' fontSize={10} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
            <MenuTile height={100} width={'32%'} title='Joints' fontSize={10} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
          </MenuSection>
          <MenuSection>
            <MenuTile onPress={() => this.props.navigation.navigate('Map')} fontSize={24} height={150} width={'98%'} title='List of Dispensaries' image={'https://my420tours.com/wp-content/uploads/2014/05/blog29.jpg'} />
          </MenuSection>
        <Card>
          <CardSection>
            <Button onPress={() => {
              this.props.navigation.navigate('Dispensary', { rating: ' 4.9 ', title: 'MedMen', deliveryTime: '|  15 - 20 mins ' });
            }} >
              Dispensary Page
            </Button>
          </CardSection>
        </Card>
    </ScrollView>

    );
  }
}

export default HomeScreen;
