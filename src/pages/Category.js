
import React, { Component } from 'react';   
import { View, Text, Image } from 'react-native' 
import { ListItem } from 'react-native-elements'

export default class SlideshowTest extends Component {
   

    render(){ 
        const list = [
            {
              title: 'Edebiyat',
              icon: 'book',
              color:'#4a4b4b'
            },
            {
                title: 'Çocuk ve Gençlik',
                icon: 'book',
                color:'#82d6d8'
              },
              {
                title: 'Eğitim Başvuru',
                icon: 'book',
                color:'#ff9e00'
              },
              {
                title: 'Din - Mitoloji',
                icon: 'book',
                color:'#fd3b00'
              },
              {
                title: 'Foreign Languages',
                icon: 'book',
                color:'#0f3766'
              },
              {
                title: 'Ders / Sınav Kitapları',
                icon: 'book',
                color:'#0b6623'
              },
              {
                title: 'Sanat - Tasarım',
                icon: 'book',
                color:'#890b32'
              },
              {
                title: 'Felsefe',
                icon: 'book',
                color:'#b6d38c'
              },
              {
                title: 'Çizgi Roman',
                icon: 'book',
                color:'#e48282'
              },
              {
                title: 'Bilim',
                icon: 'book',
                color:'#d0d0d0'
              }
          ]
        return(
            <View>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon, color:item.color, type:'font-awesome' }}
                />
              ))
            }
          </View>
        )
    }

}
