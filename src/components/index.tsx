import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import Menu from './Menu';
import MapList from './MapList';
import SplashScreen from './SplashScreen';
import ReduxScreen from './ReduxScreen';
import * as component  from './componentExample';

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
        ReduxScreen: {screen: ReduxScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Redux 테스트 예제',
            }),
        },
        MapList: {screen: MapList,
                navigationOptions: ({ navigation }) => ({
                    title: 'MapList 예제',
            }),
        },     
        SplashScreen: {screen: SplashScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'SplashScreen 예제',
                headerTransparent: true,
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                //headerShown: false,  // 헤더 삭제 코드    
            }),
        },      
        CoreMenu: {screen: component.CoreMenu,
            navigationOptions: ({ navigation }) => ({
                title: '컴포넌트 예제',
            }),
        }, 
        BottomSheetComponent: {screen: component.BottomSheetComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'BottomSheet',
            }),
        }, 
        ButtonComponent: {screen: component.ButtonComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Button',
            }),
        }, 
        ButtonGroupComponent: {screen: component.ButtonGroupComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'ButtonGroup',
            }),
        }, 
        BadgeComponent: {screen: component.BadgeComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Badge',
            }),
        }, 
        AirbnbRatingComponent: {screen: component.AirbnbRatingComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'AirbnbRating',
            }),
        }, 
        AvatarComponent: {screen: component.AvatarComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Avatar',
            }),
        }, 
        CardComponent: {screen: component.CardComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Card',
            }),
        }, 
        CheckBoxComponent: {screen: component.CheckBoxComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'CheckBox',
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