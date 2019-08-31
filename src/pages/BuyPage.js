import React from 'react'  
import {connect} from 'react-redux';   
import { View, Text,ScrollView,Picker,Keyboard } from 'react-native';   
import {fetchBook} from '../../actions/ibsnBook';
import { Button, Input, ButtonGroup,Image,Card,FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'  
import Icon from 'react-native-vector-icons/MaterialIcons';   
import TextInputMask from 'react-native-text-input-mask';
import LoginScreen1 from './BookView';
// import ImagePicker from 'react-native-image-picker'; 


class BuyPage extends React.Component {
    constructor () {
        super()
        this.ibsnText = React.createRef();
        this.state = { 
          selectedIndex: 0,
          new:true,
          ibsnBook:null,
          loadingButton:false,
          title:null,
          simple: '',
          advanced: '',
          ibsn:{ 
            type:'shell',
            cover:null,
            authors:null,
            publishDate:null,
            title:null
          }
        }
        this.updateIndex = this.updateIndex.bind(this)
      }
      
      updateIndex (selectedIndex) {
        this.setState({selectedIndex})
        if(selectedIndex===0){this.setState({new:true})}
        if(selectedIndex===1){
            this.setState({new:false});

            // const options = {
            //     noData:true
            //   }

            // ImagePicker.launchImageLibrary(options, (response) => {
            //     console.log("response",response)
            // });
        }
      }
      
      componentWillReceiveProps( nextProps ){
            nextProps.ibsnBook.fetching===false && this.setState({loadingButton:false})
            if(nextProps.ibsnBook.fetching===false){ 
                let ibsnState=nextProps.ibsnBook.result["ISBN:"+this.ibsnText.current.props.defaultValue]
                let ibsn= Object.assign({}, this.state.ibsn);
                this.state.ibsn.cover=ibsnState.cover.large;
                this.state.ibsn.publishDate=ibsnState.publish_date;
                this.state.ibsn.authors=ibsnState.authors[0].name; 
                this.state.title=ibsnState.title; 
                this.setState({title:ibsnState.title});  
            }
      }
      render () {  
        const buttons = ['ISBN', 'Yükle']
        const { selectedIndex } = this.state
        
        const Component1 = () => {
           return(
            <ScrollView>
            <View style={{flex:1}}>
            <Input ref={this.ibsnText} 
                style={{marginTop:10,color:'white'}}
                placeholder='ISBN'
                defaultValue='9789750719387' 
            /> 
           <Button
                buttonStyle={{margin:10,backgroundColor:'#343434'}}
                loading={this.state.loadingButton}
                disabled={this.state.loadingButton}
                icon={{
                    name: "arrow-right",
                    size: 15,
                    color: "white",
                    type:'font-awesome' 
                }}
                title="Getir"
                onPress={() => { 
                    this.setState({loadingButton:true})
                     this.props.fetchBook(this.ibsnText.current.props.defaultValue);  
                  }}
            />
             
                            
            {this.state.title !== null &&
             
                <View > 
               <LoginScreen1 property={this.state.ibsn}></LoginScreen1>
                </View>
            }
           </View>
           </ScrollView>
           )
        }
        const Component2 = () => <Text>World</Text> 
        return (
            <View>
                
                <ButtonGroup 
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 50}}
                />
               {this.state.new===true ?  <Component1/> : <Component2/>}
            
            </View> 
        )
      }
  
}  
const mapDispatchToProps={
    fetchBook
  }
const mapStateToProps = ({ibsnBook}) => {   
   return{
    ibsnBook 
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(BuyPage);