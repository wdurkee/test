import React from 'react';
import { ScrollView, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Card, CardSection, Button, Input, MenuSection, MenuTile, SearchTile, SearchButton } from '../components/common';

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column' }} >
      <Card>
        <CardSection>
          <TextInput
            placeholder='Search..'
            style={styles.inputStyle}
            autoCapitalize='none'
          />
          <TouchableOpacity style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ height: 15, width: 15 }} source={{ uri: 'https://png.icons8.com/metro/1600/search.png' }} />
          </TouchableOpacity>
        </CardSection>
      </Card>
        <ScrollView style={{ flexDirection: 'column' }}>
            <MenuSection>
              <SearchTile height={125} width={'32%'} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
              <SearchTile height={125} width={'33%'} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
              <SearchTile height={125} width={'32%'} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
            </MenuSection>
            <MenuSection>
              <SearchTile height={125} width={'32%'} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
              <SearchTile height={125} width={'33%'} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
              <SearchTile height={125} width={'32%'} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
            </MenuSection>
            <MenuSection>
              <SearchTile height={125} width={'32%'} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
              <SearchTile height={125} width={'33%'} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
              <SearchTile height={125} width={'32%'} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
            </MenuSection>
            <MenuSection>
              <SearchTile height={125} width={'32%'} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
              <SearchTile height={125} width={'33%'} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
              <SearchTile height={125} width={'32%'} image={'https://pixel.nymag.com/imgs/daily/selectall/2016/10/13/13-zuck-stream.w190.h190.jpg'} />
            </MenuSection>
      </ScrollView>

    </View>
    );
  }
}
const styles = {
  inputStyle: {
    height: 30,
    width: '90%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#919191',
    paddingTop: 5,
    paddingLeft: 5,
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 5
  }
}
export default SearchScreen;
