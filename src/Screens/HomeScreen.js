import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';

import styles from '../styles/styles';

const HomeScreen = () => {
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
        <Text style={styles.homeScreenSafetyareaViewText}>
          https://www.b-infogis.com.tr
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
