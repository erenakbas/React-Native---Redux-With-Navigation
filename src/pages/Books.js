import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {fetchProducts} from '../../actions/product';
import {connect} from 'react-redux'; 
import MyCard from '../components/MyCard.js';  

class Books extends Component {
  
  componentDidMount() {
    if(this.props.product.result <=0){ 
      this.props.fetchProducts();
    } 
  }
  render() {    
    return (
      <View> 
         <View style={{flex:1, backgroundColor:'#343434', padding:15, marginTop:15}}>
              <Text style={{textAlign:'center', fontSize:24, color:'white'}}>Öne Çıkanlar</Text>
        </View>
        <View style={{flexWrap: "wrap",flexDirection: "row"}}>    
          {this.props.product.result.map(r=><MyCard key={r.id}  data={r} handle={{click:this.props.level.fnc}}/>)}  
        </View>
        <View style={{flex:1, backgroundColor:'#343434', padding:15, marginTop:15}}>
              <Text style={{textAlign:'center', fontSize:24, color:'white'}}>Yeni Eklenenler</Text>
        </View>
        <View style={{flexWrap: "wrap",flexDirection: "row"}}>    
          {this.props.product.result.map(r=><MyCard key={r.id}  data={r} handle={{click:this.props.level.fnc}}/>)} 
        </View>
      </View>
    );
  }
}

const mapDispatchToProps={
    fetchProducts
}
const mapStateToProps = ({product}) => {  
    return{
        product 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Books);
