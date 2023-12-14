import * as React from 'react';
import {Text, View, StyleSheet, StatusBar, Image, TouchableOpacity,Button,ScrollView,} from 'react-native';
//import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import AppHeader from '../components/AppHeader';
import SettingComponent from '../components/SettingComponent';
import { FIREBASE_AUTH } from '../Config/firebase';

const UserAccountScreen = ({navigation}: any) => {
  return (
    <ScrollView style={styles.container} bounces={false}>
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.appHeaderContainer}>
        <AppHeader
          name="close"
          header={'My Profile'}
          action={() => navigation.goBack()}
        />
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/image/orangeuser.png')}
          style={styles.avatarImage}
        />
        <Text style={styles.avatarText}>User</Text>
      </View>

      


      <View style={styles.profileContainer}>
        <SettingComponent
          icon="user"
          heading="Account"
          subheading="Edit Profile"
          subtitle="Change Password"
        />
        <SettingComponent

       // navigation={navigation}
        //navigationRoute= './src/screens/SettingsScreen'// Replace 'SettingsScreen' with your actual route name
        icon="setting"
        heading="Settings"
        subheading="Theme"
        subtitle="Permissions"
        action={() => {
          navigation.navigate('SettingsScreen');
      }}
          //icon="setting"
          //heading="Settings"
          //subheading="Theme"
          //subtitle="Permissions"
        />
        
        <SettingComponent
          icon="info"
          heading="About"
          subheading="About Movies"
          subtitle="more"
        />
      </View>
      <View style={styles.LogoutContainer}>
       
       <Button color='#FF5524'  onPress={() => FIREBASE_AUTH.signOut()} title='Logout'/>
     </View>
          
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2,
  },
  profileContainer: {
    alignItems: 'center',
    padding: SPACING.space_36,
  },
  avatarImage: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  avatarText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    marginTop: SPACING.space_16,
    color: COLORS.White,
  },

  LogoutContainer:{
    marginVertical: 15,
    marginHorizontal: 50,
    borderRadius: BORDERRADIUS.radius_25*2,
    paddingHorizontal: SPACING.space_8,
    paddingVertical: SPACING.space_10,
    backgroundColor: COLORS.Orange,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_30,
    color: COLORS.White,
    
  },

});

export default UserAccountScreen;