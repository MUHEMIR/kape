import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {View, Text, StyleSheet, ImageBackground,Image, TouchableOpacity} from 'react-native';



export default function User()  {
    return (

        
        <ImageBackground source={require('../assets/BG/account-BG.png') } style={styles.container}>



        <View style={styles.userWrapper}>

        <View style={styles.profileContainer}>
                    <Image style={styles.profilepic} source={require('../assets/userIcon/garok.jpg')}/>
                    <View style={{marginLeft:13,}}>
                        <Text style={styles.profileName}>Hai Miftah Amirul Amin,</Text>
                        <Text style={styles.profileDescription}>Score : 0</Text>
                        <Text style={styles.profileDescription}>Progress : 0%</Text>
                    </View>
                </View>

        </View>

        {/*Menu*/}
            
            <View style={styles.container2}>
        <View style={styles.UpperButtonWrapper}>

        <TouchableOpacity>  
            <View style={styles.UpperButton}>
            <Image source={require('../assets/userIcon/file.png') } style={{alignItems: 'center'}} />
            <Text>File</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={styles.UpperButton}>
            <Image source={require('../assets/userIcon/user.png') } style={{alignItems: 'center'}} />
            <Text>My Account</Text>
            </View>
        </TouchableOpacity>  

        <TouchableOpacity>  
            <View style={styles.UpperButton}>
            <Image source={require('../assets/userIcon/setting.png') } style={{alignItems: 'center'}} />
            <Text>App Setting</Text>
            </View>
        </TouchableOpacity>

            </View>

        
            <View style={styles.LowerButtonWrapper}>

        <TouchableOpacity>
            <View style={styles.LowerButton}>
                <Image source={require('../assets/userIcon/event.png') } />
                <Text>Event</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={styles.LowerButton}>
            <Image source={require('../assets/userIcon/rules.png') } style={{alignItems: 'center'}} />
            <Text>Rules</Text>
            </View>
        </TouchableOpacity>
            
            </View>
    </View> 
        
        
        </ImageBackground>

      


);


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        
    },

    UpperButtonWrapper: {
        
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:275,
        

    },

    UpperButton: {
        
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    LowerButtonWrapper: {

        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        width:220,
        alignItems: 'center',
        marginTop: 27,

    },

    LowerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        
        

    },

    userWrapper: {
        width: 275,
        height: 88,
        alignItems: 'center',
        
        backgroundColor: '#FF9C40',
        borderColor: '#000000',
        borderRadius: 4,
        marginBottom: 63,
        marginTop: 36,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,      
        
    },
    container2: {
        
        justifyContent: 'center',
        alignItems: 'center',
    },

   //profile
   profileContainer : {
    flexDirection: 'row',
    marginTop: 15,
    
    
},

profilepic : {
    width:56,
    height:56,
    borderRadius:125,
    borderWidth:5,
    marginBottom:20,
},

profileName :{
    fontSize: 12, 
    fontWeight: 'bold',
    padding:0,
    margin: 0,
},

profileDescription :{
    fontSize: 12, 
    padding: 0,
    margin: 0,
},


})
