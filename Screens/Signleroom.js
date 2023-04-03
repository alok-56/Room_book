import React, { useState, useEffect } from "react";
import { View, ToastAndroid, Text, Modal, ImageBackground, FlatList, Dimensions, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { height, width } = Dimensions.get('window')
import RazorpayCheckout from 'react-native-razorpay';



const Singleroom = ({ navigation, route }) => {


    const [db, setDb] = useState([
        { con: "Multiple Booking", img: require('../assets/rooms.jpg') },
        { con: "Secure Payment", img: require('../assets/rooms.jpg') },
        { con: "Self Dashboard", img: require('../assets/rooms.jpg') }

    ])

    const [isclicked, setIsclicked] = useState(false)
    const [isclicked1, setIsclicked1] = useState(false)
    const [isclicked2, setIsclicked2] = useState(false)




    const { iid } = route.params;
    const id = iid;
    const [image, setImage] = useState();
    const [roomname, setRoomname] = useState();
    const [district, setDistrict] = useState();
    const [address, setAddress] = useState('')
    const [state, setState] = useState();
    const [dic, setDic] = useState();
    const [siglebedprice, setSiglebedprice] = useState();
    const [fullroomprice, setFullroomprice] = useState();
    const [electricCharge, setElectricCharge] = useState();
    const [parking, setParking] = useState();
    const [powerbackup, setPowerbackup] = useState();
    const [preferred, setPreferred] = useState();
    const [available, setAvailable] = useState()
    const [totalbed, setTotalbed] = useState();
    const [remainingbed, setRemainingbed] = useState('')
    const [acroom, setAcroom] = useState('');
    const [roomtype, setRoomtype] = useState();
    const [cooking, setCooking] = useState();
    const [bathroom, setBathroom] = useState();
    const [visitor, setVisitor] = useState();
    const [oppsiteGender, setOppsiteGender] = useState();
    const [closingtime, setClosingtime] = useState();
    const [smoking, setSmoking] = useState();
    const [loudMusic, setLoudMusic] = useState();
    const [party, setParty] = useState();
    const [furniture, setFurniture] = useState('')
    const [commonarea, setCommanarea] = useState('');
    const [load, setLoad] = useState(true)
    const [load1, setLoad1] = useState(true)
    const [visible, setVisible] = useState(false)

    const [usersId, setUsersId] = useState('');
    const [productId, setProductId] = useState('');
    const [sellerId, setSellerId] = useState('');
    const [profession, setProfession] = useState('')

    const [price, setPrice] = useState();
    const [load2, setLoad2] = useState(true)
    const [load3, setLoad3] = useState(true)
    const [load4, setLoad4] = useState(true)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [Ages, setAges] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState("booked");
    const [img, setImg] = useState('')

    const [ownername, setOwnername] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [ownerNumber, setOwnernNumber] = useState()
    const [add, setAdd] = useState('')


    const [pay, setPay] = useState("paid");


    useEffect(() => {
        Roomsingle();
    }, [])

    const Roomsingle = async () => {
        let data = await fetch(`https://easy-ser.vercel.app/room/roomlist/${id}`);
        data = await data.json();
        if (data) {
            setImage(data.roomimg);
            setRoomname(data.roomname);
            setAddress(data.address);
            setDistrict(data.district);
            setState(data.state);
            setDic(data.dic);
            setFullroomprice(data.Fullroomprice);
            setSiglebedprice(data.Siglebedprice);
            setElectricCharge(data.ElectricCharge);
            setRemainingbed(data.remainingbed);
            setTotalbed(data.Totalbed);
            setRoomtype(data.Roomtype);
            setParking(data.parking);
            setPowerbackup(data.powerbackup);
            setPreferred(data.Preferred);
            setAvailable(data.Available);
            setCooking(data.cooking);
            setClosingtime(data.closingtime);
            setVisitor(data.visitor);
            setBathroom(data.bathroom);
            setOppsiteGender(data.OppsiteGender);
            setSmoking(data.Smoking);
            setLoudMusic(data.LoudMusic);
            setParty(data.party);
            setAcroom(data.acroom);
            setFurniture(data.furniture);
            setCommanarea(data.commonarea);
            setSellerId(data.SellerId);
            setSiglebedprice(data.Siglebedprice);
            setFullroomprice(data.Fullroomprice)
            setState(data.state);
            setDistrict(data.district);
            setOwnername(data.name);
            setOwnerEmail(data.email);
            setOwnernNumber(data.number)
            setAdd(data.address)
            setProductId(data._id)
            setLoad(false)

        }
        else {
            setLoad(false)
        }

    }



    const book = async () => {
        if (remainingbed <= 0) {
            ToastAndroid.show('Room full no bed remaining', ToastAndroid.SHORT);
        }
        else {
            setVisible(true)
        }

    }



    //----------------------------------Pay area---------------------------------------



    // const [roomname1, setRoomname1] = useState('');
    // const [singlebedprice1, setSiglebedprice1] = useState('');
    // const [fullroomprice1, setFullroomprice1] = useState('')
    // const [state1, setState1] = useState('');
    // const [district1, setDistrict1] = useState('');
    // const [product, setProduct] = useState('')


    useEffect(() => {
        user()
        // productdata();
        // let userid = AsyncStorage.getItem('user');
        // userid=JSON.parse(userid)._id
        // // const username = JSON.parse(AsyncStorage.getItem('user')).name;
        // // const useremail = JSON.parse(AsyncStorage.getItem('user')).email;
        // setUsersId(userid);
        // setProductId(params.id);
        // setName(username);
        // setEmail(useremail);

        // console.log(userid)

    }, []);

    const user = async () => {
        let userid = await AsyncStorage.getItem('users');
        userid = await JSON.parse(userid)._id
        let username = await AsyncStorage.getItem('users')
        username = await JSON.parse(username).name;
        let useremail = await AsyncStorage.getItem('users');
        useremail = await JSON.parse(useremail).email
        setUsersId(userid);
        setName(username);
        setEmail(useremail);


    }

    // const productdata = async () => {
    //     let data = await fetch(`https://easy-ser.vercel.app/room/roomlist/${params.id}`)
    //     data = await data.json();
    //     console.log(data)
    //     setRoomname(data.roomname);
    //     setImg(data.img);
    //     setSellerId(data.SellerId);
    //     setSiglebedprice(data.Siglebedprice);
    //     setFullroomprice(data.Fullroomprice)
    //     setState(data.state);
    //     setDistrict(data.district);
    //     setOwnername(data.name); 
    //     setOwnerEmail(data.email);
    //     setOwnernNumber(data.number)
    //     setAdd(data.address)
    // }
    var date = new Date();
    var time = new Date().getTime();



    const handlerazarpay = async (data) => {
        const options = {
            key: 'rzp_test_MtraH0q566XjUb',
            amount: data.price,
            currency: data.currency,
            name: "Easy Peasy",
            order_id: data.id,

        }
        RazorpayCheckout.open(options).then((response) => {
            check(response)
        }).catch((err) => {
            console.log("error", err)
        })
    }

    const check = async (response) => {
        console.log(response)
        let data = await fetch('https://easy-ser.vercel.app/payment/verify', {
            method: "post",
            body: JSON.stringify({ response }),
            headers: {
                "content-type": "application/json"
            }
        });
        data = await data.json();
        if (data.code === 200) {
            postbooking(data);
            sendEmail();
            sellerEmail();
        }
    }

    const postbooking = async (db) => {
        let transitionId = db.data.payment_id;
        let orderId = db.data.order_id;
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/postbooking`, {
            method: "post",
            body: JSON.stringify({
                usersId, sellerId, transitionId, orderId, productId, name, pay, email, img, Ages, date, time, status, price, roomname, state, add, district, ownerEmail, ownername, ownerNumber
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
        data = await data.json();
        if (data) {
            ToastAndroid.show('Navigating to My Booking', ToastAndroid.SHORT);
            navigation.navigate('profile')
        }
    }

    const sendEmail = async () => {
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/book/notify`, {
            method: "post",
            body: JSON.stringify({ email, ownername, ownerNumber, sellerId }),
            headers: {
                'content-type': 'application/json'
            }
        });

        data = await data.json();
        if (data) {
            console.log("send email to Student")
        }
    }

    const sellerEmail = async () => {
        let data = await fetch('https://easy-ser.vercel.app/roombooking/book/sellnotify', {
            method: "post",
            body: JSON.stringify({ ownerEmail, usersId, name, email }),
            headers: {
                'content-type': 'application/json'
            }
        });
        data = await data.json();
        if (data) {
            console.log("send to email to sender");
        }

    }
    const Paynow = async () => {
        ToastAndroid.show('Redirected to Payment gatway', ToastAndroid.SHORT);
        setLoad(false)
        setTimeout(() => {
            setLoad(true)
        }, 3000)
        let result = await fetch(`https://easy-ser.vercel.app/payment/orders`, {
            method: "post",
            body: JSON.stringify({ price }),
            headers: {
                'content-type': 'application/json'
            }
        });
        result = await result.json();
        if (result.code === 200) {
            handlerazarpay(result.data)
        }
        else {
            ToastAndroid.show('Empty Details', ToastAndroid.SHORT);
        }

    }

    const pri = () => {
        setPrice(siglebedprice);
        setIsclicked(false);
        setLoad2(false)
    }
    const pri1 = () => {
        setIsclicked(false);
        setPrice(fullroomprice);
        setLoad2(false)
    }
    const gen = () => {
        setIsclicked1(false)
        setGender("male")
        setLoad3(false)

    }
    const gen1 = () => {
        setIsclicked1(false)
        setGender("Female")
        setLoad3(false)
    }
    const pro = () => {
        setIsclicked2(false)
        setProfession("Student")
        setLoad3(false)
    }
    const pro1 = () => {
        setIsclicked2(false)
        setProfession("Working")
        setLoad3(false)
    }



    return (
        <View style={{
            flex: 1
        }}>
            <ImageBackground style={{
                height: "100%",
                width: "100%"
            }} source={require('../assets/bac1.png')}>

                {
                    visible ? <Modal>
                        <View style={{
                            width: "100%",
                            height: 500,
                            backgroundColor: "#fff",
                            borderRadius: 5

                        }}>

                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}>

                                <View style={{
                                    flexDirection: "row",
                                    marginTop: 30,
                                    marginBottom: 20
                                }}>
                                    <Text style={{
                                        fontWeight: "800",
                                        fontSize: 20
                                    }}>Enter your details</Text>

                                    <Icon style={{
                                        marginLeft: 30
                                    }} name="close" size={29} color="red" onPress={() => setVisible(false)} />

                                </View>



                                <TextInput value={name} onChangeText={(text) => setName(text)} placeholder="Enter Name" style={{
                                    borderWidth: 1,
                                    marginTop: 10,
                                    padding: 5,
                                    width: "90%",
                                    fontWeight: "700"
                                }}>

                                </TextInput>
                                <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholder="Enter Email" style={{
                                    borderWidth: 1,
                                    marginTop: 10,
                                    padding: 5,
                                    width: "90%",
                                    fontWeight: "700"

                                }}>

                                </TextInput>
                                <TextInput value={Ages} onChangeText={(text) => setAges(text)} placeholder="Enter Your Age" style={{

                                    borderWidth: 1,
                                    marginTop: 10,
                                    padding: 5,
                                    width: "90%",
                                    fontWeight: "700"

                                }}>

                                </TextInput>
                            </View>
                            <View style={{
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <TouchableOpacity style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginTop: 10,
                                    borderWidth: 1,
                                    padding: 8,
                                    width: "90%",

                                }} onPress={() => setIsclicked1(!isclicked1)}>
                                    <View>
                                        {
                                            load3 ? <Text style={{
                                                fontWeight: "700"
                                            }}>Select Gender</Text> : <Text style={{
                                                fontWeight: "700"
                                            }}>{gender}</Text>
                                        }

                                    </View>
                                    <View>
                                        {
                                            isclicked1 ? <Icon name="arrow-right" size={25} color="black" />
                                                : <Icon name="arrow-left" size={25} color="black" />
                                        }
                                    </View>
                                </TouchableOpacity>
                                <View>
                                    {
                                        isclicked1 ? <View style={{
                                            backgroundColor: "#fff",
                                            padding: 10,
                                            elevation: 10
                                        }}>
                                            <View>
                                                <TouchableOpacity style={{
                                                    backgroundColor: "rgba(51, 176, 246, 1)",
                                                    width: 200,
                                                    padding: 5
                                                }}><Text style={{
                                                    textAlign: "center",
                                                    fontSize: 15,
                                                    fontWeight: "bold",
                                                }} onPress={() => gen()}>Male</Text></TouchableOpacity>
                                                <TouchableOpacity style={{
                                                    backgroundColor: "rgba(51, 176, 246, 1)",
                                                    width: 200,
                                                    padding: 5,
                                                    marginTop: 5
                                                }} onPress={() => gen1()}><Text style={{
                                                    textAlign: "center",
                                                    fontSize: 15,
                                                    fontWeight: "bold",
                                                }}>Female</Text></TouchableOpacity>
                                            </View>
                                        </View> : null
                                    }
                                </View>
                            </View>



                            <View style={{
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <TouchableOpacity style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginTop: 10,
                                    borderWidth: 1,
                                    padding: 8,
                                    width: "90%",

                                }} onPress={() => setIsclicked(!isclicked)}>
                                    <View>
                                        {
                                            load2 ? <Text style={{
                                                fontWeight: "700"
                                            }}>Select Roomtype</Text> : <Text style={{
                                                fontWeight: "700"
                                            }}>{price}</Text>
                                        }


                                    </View>
                                    <View>
                                        {
                                            isclicked ? <Icon name="arrow-right" size={25} color="black" />
                                                : <Icon name="arrow-left" size={25} color="black" />
                                        }
                                    </View>
                                </TouchableOpacity>
                                <View>
                                    {
                                        isclicked ? <View style={{
                                            backgroundColor: "#fff",
                                            padding: 10,
                                            elevation: 10
                                        }}>
                                            <View>
                                                <TouchableOpacity style={{
                                                    backgroundColor: "rgba(51, 176, 246, 1)",
                                                    width: 200,
                                                    padding: 5
                                                }}><Text style={{
                                                    textAlign: "center",
                                                    fontSize: 15,
                                                    fontWeight: "bold",
                                                }} onPress={() => pri()} >Sigble beds</Text></TouchableOpacity>
                                                <TouchableOpacity style={{
                                                    backgroundColor: "rgba(51, 176, 246, 1)",
                                                    width: 200,
                                                    padding: 5,
                                                    marginTop: 5
                                                }}><Text style={{
                                                    textAlign: "center",
                                                    fontSize: 15,
                                                    fontWeight: "bold",
                                                }} onPress={() => pri1()}>Full Room</Text></TouchableOpacity>
                                            </View>
                                        </View> : null
                                    }


                                </View>
                            </View>




                            <View style={{
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <TouchableOpacity style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginTop: 10,
                                    borderWidth: 1,
                                    padding: 8,
                                    width: "90%",

                                }} onPress={() => setIsclicked2(!isclicked2)}>
                                    <View>
                                        {
                                            load3 ? <Text style={{
                                                fontWeight: "700"
                                            }}>Select Profession</Text> : <Text style={{
                                                fontWeight: "700"
                                            }}>{profession}</Text>
                                        }

                                    </View>
                                    <View>
                                        {
                                            isclicked2 ? <Icon name="arrow-right" size={20} color="black" />
                                                : <Icon name="arrow-left" size={20} color="black" />
                                        }
                                    </View>
                                </TouchableOpacity>
                                <View>
                                    {
                                        isclicked2 ? <View style={{
                                            backgroundColor: "#fff",
                                            padding: 10,
                                            elevation: 10
                                        }}>
                                            <View>
                                                <TouchableOpacity style={{
                                                    backgroundColor: "rgba(51, 176, 246, 1)",
                                                    width: 200,
                                                    padding: 5
                                                }}><Text style={{
                                                    textAlign: "center",
                                                    fontSize: 15,
                                                    fontWeight: "bold",
                                                }} onPress={() => pro()}>Student</Text></TouchableOpacity>
                                                <TouchableOpacity style={{
                                                    backgroundColor: "rgba(51, 176, 246, 1)",
                                                    width: 200,
                                                    padding: 5,
                                                    marginTop: 5
                                                }}><Text style={{
                                                    textAlign: "center",
                                                    fontSize: 15,
                                                    fontWeight: "bold",
                                                }} onPress={() => pro1()}>Working</Text></TouchableOpacity>
                                            </View>
                                        </View> : null
                                    }


                                </View>
                            </View>

                            <View style={{
                                marginTop: 30,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignContent: "center"
                            }}>
                                <TouchableOpacity style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    backgroundColor: "rgba(51, 176, 246, 1)",
                                    width: 200,
                                    padding: 10,
                                    borderRadius: 5,
                                    elevation: 20
                                }} onPress={() => Paynow()}><Text style={{
                                    fontWeight: "bold"
                                }} >Procced for payment</Text></TouchableOpacity>
                            </View>

                        </View>

                    </Modal>
                        : null
                }



                {
                    load ?
                        <View style={{
                            flex: 1, justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <ActivityIndicator size={"large"} />
                        </View> :
                        <ScrollView>
                            <View>
                                <FlatList
                                    horizontal
                                    data={db}
                                    renderItem={({ item }) => {
                                        return (
                                            <View >
                                                <Image style={{
                                                    height: 300,
                                                    width: width,
                                                }} source={item.img}>
                                                </Image>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                            <View style={{ marginLeft: 5 }}>
                                <Text>{roomname} / {address}  / {district}</Text>
                                <Text style={{ fontSize: 10 }}>{dic}</Text>
                            </View>
                            <View style={{
                                width: width,
                                height: 1,
                                marginTop: 10,
                                backgroundColor: "black"
                            }}></View>
                            <View style={{
                                height: 900,
                            }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
                                    <View>
                                        <Text style={{ fontSize: 12 }}>Price/Bed</Text>
                                        <Text style={{ textAlign: "center" }}>{siglebedprice}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12 }}>Price/Room</Text>
                                        <Text style={{ textAlign: "center" }}>{fullroomprice}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12 }}>Electric charges</Text>
                                        <Text style={{ textAlign: "center" }}>{electricCharge}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12 }}>Bathroom</Text>
                                        <Text style={{ textAlign: "center" }}>{bathroom}</Text>
                                    </View>

                                </View>
                                <View style={{
                                    width: width,
                                    height: 1,
                                    marginTop: 30,
                                    backgroundColor: "black"
                                }}></View>
                                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
                                    <View>
                                        <Text style={{ fontSize: 12 }}>Ac Rooms</Text>
                                        <Text style={{ textAlign: "center" }}>{acroom}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12 }}>Parking</Text>
                                        <Text style={{ textAlign: "center" }}>{parking}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12 }}>Power backup</Text>
                                        <Text style={{ textAlign: "center" }}>{powerbackup}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12 }}>Preferred tenats</Text>
                                        <Text style={{ textAlign: "center" }}>{preferred}</Text>
                                    </View>
                                </View>
                                <View style={{
                                    width: width,
                                    height: 1,
                                    marginTop: 30,
                                    backgroundColor: "black"
                                }}></View>

                                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
                                    <View>
                                        <Text style={{ fontSize: 12 }}>Available for</Text>
                                        <Text style={{ textAlign: "center" }}>{available}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12 }}>Room type</Text>
                                        <Text style={{ textAlign: "center" }}>{roomtype}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12 }}>Total Beds</Text>
                                        <Text style={{ textAlign: "center" }}>{totalbed}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12 }}>Cooking</Text>
                                        <Text style={{ textAlign: "center" }}>{cooking}</Text>
                                    </View>
                                </View>
                                <View style={{
                                    width: width,
                                    height: 1,
                                    marginTop: 30,
                                    backgroundColor: "black"
                                }}></View>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <TouchableOpacity style={{
                                        backgroundColor: "red",
                                        width: 200,
                                        padding: 10,
                                        marginTop: 25,
                                        borderRadius: 10

                                    }}><Text style={{
                                        textAlign: "center",
                                        color: "#fff",
                                        fontWeight: "bold",
                                        fontSize: 20
                                    }} onPress={() => book()}>Book now</Text></TouchableOpacity>
                                </View>

                                <View style={{
                                    marginTop: 20
                                }}>
                                    <Text style={{
                                        marginLeft: 20,
                                        fontSize: 20,
                                        fontWeight: "bold"
                                    }}>House Rules</Text>
                                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
                                        <View>
                                            <Text style={{ fontSize: 10 }}>Get close time</Text>
                                            <Text style={{ textAlign: "center" }}>{closingtime}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 10 }}>Visitor Entery</Text>
                                            <Text style={{ textAlign: "center" }}>{visitor}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 10 }}>oppsite Gender</Text>
                                            <Text style={{ textAlign: "center" }}>{oppsiteGender}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 10 }}>Smoking</Text>
                                            <Text style={{ textAlign: "center" }}>{smoking}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
                                        <View>
                                            <Text style={{ fontSize: 10 }}>Loud music</Text>
                                            <Text style={{ textAlign: "center" }}>{loudMusic}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 10 }}>Party</Text>
                                            <Text style={{ textAlign: "center" }}>{party}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 10 }}>oppsite Gender</Text>
                                            <Text style={{ textAlign: "center" }}>{oppsiteGender}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 10 }}>Smoking</Text>
                                            <Text style={{ textAlign: "center" }}>{smoking}</Text>
                                        </View>
                                    </View>

                                    <Text style={{
                                        marginLeft: 20,
                                        fontSize: 18,
                                        fontWeight: "bold",
                                        marginTop: 10
                                    }}>Furniture</Text>
                                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                        {
                                            furniture && furniture.length > 0 ? furniture.map((item, index) => (
                                                <View style={{ marginTop: 15 }} key={index}>
                                                    <View>
                                                        <Text style={{ fontSize: 10 }}>{item}</Text>

                                                    </View>

                                                </View>
                                            )) : null


                                        }

                                    </View>

                                    <Text style={{
                                        marginLeft: 20,
                                        fontSize: 18,
                                        fontWeight: "bold",
                                        marginTop: 10
                                    }}>Common Area and Amenities</Text>
                                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                        {
                                            commonarea && commonarea.length > 0 ? commonarea.map((item, index) => (
                                                <View style={{ marginTop: 15 }} key={index}>
                                                    <View>
                                                        <Text style={{ fontSize: 10 }}>{item}</Text>

                                                    </View>

                                                </View>
                                            )) : null


                                        }

                                    </View>




                                    <Text style={{
                                        color: "red",
                                        fontSize: 20,
                                        marginLeft: 20,
                                        marginTop: 10,
                                        fontWeight: "bold"
                                    }}>Info For You</Text>

                                    <View style={{
                                        marginTop: 10,
                                        marginLeft: 20
                                    }}>
                                        <Text style={{
                                            fontSize: 13
                                        }}><Icon name="arrow-right" size={8} color="red" />
                                            100% refund after 24 hours of cancellation
                                        </Text>
                                        <Text style={{
                                            fontSize: 13
                                        }}>
                                            <Icon name="arrow-right" size={8} color="red" />
                                            All the details of owner will send After payment (onwer number,address,google map location)
                                        </Text>
                                        <Text style={{
                                            fontSize: 13
                                        }}>
                                            <Icon name="arrow-right" size={8} color="red" />
                                            For more info about pg contact us
                                        </Text>
                                    </View>
                                </View>

                            </View>
                        </ScrollView>

                }

            </ImageBackground>

        </View>
    )
}

export default Singleroom;