import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import colors from '../assets/colors/color';
import Entypo from 'react-native-vector-icons/Entypo';
import libraryData from '../assets/data/libraryData';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';


Entypo.loadFont();

const Library = ({navigation}) => {

  const renderLibraryItem = ({item}) => {
    return (
      <View
       >
          <Text style={styles.activityItemText}>{item.title}</Text>
        <Image source={item.image} style={styles.activityItemImage} />
        
      </View>
    );
  };  
  
  return (
        <View style= {styles.container}>
            
            <View style= {styles.SearchBarWrapper}>
              <TextInput value="Search Course Here" style={{  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 0, borderRadius: 10, height:40, paddingLeft: 45, paddingVertical:20, backgroundColor: '#FFFFFF' }}/>
              <Image source={require('../assets/buttonIcon/Search.png')} style={{position: 'absolute', right:0, height:40,width:40, }}/>
            </View>
           
        {/* Categories */}
        <View style={styles.categWrapper}>
          
          <View style={styles.categCategoriesWrapper}>
            
            <Text style={styles.categCategoryText}>General</Text>
            <Text style={styles.categCategoryText}>Techno</Text>
            <Text style={styles.categCategoryText}>Non-Techno</Text>
            <Text style={styles.categCategoryText}>Seminar</Text>
            <Text style={styles.categCategoryText}>Workshop</Text>

          </View>
          
        </View>


         {/* Library */}
         <View style={styles.LibraryWrapper}>
          
          <View style={styles.LibraryItemsWrapper}>
            <FlatList
              data={libraryData}
              renderItem={renderLibraryItem}
              keyExtractor={(item) => item.id}
              vertical
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
        </View>

);



};

const styles = StyleSheet.create({
    container :{
        flex: 1,
        color: colors.white
    },
    activityItemText:{
      marginBottom: 14,
      marginTop: 14,
      backgroundColor: '#FF9D5B',
      width: 107,
      height: 16,
      borderRadius: 10,
      paddingLeft:5,
      fontSize: 10,
      fontWeight: 'bold',
     

    },

    categCategoriesWrapper: {
        marginHorizontal: 20,
        flexDirection: 'row',
        marginLeft: 44,
        marginTop: 20,
        
      },
      categCategoryText: {
        marginRight: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        fontSize: 14,
        
        width: 74,
        height: 20,
        //justifyContent: 'center',
        alignItems: 'center',
      },

      LibraryItemsWrapper: {
        paddingVertical: 20,
        marginLeft: 44,
      },
      LibraryItemWrapper: {
        
        
        marginRight: 20,
      },
      activityItemImage: {
        width: 88,
        height: 115,
      },
      
      SearchBarWrapper: {
        width: 322,
        height: 32,
        marginTop: 56,
        
        marginLeft: 44,
        
      }

})
export default Library;