import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import Menu from './Menu';
import MapList from './MapList';
import SplashScreen from './SplashScreen';
import ReduxScreen from './ReduxScreen';
import SQLiteScreen from './SQLiteScreen';
import SQLiteAddScreen from './SQLiteAddScreen';
import * as RNElementComponent  from './RNElementComponents';
import * as RNCoreCompont from './RNCoreComponents';
import * as RNNativeBaseComponent from './RNNativeBaseComponents';

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
        SQLiteAddScreen: {screen: SQLiteAddScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'SQLite Add',
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
        ModalComponent: {screen: RNCoreCompont.ModalComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Modal',
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
        PressableComponent: {screen: RNCoreCompont.PressableComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Pressable',
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
        RefreshControlComponent: {screen: RNCoreCompont.RefreshControlComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'RefreshControl',
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
        ScrollViewComponent: {screen: RNCoreCompont.ScrollViewComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'ScrollView',
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
        SectionListComponent: {screen: RNCoreCompont.SectionListComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'SectionList',
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
        StatusBarComponent: {screen: RNCoreCompont.StatusBarComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'StatusBar',
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
        CoreSwitchComponent: {screen: RNCoreCompont.SwitchComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Switch',
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
        TextComponent: {screen: RNCoreCompont.TextComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Text',
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
        TextInputComponent: {screen: RNCoreCompont.TextInputComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'TextInput',
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
        TouchableHighlightComponent: {screen: RNCoreCompont.TouchableHighlightComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'TouchableHighlight',
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
        TouchableOpacityComponent: {screen: RNCoreCompont.TouchableOpacityComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'TouchableOpacity',
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
        TouchableWithoutFeedbackComponent: {screen: RNCoreCompont.TouchableWithoutFeedbackComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'TouchableWithoutFeedback',
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
        ViewComponent: {screen: RNCoreCompont.ViewComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'View',
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
        RNNativeBaseMenu: {screen: RNNativeBaseComponent.RNNativeBaseMenu,
            navigationOptions: ({ navigation }) => ({
                title: 'NativeBase',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBBoxComponent: {screen: RNNativeBaseComponent.NBBoxComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Box',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBCenterComponent: {screen: RNNativeBaseComponent.NBCenterComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Center',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBContainerComponent: {screen: RNNativeBaseComponent.NBContainerComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Container',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBFlexComponent: {screen: RNNativeBaseComponent.NBFlexComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Flex',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBHStackComponent: {screen: RNNativeBaseComponent.NBHStackComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'HStack',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBStackComponent: {screen: RNNativeBaseComponent.NBStackComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Stack',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBVStackComponent: {screen: RNNativeBaseComponent.NBVStackComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'VStack',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBZStackComponent: {screen: RNNativeBaseComponent.NBZStackComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'ZStack',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBButtonComponent: {screen: RNNativeBaseComponent.NBButtonComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Button',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBPressableComponent: {screen: RNNativeBaseComponent.NBPressableComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Pressable',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBCheckBoxComponent: {screen: RNNativeBaseComponent.NBCheckBoxComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'CheckBox',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBFormControlComponent: {screen: RNNativeBaseComponent.NBFormControlComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'FormControl',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBIconButtonComponent: {screen: RNNativeBaseComponent.NBIconButtonComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'IconButton',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBInputComponent: {screen: RNNativeBaseComponent.NBInputComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Input',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBLinkComponent: {screen: RNNativeBaseComponent.NBLinkComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Link',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBRadioComponent: {screen: RNNativeBaseComponent.NBRadioComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Radio',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBSelectComponent: {screen: RNNativeBaseComponent.NBSelectComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Select',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBSwitchComponent: {screen: RNNativeBaseComponent.NBSwitchComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Switch',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBTextAreaComponent: {screen: RNNativeBaseComponent.NBTextAreaComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'TextArea',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBAlertComponent: {screen: RNNativeBaseComponent.NBAlertComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Alert',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBProgressComponent: {screen: RNNativeBaseComponent.NBProgressComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Progress',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBSkeletonComponent: {screen: RNNativeBaseComponent.NBSkeletonComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Skeleton',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBSpinnerComponent: {screen: RNNativeBaseComponent.NBSpinnerComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Spinner',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBToastComponent: {screen: RNNativeBaseComponent.NBToastComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Toast',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
                },              
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },
        NBTextComponent: {screen: RNNativeBaseComponent.NBTextComponent,
            navigationOptions: ({ navigation }) => ({
                title: 'Text',
                headerStyle: {
                    backgroundColor: 'rgb(29,36,102)',                        
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