import React from 'react'

import book from '../images/book.png';  
import {Text, View, Dimensions, Image, Animated,ImageBackground} from 'react-native'
import { Card, ListItem, Button, Icon,Rating } from 'react-native-elements' 
import LoginScreen1 from './BookView';


import SlidingUpPanel from 'rn-sliding-up-panel'

const {height} = Dimensions.get('window')

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding:5
  },
  panel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative'
  },
  panelHeader: {
    height: 45,
    backgroundColor: '#343434',
    alignItems: 'center',
    justifyContent: 'center'
  },
  favoriteIcon: {
    position: 'absolute',
    top: -24,
    right: 24,
    backgroundColor: '#2b8a3e',
    width: 48,
    height: 48,
    padding: 8,
    borderRadius: 24,
    zIndex: 1
  }
}

class BottomSheet extends React.Component {
  constructor () {
    super() 
    this.state = { 
      advanced: '',
      ibsn:{ 
        type:'display',
        cover:'',
        authors:'Yazar',
        publishDate:'2011',
        title:'Title'
      }
    } 
  }

  static defaultProps = {
    draggableRange: {
      top: height / 1.75,
      bottom: 150
    }
  }

  _draggedValue = new Animated.Value(120)

  render() {
    const {top, bottom} = this.props.draggableRange

    const draggedValue = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    const transform = [{scale: draggedValue}]

    const list = [
        {
          name: 'Amazon Yayın Evi',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Üsküdar/İstanbul'
        },
        {
          name: 'ABC Yayın Evi',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Kadıköy İstanbul'
        },
        {
            name: 'Amazon Yayın Evi',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Üsküdar/İstanbul'
          },
          {
            name: 'ABC Yayın Evi',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Kadıköy İstanbul'
          }
      ]
      
    return (
      <View style={styles.container}>
        <View style={{marginBottom:80}}> 
          <LoginScreen1 property={this.state.ibsn}></LoginScreen1>
          <Text></Text>
        </View>
     
        <SlidingUpPanel
          showBackdrop={false}
          ref={c => (this._panel = c)}
          draggableRange={this.props.draggableRange}
          animatedValue={this._draggedValue}>
          <View style={styles.panel}> 
            <View style={styles.panelHeader}>
              <Text style={{color: '#FFF'}}>Tüm Satıcılar İçin Kaydırın</Text>
            </View>
            <View style={styles.container}>
               <View>
                {
                    list.map((l, i) => (
                    <ListItem
                        key={i}
                        leftAvatar={{ source: { uri: l.avatar_url } }}
                        title={l.name}
                        subtitle={l.subtitle}
                        rightTitle={'9.90₺'}
                    />
                    ))
                }
                </View>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    )
  }
}

export default BottomSheet