import React, {Component} from 'react';
import {View, Text, ScrollView, Platform, Dimensions} from 'react-native';
import * as RNFS from 'react-native-fs';
const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width * 0.7);
import {Picker} from '@react-native-community/picker';
import {styles} from '../../styles/';
import CarouselBlock from '../carousel';
class HomePageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      selected_book: 0,
      index: 0,
    };
  }

  readFile(book) {
    if (book == '0') {
      return;
    }

    if (Platform.OS == 'ios') {
      RNFS.readFile(`${RNFS.MainBundlePath}/assets/${book}.txt`)
        .then((res) => {
          this.setState({content: res.match(/.{1,100000}/g)});
        })
        .catch((err) => {
          console.log(err.message, err.code);
        });
    } else if (Platform.OS == 'android') {
      RNFS.readFileAssets(`${book}.txt`)
        .then((res) => {
          this.setState({content: res.match(/.{1,100000}/g)});
        })
        .catch((err) => {
          console.log(err.message, err.code);
        });
    }
  }

  _renderItem({item}) {
    return (
      <ScrollView style={styles.itemContainer}>
        <Text style={styles.content}>{item}</Text>
      </ScrollView>
    );
  }

  render() {
    const {selected_book, content, index} = this.state;
    return (
      <View>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selected_book}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => {
              this.readFile(itemValue);
              this.setState({selected_book: itemValue});
            }}>
            <Picker.Item label="SELECT A BOOK" value="0" />
            <Picker.Item label="BOOK 1" value="samplebook1" />
            <Picker.Item label="BOOK 2" value="samplebook2" />
          </Picker>
        </View>
        {selected_book != '0' ? (
          <View>
            <CarouselBlock
              ref={(c) => (this.carousel = c)}
              data={content}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={ITEM_WIDTH}
              containerCustomStyle={styles.carouselContainer}
              inactiveSlideShift={0}
              onSnapToItem={(index) => this.setState({index})}
              useScrollView={true}
            />
            <Text style={styles.counter}>{index}</Text>
          </View>
        ) : (
          <Text style={styles.counter}>Please select your book first</Text>
        )}
      </View>
    );
  }
}

export default HomePageScreen;
