import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';

import styles from '../styles/styles';
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.homeScreenSafetyarea}>
      <View style={styles.loginScreenKeyboardAvoidingViewView}>
        <Image
          source={require('../assets/Images/bInfoGISLOGO.png')}
          style={styles.loginScreenKeyboardAvoidingViewViewImage}
        />
      </View>
      <View style={styles.homeScreenSafetyareaView}>
        <View style={styles.homeScreenSafetyareaViewView}>
          <Text style={styles.homeScreenSafetyareaViewViewText}>
            Welcome to b-infoGIS
            {'\n\n\n'}
            B-Mühendislik
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Log Out</Text>
        </TouchableOpacity>
        <Text style={styles.homeScreenSafetyareaViewText}>
          https://www.b-infogis.com.tr
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
