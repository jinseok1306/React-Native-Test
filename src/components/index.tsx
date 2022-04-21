import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import Menu from './Menu';
import MapList from './MapList';
import SplashScreen from './SplashScreen';
import ReduxScreen from './ReduxScreen';
import SQLiteScreen from './SQLiteScreen';
import * as RNElementComponent  from './RNElementComponents';
import * as RNCoreCompont from './RNCoreComponents';

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
        SQLiteScreen: {screen: SQLiteScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'SQLite 예제',
                headerStyle: {
                    backgroundColor: 'rgb(0,150,0)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center', 
            }),
        },  
        CoreMenu: {screen: RNCoreCompont.RNCoreMenu,
            navigationOptions: ({ navigation }) => ({
                title: 'Core Components',
                headerStyle: {
                    backgroundColor: 'rgba(199, 43, 98, 1)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
            }),
        },
        ActivityIndicatorComponent: {screen: RNCoreCompont.ActivityIndicatorComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'ActivityIndicator',
                headerStyle: {
                    backgroundColor: 'rgba(199, 43, 98, 1)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
            }),
        },
        CoreButtonComponent: {screen: RNCoreCompont.ButtonComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Button',
                headerStyle: {
                    backgroundColor: 'rgba(199, 43, 98, 1)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
            }),
        },
        FlatListComponent: {screen: RNCoreCompont.FlatListComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'FlatList',
                headerStyle: {
                    backgroundColor: 'rgba(199, 43, 98, 1)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
            }),
        },
        CoreImageComponent: {screen: RNCoreCompont.ImageComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Image',
                headerStyle: {
                    backgroundColor: 'rgba(199, 43, 98, 1)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
            }),
        },
        ImageBackgroundComponent: {screen: RNCoreCompont.ImageBackgroundComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'ImageBackground',
                headerStyle: {
                    backgroundColor: 'rgba(199, 43, 98, 1)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
            }),
        },
        KeyboardAvoidingViewComponent: {screen: RNCoreCompont.KeyboardAvoidingViewComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'KeyboardAvoidingView',
                headerStyle: {
                    backgroundColor: 'rgba(199, 43, 98, 1)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
            }),
        },
        RNElementMenu: {screen: RNElementComponent.RNElementMenu,
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
        AirbnbRatingComponent: {screen: RNElementComponent.AirbnbRatingComponent,
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
        AvatarComponent: {screen: RNElementComponent.AvatarComponent,
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
        BadgeComponent: {screen: RNElementComponent.BadgeComponent,
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
        BottomSheetComponent: {screen: RNElementComponent.BottomSheetComponent,
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
        ButtonComponent: {screen: RNElementComponent.ButtonComponent,
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
        ButtonGroupComponent: {screen: RNElementComponent.ButtonGroupComponent,
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
        CardComponent: {screen: RNElementComponent.CardComponent,
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
        CheckBoxComponent: {screen: RNElementComponent.CheckBoxComponent,
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
        ChipComponent: {screen: RNElementComponent.ChipComponent,
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
        DialogComponent: {screen: RNElementComponent.DialogComponent,
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
        DividerComponent: {screen: RNElementComponent.DividerComponent,
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
        FABComponent: {screen: RNElementComponent.FABComponent,
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
        HeaderComponent: {screen: RNElementComponent.HeaderComponent,
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
        IconComponent: {screen: RNElementComponent.IconComponent,
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
        ImageComponent: {screen: RNElementComponent.ImageComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Image',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        InputComponent: {screen: RNElementComponent.InputComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Input',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        LinearProgressComponent: {screen: RNElementComponent.LinearProgressComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'LinearProgress',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        ListItemComponent: {screen: RNElementComponent.ListItemComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'ListItem',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        OverlayComponent: {screen: RNElementComponent.OverlayComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Overlay',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        PricingCardComponent: {screen: RNElementComponent.PricingCardComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'PricingCard',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        SearchBarComponent: {screen: RNElementComponent.SearchBarComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'SearchBar',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        SliderComponent: {screen: RNElementComponent.SliderComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Slider',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        SocialIconComponent: {screen: RNElementComponent.SocialIconComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'SocialIcon',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        SpeedDialComponent: {screen: RNElementComponent.SpeedDialComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'SpeedDial',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        SwitchComponent: {screen: RNElementComponent.SwitchComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Switch',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        TabComponent: {screen: RNElementComponent.TabComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Tab',
                headerStyle: {
                    backgroundColor: 'rgb(39,41,43)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        }, 
        TileComponent: {screen: RNElementComponent.TileComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Tile',
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