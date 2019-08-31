import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-elements'; 
import { LinearGradient } from "../components/LinearGradient";
import TextInputMask from 'react-native-text-input-mask';
import book from '../images/book.png';  

const SCREEN_WIDTH = Dimensions.get('window').width;

const IMAGE_SIZE = SCREEN_WIDTH - 80; 

class CustomButton extends Component {
  constructor() {
    super();

    this.state = {
      selected: false,
    };
  }

  componentDidMount() {
    const { selected } = this.props;

    this.setState({
      selected,
    });
  }

  render() {
    const { title } = this.props;
    const { selected } = this.state;

    return (
      <Button
        title={title}
        titleStyle={{ fontSize: 15, color: 'white', fontFamily: 'regular' }}
        buttonStyle={
          selected
            ? {
              backgroundColor: 'rgba(213, 100, 140, 1)',
              borderRadius: 100,
              width: 127,
            }
            : {
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 30,
              width: 127,
              backgroundColor: 'transparent',
            }
        }
        containerStyle={{ marginRight: 10 }}
        onPress={() => this.setState({ selected: !selected })}
      />
    );
  }
}

export default class LoginScreen1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  } 

  render() {
    return (
        <ScrollView>
        <View style={{ flex: 1, backgroundColor: '#343434',marginBottom:30 }}>
            <View style={styles.statusBar} />
            <View style={styles.navBar}>
              <Text style={styles.nameHeader}>{this.props.property.title}</Text>
            </View>
            <ScrollView style={{ flex: 1 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
               {this.props.property.type === 'display' ? <Image
                    
                  source={book}
                  style={{
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE,
                    borderRadius: 10,
                  }}
                /> :
                <Image
                    
                  source={{
                    uri:
                      this.props.property.cover,
                  }}
                  style={{
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE,
                    borderRadius: 10,
                  }}
               /> }
              </View> 
               <View
                style={{
                  flex: 1,
                  marginTop: 20,
                  width: SCREEN_WIDTH - 80,
                  marginLeft: 40,
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    fontSize: 15,
                    color: 'white',
                    fontFamily: 'regular',
                  }}
                >
                  Yazar:{this.props.property.authors} - Yayımlanma Yılı: {this.props.property.publishDate}
                </Text>
              </View>
              <View style={{ flex: 1, marginTop: 30 }}>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 15,
                    color: 'rgba(216, 121, 112, 1)',
                    fontFamily: 'regular',
                    marginLeft: 40,
                  }}
                >
                  Kategoriler
                </Text>
                <View style={{ flex: 1, width: SCREEN_WIDTH }}>
                  <ScrollView
                    style={{ flex: 1 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'column',
                        height: 170,
                        marginLeft: 40,
                        marginRight: 10,
                      }}
                    >
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <CustomButton title="İkinci El" />
                        <CustomButton title="Edebiyat" selected={true} />
                        <CustomButton title="Çocuk" />
                        <CustomButton title="Eğitim" selected={true} />
                        <CustomButton title="Din-Mitoloji" />
                      </View>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <CustomButton title="Psikoloji" />
                        <CustomButton title="Ders" selected={true} />
                        <CustomButton title="Sanat" selected={true} />
                        <CustomButton title="Feslefe" />
                      </View>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <CustomButton title="Çizgi Roman" selected={true} />
                        <CustomButton title="Bilim" /> 
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View>
              <View style={{ flex: 1, marginTop: 30 }}>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 15,
                    color: 'rgba(216, 121, 112, 1)',
                    fontFamily: 'regular',
                    marginLeft: 40,
                  }}
                >
                  Adres Bilgilerim
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: 20,
                    marginHorizontal: 30,
                  }}
                >
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.infoTypeLabel}>İl:</Text>
                      <Text style={styles.infoTypeLabel}>İlçe:</Text>
                      <Text style={styles.infoTypeLabel}>Mahalle:</Text>
                      <Text style={styles.infoTypeLabel}>No:</Text>
                      <Text style={styles.infoTypeLabel}>Telefon:</Text>
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                      <Text style={styles.infoAnswerLabel}>İstanul</Text>
                      <Text style={styles.infoAnswerLabel}>Pendik</Text>
                      <Text style={styles.infoAnswerLabel}>Yenişehir</Text>
                      <Text style={styles.infoAnswerLabel}>13</Text>
                      <Text style={styles.infoAnswerLabel}>0539-795-0196</Text>
                    </View>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    
                    <View style={{ flex: 1, marginLeft: 10, marginRight: -20 }}> 
                    
                    <Text style={styles.infoAnswerLabel}
                    
                    onPress={()=>{
                        this.input.focus(); 
                  }}
                    >Fiayt İçin Tıklayın </Text>
                      <TextInputMask style={{color:'white',padding:0,margin:0,marginTop:-5}}
                                refInput={ref => { this.input = ref }}
                                placeholder=''
                                onChangeText={(formatted, extracted) => {
                                    console.log(formatted) // +1 (123) 456-78-90
                                    console.log(extracted) // 1234567890
                                }}
                                mask={"₺ [990].[99]"}
                                />  
                    </View>
                  </View>
                </View>
              </View>
              {this.props.property.type !== 'display' && <Button
                containerStyle={{ marginVertical: 20 }}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                buttonStyle={{
                  height: 55,
                  width: SCREEN_WIDTH,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }} 
                ViewComponent={LinearGradient}
                title="SAT"
                titleStyle={{
                  fontFamily: 'regular',
                  fontSize: 20,
                  color: 'white',
                  textAlign: 'center',
                }}
                onPress={() => console.log('Message Theresa')}
                activeOpacity={0.5}
            /> }
              <Text></Text>
            </ScrollView>
          </View>
        </ScrollView>     
      
  
    );
  }
}
const styles = StyleSheet.create({
  statusBar: {
    height: 10,
  },
  navBar: {
    height: 60,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignContent: 'center',
  },
  nameHeader: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  infoTypeLabel: {
    fontSize: 15,
    textAlign: 'right',
    color: 'rgba(126,123,138,1)',
    fontFamily: 'regular',
    paddingBottom: 10,
  },
  infoAnswerLabel: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'regular',
    paddingBottom: 10,
  },
});