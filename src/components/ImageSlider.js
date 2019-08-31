import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import image1 from '../images/book.png';
import image2 from '../images/klasik.jpg';
import image3 from '../images/kpss.jpg';
import image4 from '../images/tyt.jpg';
import Slideshow from 'react-native-image-slider-show';

// images: [
//   'http://localhost:8081/src/images/klasik.jpg',
//   'http://localhost:8081/src/images/diger.jpg',
//   'http://localhost:8081/src/images/kpss.jpg',
//   'http://localhost:8081/src/images/tyt.jpg'
// ]
export default class SlideshowTest extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Title 1',
          caption: 'Caption 1',
          url: 'http://localhost:8081/src/images/klasik.jpg',
        }, {
          title: 'Title 2',
          caption: 'Caption 2',
          url: 'http://localhost:8081/src/images/diger.jpg',
        }, {
          title: 'Title 3',
          caption: 'Caption 3',
          url: 'http://localhost:8081/src/images/kpss.jpg',
        }, {
          title: 'Title 4',
          caption: 'Caption 4',
          url: 'http://localhost:8081/src/images/tyt.jpg',
        },
      ],
    };
  } 
  
  render() {
    return (
    <Slideshow 
        dataSource={this.state.dataSource}
        containerStyle={
          {marginTop:15}
        }
        // position={this.state.position}
        // onPositionChanged={position => this.setState({ position })} 
        />
    );
  }
}