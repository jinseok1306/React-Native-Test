import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Button, Center, Toast, VStack, Box, Stack, Alert, HStack, IconButton, CloseIcon } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBToastComponent = () => {        
    const id = "test-toast";
    
    const toastIdRef = React.useRef();
  
    function close() {
      if (toastIdRef.current) {
        Toast.close(toastIdRef.current);
      }
    }
  
    function closeAll() {
      Toast.closeAll();
    }
  
    function addToast() {
      toastIdRef.current = Toast.show({
        title: "Hi, Nice to see you"
      });
    }

    const ToastDetails = [{
        title: "Account verified",
        variant: "solid",
        description: "Thanks for signing up with us.",
        isClosable: true
      }, {
        title: "Something went wrong",
        variant: "subtle",
        description: "Please create a support ticket from the support page"
      }, {
        title: "Network connection restored",
        variant: "left-accent",
        description: "This is to inform you that your network connectivity is restored",
        isClosable: true
      }, {
        title: "Invalid email address",
        variant: "top-accent",
        description: "Please enter a valid email address"
      }, {
        title: "Invalid email address",
        variant: "outline",
        description: "Please enter a valid email address"
    }];

    const ToastAlert = ({
        id,
        status,
        variant,
        title,
        description,
        isClosable,
        ...rest
      } 
      ) => <Alert maxWidth="100%" alignSelf="center" flexDirection="row" status={status ?? "info"} variant={variant} {...rest}>
          <VStack space={1} flexShrink={1} w="100%">
            <HStack flexShrink={1} alignItems="center" justifyContent="space-between">
              <HStack space={2} flexShrink={1} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" flexShrink={1} color={variant === "solid" ? "lightText" : variant !== "outline" ? "darkText" : null}>
                  {title}
                </Text>
              </HStack>
              {isClosable ? <IconButton variant="unstyled" icon={<CloseIcon size="3" />} _icon={{
              color: variant === "solid" ? "lightText" : "darkText"
            }} onPress={() => Toast.close(id)} /> : null}
            </HStack>
            <Text px="6" color={variant === "solid" ? "lightText" : variant !== "outline" ? "darkText" : null}>
              {description}
            </Text>
          </VStack>
        </Alert>;

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>    
                    <Center>
                        <Button onPress={() => Toast.show({
                            description: "Hello world"
                        })}>
                            Show Toast
                        </Button>
                    </Center>
                    <Text>{"\n"}</Text>    
                    <Text style={styles.subHeader}>Position</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>    
                    <Center>
                        <VStack space={2}>
                            <Button onPress={() => Toast.show({
                                title: "Hello world",
                                placement: "bottom"
                            })}>
                                Bottom
                            </Button>

                            <Button onPress={() => Toast.show({
                                title: "Hello world",
                                placement: "top"
                            })}>
                                Top
                            </Button>

                            <Button onPress={() => Toast.show({
                                title: "Hello world",
                                placement: "top-left"
                            })}>
                                Top left
                            </Button>

                            <Button onPress={() => Toast.show({
                                title: "Hello world",
                                placement: "top-right"
                            })}>
                                Top right
                            </Button>

                            <Button onPress={() => Toast.show({
                                title: "Hello world",
                                placement: "bottom-left"
                            })}>
                                Bottom left
                            </Button>

                            <Button onPress={() => Toast.show({
                                title: "Hello world",
                                placement: "bottom-right"
                            })}>
                                Bottom right
                            </Button>
                        </VStack>
                    </Center>
                    <Text>{"\n"}</Text>    
                    <Text style={styles.subHeader}>Custom component</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>  
                    <Center>
                        <Button onPress={() => {
                            Toast.show({
                                render: () => {
                                return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                                        Hello! Have a nice day
                                        </Box>;
                                }
                            });
                        }}>
                            Custom Toast
                        </Button>
                    </Center>
                    <Text>{"\n"}</Text>    
                    <Text style={styles.subHeader}>Closing Toasts</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Stack direction={{
                            base: "column",
                            md: "row"
                        }} space={2}>
                            <Button onPress={addToast}>Toast</Button>
                            <Button onPress={close} variant="outline">
                                Close last toast
                            </Button>
                            <Button onPress={closeAll} variant="outline">
                                Close all toasts
                            </Button>
                        </Stack>
                    </Center>
                    <Text>{"\n"}</Text>    
                    <Text style={styles.subHeader}>Status & Variant Recipes</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <VStack space={2}>
                            {ToastDetails.map(item => <Button onPress={() => Toast.show({
                            render: ({
                            id
                            }) => {
                            return <ToastAlert id={id} {...item} />;
                            }
                        })}>
                                {item.variant}
                            </Button>)}
                        </VStack>
                    </Center>
                    <Text>{"\n"}</Text>    
                    <Text style={styles.subHeader}>Preventing Duplicate Toasts</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Button onPress={() => {
                            if (!Toast.isActive(id)) {
                                Toast.show({
                                id,
                                title: "Hey! You can't create a duplicate toast"
                                });
                            }
                        }}>
                            Click me!
                        </Button>
                    </Center>
                    <Text>{"\n"}</Text>    
                    <Text style={styles.subHeader}>Standalone Toast</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Button onPress={() => Toast.show({
                            title: "Hello world"
                        })}>
                            Show Toast
                        </Button>
                    </Center>
                    <Text>{"\n"}</Text> 
                </ScrollView>                                                         
            </SafeAreaView>   
        </NativeBaseProvider>                                                                                                                      
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },  
    subHeader: {        
        color : "#1D2466",
        textAlign : "center",
        paddingVertical : 5,      
        marginTop : 10,  
        marginBottom : 10,
        fontWeight : "bold",        
    }    
})


export default NBToastComponent;  