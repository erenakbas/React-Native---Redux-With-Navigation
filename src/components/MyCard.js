import React, { Component } from 'react';  
import book from '../images/book.png';  
import {actions} from '../../actions/currentBook';
import {connect} from 'react-redux';   
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'    
class MyCard extends Component { 
 
  render() {       
    fnc=()=>{
      const detail=this.props.data.content;
      this.props.actions({detail});
      this.props.handle.click()
    } 
    return (   
            <View style={{width:'50%'}}>
            <Card 
              title={this.props.data.name}
              image={book}
              imageStyle={{height:80}}
              >
              <Text style={{marginBottom: 10}}>
                Amazon Yayın Evi <Text style={{color:'green'}}>9.90₺</Text>
              </Text>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between',marginBottom:5 }}>
                <View style={{ flex: 1,
                      alignItems: 'flex-start'}}>
                  <Icon 
                    style={{
                      width:'50%',
                      float:'right'
                    }}       
                    name='shopping-basket'
                    type='font-awesome'/>
                </View>
                <View style={{ flex: 1,
                      alignItems: 'flex-end' }}>
                  <Icon 
                    style={{
                      width:'50%',
                      float:'right'
                    }}       
                    name='heart'
                    type='font-awesome'/>
                </View> 
              </View> 
              <Button
                icon={<Icon name='search' color='#ffffff' />} 
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,
                  backgroundColor:'#343434'}}
                title='Detay'
                onPress={fnc}
                />
            </Card>
        </View>
    
    );
  }
}
 
const mapDispatchToProps={
  actions
}
const mapStateToProps = (state) => {   
  return{
      state 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyCard);