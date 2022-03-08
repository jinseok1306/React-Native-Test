import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import Menu from './Menu';
import MapList from './MapList';

const AuthStack = createStackNavigator(
    {
        Menu: {screen: Menu, 
                navigationOptions: ({ navigation }) => ({
                    title: '메뉴',      
                    headerStyle: {
                        backgroundColor: '#f4511e',                        
                    },              
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center',
                    headerTitleContainerStyle: {                         
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingRight: 10,
                        paddingLeft: 10,                                           
                    }, 
            }),
        },
        LoginScreen: {screen: LoginScreen,
                navigationOptions: ({ navigation }) => ({
                    title: 'Login',                    
            }),
        },
        HomeScreen: {screen: HomeScreen,
                navigationOptions: ({ navigation }) => ({
                    title: 'Home',
        }),
        },
        MapList: {screen: MapList,
                navigationOptions: ({ navigation }) => ({
                    title: 'MapList 예제',
        }),
        },
    },
    {
        initialRouteName: 'Menu'
    }
);

// 최상단 네비게이터
const AppNavigator = createSwitchNavigator(
    {
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth',
    }
);

export default createAppContainer(AppNavigator);