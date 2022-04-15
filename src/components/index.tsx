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
                title: 'React Native Elements',
                headerStyle: {
                    backgroundColor: 'rgb(46,117,223)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
            }),
        }, 
        AirbnbRatingComponent: {screen: component.AirbnbRatingComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'AirbnbRating',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        AvatarComponent: {screen: component.AvatarComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Avatar',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        BadgeComponent: {screen: component.BadgeComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Badge',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },         
        BottomSheetComponent: {screen: component.BottomSheetComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'BottomSheet',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        ButtonComponent: {screen: component.ButtonComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Button',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        ButtonGroupComponent: {screen: component.ButtonGroupComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'ButtonGroup',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },         
        CardComponent: {screen: component.CardComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Card',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        CheckBoxComponent: {screen: component.CheckBoxComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'CheckBox',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        ChipComponent: {screen: component.ChipComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Chip',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        DialogComponent: {screen: component.DialogComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Dialog',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        DividerComponent: {screen: component.DividerComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Divider',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        FABComponent: {screen: component.FABComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'FAB',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        HeaderComponent: {screen: component.HeaderComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Header',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        IconComponent: {screen: component.IconComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Icon',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
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