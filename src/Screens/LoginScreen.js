import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import validator from 'validator';
import styles from '../styles/styles';
import Loader from '../components/Loader';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const handleSubmitPress = () => {
    setErrortext('');
    if (validator.isEmpty(userEmail)) {
      setErrortext('E-Mail can not be empty!');
      return;
    }
    if (validator.isEmpty(userPassword)) {
      setErrortext('Password can not be empty!');
      return;
    }
    if (!validator.isEmail(userEmail)) {
      setErrortext('This is not an E-Mail!');
      return;
    }
    setLoading(true);
    fetch('http://10.0.2.2:5000/api/Auth/login', {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'access-control-allow-origin': '*',
        'Content-Type': 'application/json; charset=utf-8 ',
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        setLoading(false);
        console.log(responseJson);

        if (responseJson.success == 1) {
          console.log(responseJson);
          navigation.navigate('HomeScreen');

          //alert('Login Successfuly');
        } else {
          setErrortext(responseJson.message);
        }
      })
      .catch(error => {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.mainBody}>
      {<Loader loading={loading} />}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 2,
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView>
            <View style={styles.loginScreenKeyboardAvoidingViewView}>
              <Image
                source={require('../assets/Images/bInfoGISLOGO.png')}
                style={styles.loginScreenKeyboardAvoidingViewViewImage}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                placeholder="Your Email"
                placeholderTextColor="black"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                placeholder="Your Password"
                placeholderTextColor="black"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegistrationScreen')}>
              Create new account
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;
