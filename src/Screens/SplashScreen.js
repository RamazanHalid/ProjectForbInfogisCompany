import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, Image} from 'react-native';

import styles from '../styles/styles';


const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace('Authentication');
    }, 4500);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Images/bInfoGISLOGO.png')}
        style={{width: '85%', resizeMode: 'contain', margin: 32}}
      />
      <ActivityIndicator
        animating={animating}
        color="#006400"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;
