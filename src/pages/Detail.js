import React from 'react'
import book from '../images/book.png';  
import { View,ScrollView, Text } from 'react-native';  
import {connect} from 'react-redux';  
import { Card, ListItem, Button, Icon } from 'react-native-elements' 
import Uploaded from './Upload'
import SlidingUpPanel from 'rn-sliding-up-panel';

class Detail extends React.Component {
   constructor(props) {
      super(props);
      // Don't call this.setState() here!
      this.state = {
         changeCount:0
    }; 
    } 
   render(){   
      const styles = {
      container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
      }
    } 
      return (
        <Uploaded></Uploaded> 
      )
   }
  
}  
const mapStateToProps = ({currentBook}) => {   
   return{
      currentBook 
   }
}

export default connect(mapStateToProps)(Detail);