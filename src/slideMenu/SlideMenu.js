import React, { Component } from 'react';
import { View ,Text, StyleSheet, TouchableOpacity, Image,ScrollView, Linking, Share} from "react-native";
import colors from '../component/Colors';

export default class slideMenu extends Component{

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'India Jobs (a helping hand to job seekers) is now available on play store.'+ 
          '\n Download it to get job walk-ins information in India.' + 
          '\n Link - http://bit.ly/indiajobsfresher'
      });

    } catch (error) {
      alert(error.message);
    }
  };
  
    render(){
        return (
            <View>
              <ScrollView>
              <TouchableOpacity                  
                onPress={ ()=> Linking.openURL('https://sacredbits.com/jobs/') }
                style={styles.card}>
                <Image 
                  style={styles.img}
                  source={require('../image/ic_launcher.png')}/>
              </TouchableOpacity>         
              
              <TouchableOpacity
                onPress={()=> this.props.navigation.navigate("Home")}
                style={styles.subCard}>
                 <Text style={styles.txt}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={()=> this.props.navigation.navigate("AdminPannel")}
                style={styles.subCard}>
                 <Text style={styles.txt}>Admin Panel</Text>
              </TouchableOpacity>
                       
              <TouchableOpacity
                onPress={()=> this.props.navigation.navigate("About")}
                style={styles.subCard}>
                 <Text style={styles.txt}>Our Team</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={()=> this.props.navigation.navigate("Story")}
                style={styles.subCard}>
                 <Text style={styles.txt}>Our Story</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={()=> this.onShare()}
                style={styles.subCard}>
                 <Text style={styles.txt}>Invite</Text>
              </TouchableOpacity>
              </ScrollView>
            </View>
         );
    }
}
const styles = StyleSheet.create({
    card: {
      //margin: 8,
      backgroundColor: colors.primary,
      //elevation: 1,
      padding: 20,
      //borderRadius: 4
    },
    subCard:{
        backgroundColor:colors.white,
        padding:10,
        borderBottomWidth:0.5,
        flexDirection:"row"
    },
    txt:{
        marginLeft:10
    },
    img :{
        height:150,
        width:150
    }
  });
