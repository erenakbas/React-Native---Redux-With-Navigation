import React, {Fragment} from 'react';
import { 
  ScrollView,
  View, 
  StatusBar, 
  Text
} from 'react-native';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer/rootReducer';
import reduxPromise from 'redux-promise-middleware';
import logger from 'redux-logger';
import {Provider} from 'react-redux'; 
import Books from './src/pages/Books';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'; 
import {createMaterialTopTabNavigator} from 'react-navigation'; 
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import Detail from './src/pages/Detail';
import BuyPage from './src/pages/BuyPage';
import CategoryPage from './src/pages/Category';
import MyHeader from './src/pages/Header'; 
import ImageSlider from './src/components/ImageSlider'
import { createStackNavigator, createAppContainer } from "react-navigation"; 

const store = createStore(
    rootReducer, 
      applyMiddleware(reduxPromise,thunk,thunkMiddleware,logger)  
);


class Level1 extends React.Component { 
 
  render(){
    const { navigation } = this.props;
    handleClick=() =>{ 
      navigation.navigate("DetailPage");
    } 
    return (
      <Fragment> 
      <StatusBar backgroundColor="#343434" barStyle="light-content" />  
        <ScrollView>
          <View> 
            <ImageSlider style={{padding:20, borderRadius:5 }}/>
            <Books level={{level:1,fnc:handleClick}}/> 
          </View>  
        </ScrollView> 
      </Fragment>
    )
  } 
}; 
const DetailPage = () => {
  return (
    <Fragment>   
        <View style={{backgroundColor:"#00688b", flex:1}}> 
          <Detail level={{level:3}}/> 
        </View>    
    </Fragment>
  );
}; 
 
const commonScreens = {
  DetailPage: {
    screen: DetailPage, 
    navigationOptions: {
      title: 'Geri Dön', 
      header:null
    },
  }
}; 
const Level1Stack = createStackNavigator({
  Level1: {
    screen: Level1,
     navigationOptions: {
      title: 'Page Name', 
      header:null
    },
  },
  ...commonScreens
});
const OnePage = () => { 
  return (
    <Fragment>   
        <View style={{backgroundColor:"#00688b", flex:1}}> 
          <Text>One</Text> 
        </View>    
    </Fragment>
  );
};   
const RootStack = createMaterialTopTabNavigator(  {
    home:{
    screen:Level1Stack,
    navigationOptions:{
      tabBarLabel:'Anasayfa',
      tabBarIcon:({tintColor})=>(
        <Icon name="cloud-upload" color={tintColor} size={24} />
      )
    }
  },
  category:{
    screen:CategoryPage,
    navigationOptions:{
      tabBarLabel:'Kategoriler',
      tabBarIcon:({tintColor})=>(
        <Icon name="shopping-cart" color={tintColor} size={24} />
      )
    }
  }
},
{
  tabBarOptions: {
    
    activeTintColor: '#314d6d',
    scrollEnabled:false,
    inactiveTintColor: '#3f3f3f',
    labelStyle: { fontWeight: "bold" },
    //I would add this here to change background color
    //but I don't know how to access my theme color from here...
    style: { backgroundColor: "white" },
    indicatorStyle:{
      backgroundColor:'#314d6d',
      height:5
    },
  }
}
);

const WatchRoute = createStackNavigator({
  watchTopTabNavigator: RootStack, 
},
{ 
  defaultNavigationOptions: {
    headerTitle:<MyHeader/>,
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold', 
    },
  },
});

const TabNavigator = createMaterialBottomTabNavigator(  {
  Level1:{
    screen:WatchRoute,
    navigationOptions:{
      tabBarLabel:'Anasayfa',
      tabBarIcon:({tintColor})=>(
        <Icon name="home" color={tintColor} size={24} />
      )
    },
  },
  Level2:{
    screen:BuyPage,
    navigationOptions:{
      tabBarLabel:'Sat',
      tabBarIcon:({tintColor})=>(
        <Icon name="cloud-upload" color={tintColor} size={24} />
      )
    }
  },
  Level3:{
    screen:OnePage,
    navigationOptions:{
      tabBarLabel:'Sepetim',
      tabBarIcon:({tintColor})=>(
        <Icon name="shopping-cart" color={tintColor} size={24} />
      )
    }
  }
},{
  initiaalRoutName:'Level1',
  activeTintColor: '#314d6d',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: 'white' },
})
 


const App = createAppContainer(TabNavigator);

const RNRedux = () => (
    <Provider store={store}>
      <App> 
      </App> 
    </Provider>
  )
 
export default RNRedux;  