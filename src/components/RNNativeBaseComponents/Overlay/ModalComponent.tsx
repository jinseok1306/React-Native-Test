import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Button, Center, Modal, FormControl, Stack, Input, VStack, HStack, Radio } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBModalComponent = () => {        

    const [showModal, setShowModal] = useState(false);

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    const [modalVisible, setModalVisible] = React.useState(false);
    const [size, setSize] = React.useState("md");

    const handleSizeClick = (newSize : any) => {
        setSize(newSize);
        setModalVisible(!modalVisible);
    };

    const [modalVisible2, setModalVisible2] = React.useState(false);
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [modalVisible3, setModalVisible3] = React.useState(false);

    const [placement, setPlacement] = useState(undefined);
    const [open, setOpen] = useState(false);

    const openModal = (placement:any) => {
        setOpen(true);
        setPlacement(placement);
    };

    const [showModal4, setShowModal4] = useState(false);

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>                           
                    <Center>
                        <Button onPress={() => setShowModal(true)}>Button</Button>
                        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                            <Modal.Content maxWidth="400px">
                            <Modal.CloseButton />
                            <Modal.Header>Contact Us</Modal.Header>
                            <Modal.Body>
                                <FormControl>
                                <FormControl.Label>Name</FormControl.Label>
                                <Input />
                                </FormControl>
                                <FormControl mt="3">
                                <FormControl.Label>Email</FormControl.Label>
                                <Input />
                                </FormControl>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button.Group space={2}>
                                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                    setShowModal(false);
                                }}>
                                    Cancel
                                </Button>
                                <Button onPress={() => {
                                    setShowModal(false);
                                }}>
                                    Save
                                </Button>
                                </Button.Group>
                            </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                    </Center>
                    <Text>{"\n"}</Text> 
                    <Text style={styles.subHeader}>Multiple Modals</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Button onPress={() => setShowModal1(true)}>Button</Button>
                        <Modal isOpen={showModal1} onClose={() => setShowModal1(false)} size="lg">
                            <Modal.Content maxWidth="350">
                            <Modal.CloseButton />
                            <Modal.Header>Order</Modal.Header>
                            <Modal.Body>
                                <VStack space={3}>
                                <HStack alignItems="center" justifyContent="space-between">
                                    <Text fontWeight="medium">Sub Total</Text>
                                    <Text color="blueGray.400">$298.77</Text>
                                </HStack>
                                <HStack alignItems="center" justifyContent="space-between">
                                    <Text fontWeight="medium">Tax</Text>
                                    <Text color="blueGray.400">$38.84</Text>
                                </HStack>
                                <HStack alignItems="center" justifyContent="space-between">
                                    <Text fontWeight="medium">Total Amount</Text>
                                    <Text color="green.500">$337.61</Text>
                                </HStack>
                                </VStack>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button flex="1" onPress={() => {
                                setShowModal2(true);
                            }}>
                                Continue
                                </Button>
                            </Modal.Footer>
                            </Modal.Content>
                        </Modal>

                        <Modal isOpen={showModal2} onClose={() => setShowModal2(false)} size="lg">
                            <Modal.Content maxWidth="350">
                            <Modal.CloseButton />
                            <Modal.Header>Select Address</Modal.Header>
                            <Modal.Body>
                                <Radio.Group defaultValue="address1" name="address" size="sm">
                                <VStack space={3}>
                                    <Radio alignItems="flex-start" _text={{
                                    mt: "-1",
                                    ml: "2",
                                    fontSize: "sm"
                                }} value="address1">
                                    4140 Parker Rd. Allentown, New Mexico 31134
                                    </Radio>
                                    <Radio alignItems="flex-start" _text={{
                                    mt: "-1",
                                    ml: "2",
                                    fontSize: "sm"
                                }} value="address2">
                                    6391 Elign St. Celina, Delaware 10299
                                    </Radio>
                                </VStack>
                                </Radio.Group>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button flex="1" onPress={() => {
                                setShowModal3(true);
                            }}>
                                Continue
                                </Button>
                            </Modal.Footer>
                            </Modal.Content>
                        </Modal>

                        <Modal isOpen={showModal3} size="lg" onClose={() => setShowModal3(false)}>
                            <Modal.Content maxWidth="350">
                            <Modal.CloseButton />
                            <Modal.Header>Payment Options</Modal.Header>
                            <Modal.Body>
                                <Radio.Group name="payment" size="sm">
                                <VStack space={3}>
                                    <Radio alignItems="flex-start" _text={{
                                    mt: "-1",
                                    ml: "2",
                                    fontSize: "sm"
                                }} value="payment1">
                                    Cash on delivery
                                    </Radio>
                                    <Radio alignItems="flex-start" _text={{
                                    mt: "-1",
                                    ml: "2",
                                    fontSize: "sm"
                                }} value="payment2">
                                    Credit/ Debit/ ATM Card
                                    </Radio>
                                    <Radio alignItems="flex-start" _text={{
                                    mt: "-1",
                                    ml: "2",
                                    fontSize: "sm"
                                }} value="payment3">
                                    UPI
                                    </Radio>
                                </VStack>
                                </Radio.Group>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button flex="1" onPress={() => {
                                setShowModal1(false);
                                setShowModal2(false);
                                setShowModal3(false);
                            }}>
                                Checkout
                                </Button>
                            </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                    </Center>
                    <Text>{"\n"}</Text> 
                    <Text style={styles.subHeader}>Modal Sizes</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
                            <Modal.Content maxH="212">
                            <Modal.CloseButton onPress={() => {
                                setModalVisible(false);
                                }} />
                            <Modal.Header>Return Policy</Modal.Header>
                            <Modal.Body>
                                <ScrollView>
                                <Text>
                                    Create a 'Return Request' under “My Orders” section of
                                    App/Website. Follow the screens that come up after tapping on
                                    the 'Return’ button. Please make a note of the Return ID that we
                                    generate at the end of the process. Keep the item ready for pick
                                    up or ship it to us basis on the return mode.
                                </Text>
                                </ScrollView>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button.Group space={2}>
                                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                setModalVisible(false);
                                }}>
                                    Cancel
                                </Button>
                                <Button onPress={() => {
                                setModalVisible(false);
                                }}>
                                    Save
                                </Button>
                                </Button.Group>
                            </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                        <Center>
                            <VStack space={4}>
                            {["xs", "sm", "md", "lg", "xl", "full"].map(size => {
                            return <Button onPress={() => handleSizeClick(size)} key={size}>{`Open ${size} Modal`}</Button>;
                            })}
                            </VStack>
                        </Center>
                    </Center>
                    <Text>{"\n"}</Text> 
                    <Text style={styles.subHeader}>intialFocusRef and finalFocusRef Example</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Modal isOpen={modalVisible2} onClose={() => setModalVisible2(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
                            <Modal.Content>
                            <Modal.CloseButton onPress={() => {
                                    setModalVisible2(false);
                                }} />
                            <Modal.Header>Contact Us</Modal.Header>
                            <Modal.Body>
                                <FormControl>
                                <FormControl.Label>Name</FormControl.Label>
                                <Input ref={initialRef} />
                                </FormControl>
                                <FormControl mt="3">
                                <FormControl.Label>Email</FormControl.Label>
                                <Input />
                                </FormControl>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button.Group space={2}>
                                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                    setModalVisible2(false);
                                }}>
                                    Cancel
                                </Button>
                                <Button onPress={() => {
                                    setModalVisible2(false);
                                }}>
                                    Save
                                </Button>
                                </Button.Group>
                            </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                        <HStack space="4" justifyContent="center" alignItems="center">
                            <Button onPress={() => {
                                setModalVisible2(!modalVisible2);
                            }}>
                                Open Modal
                            </Button>
                            <Input w="32" ref={finalRef} placeholder="Enter the OTP" _light={{
                                placeholderTextColor: "blueGray.700"
                            }} _dark={{
                                placeholderTextColor: "blueGray.100"
                            }} />
                        </HStack>
                    </Center>
                    <Text>{"\n"}</Text> 
                    <Text style={styles.subHeader}>Modal with avoidKeyboard</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Modal isOpen={modalVisible3} onClose={() => setModalVisible3(false)} avoidKeyboard justifyContent="flex-end" bottom="4" size="lg">
                            <Modal.Content>
                            <Modal.CloseButton onPress={() => {
                                setModalVisible3(false);
                            }}/>
                            <Modal.Header>Forgot Password?</Modal.Header>
                            <Modal.Body>
                                Enter email address and we'll send a link to reset your password.
                                <FormControl mt="3">
                                <FormControl.Label>Email</FormControl.Label>
                                <Input />
                                </FormControl>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button flex="1" onPress={() => {
                                    setModalVisible3(false);
                                }}>
                                    Proceed
                                </Button>
                            </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                        <VStack space={8} alignItems="center">
                            <Button w="104" onPress={() => {
                                setModalVisible3(!modalVisible3);
                            }}>
                                Open Modal
                            </Button>
                            <Text textAlign="center">
                                Open modal and focus on the input element to see the effect.
                            </Text>
                        </VStack>
                    </Center>
                    <Text>{"\n"}</Text> 
                    <Text style={styles.subHeader}>Modal Placement</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Stack direction={{
                            base: "column",
                            md: "row"
                        }} space={2}>
                            <Button onPress={() => openModal("top")}>Top</Button>
                            <Button onPress={() => openModal("bottom")}>Bottom</Button>
                            <Button onPress={() => openModal("center")}>Center</Button>
                            <Button onPress={() => openModal("left")}>Left</Button>
                            <Button onPress={() => openModal("right")}>Right</Button>
                        </Stack>
                        <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
                            <Modal.Content maxWidth="350" {...styles[placement]}>
                                <Modal.CloseButton onPress={() => {
                                    setOpen(false);
                                    }}/>
                                <Modal.Header>Contact Us</Modal.Header>
                                <Modal.Body>
                                    <FormControl>
                                    <FormControl.Label>Name</FormControl.Label>
                                    <Input />
                                    </FormControl>
                                    <FormControl mt="3">
                                    <FormControl.Label>Email</FormControl.Label>
                                    <Input />
                                    </FormControl>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button.Group space={2}>
                                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                            setOpen(false);
                                        }}>
                                            Cancel
                                        </Button>
                                        <Button onPress={() => {
                                            setOpen(false);
                                        }}>
                                            Save
                                        </Button>
                                    </Button.Group>
                                </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                    </Center>
                    <Text>{"\n"}</Text> 
                    <Text style={styles.subHeader}>Custom Backdrop Modal</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Button onPress={() => setShowModal4(true)}>Button</Button>
                        <Modal isOpen={showModal4} onClose={() => setShowModal4(false)} _backdrop={{
                            _dark: {
                                bg: "coolGray.800"
                            },
                            bg: "warmGray.50"
                        }}>
                            <Modal.Content maxWidth="350" maxH="212">
                                <Modal.CloseButton onPress={() => {
                                    setShowModal4(false);
                                }}/>
                                <Modal.Header>Return Policy</Modal.Header>
                                <Modal.Body>
                                    Create a 'Return Request' under “My Orders” section of App/Website.
                                    Follow the screens that come up after tapping on the 'Return’
                                    button. Please make a note of the Return ID that we generate at the
                                    end of the process. Keep the item ready for pick up or ship it to us
                                    basis on the return mode.
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button.Group space={2}>
                                    <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                        setShowModal4(false);
                                    }}>
                                        Cancel
                                    </Button>
                                    <Button onPress={() => {
                                        setShowModal4(false);
                                    }}>
                                        Save
                                    </Button>
                                    </Button.Group>
                                </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                    </Center>
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
    },
    top: {
        marginBottom: "auto",
        marginTop: 0
    },
    bottom: {
        marginBottom: 0,
        marginTop: "auto"
    },
      left: {
        marginLeft: 0,
        marginRight: "auto"
    },
    right: {
        marginLeft: "auto",
        marginRight: 0
    },
    center: {}   
})


export default NBModalComponent;  