import React, {useState} from 'react';
import validator from 'validator';
import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../styles/styles';
import Loader from '../components/Loader';

const RegistrationScreen = props => {
  const [FirstName, setFirstName] = useState('');
  const [SecondName, setSecondName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [PasswordConfirmation, setPasswordConfirmation] = useState('');

  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const handleSubmitButton = () => {
    setErrortext('');

    if (validator.isEmpty(FirstName)) {
      setErrortext('First name is required!');
      return;
    }
    if (validator.isEmpty(SecondName)) {
      setErrortext('Second name is required!');
      return;
    }
    if (validator.isEmpty(userEmail)) {
      setErrortext('E-Mail is required!');
      return;
    }
    if (validator.isEmpty(password)) {
      setErrortext('Password is required!');
      return;
    }
    if (validator.isEmpty(PasswordConfirmation)) {
      setErrortext('Password conmfirmation is required!')
      return;
    }

    if (!validator.isEmail(userEmail)) {
      setErrortext(
        'This is not an E-Mail! Please enter correctly E-Mail format!',
      );
      return;
    }
    if (password != PasswordConfirmation) {
      setErrortext('Passwords not equals!');
      return;
    }
    setLoading(true);
    fetch('http://10.0.2.2:5000/api/Auth/register', {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'access-control-allow-origin': '*',
        'Content-Type': 'application/json; charset=utf-8 ',
      },
      body: JSON.stringify({
        email: userEmail,
        password: password,
        firstname: FirstName,
        lastname: SecondName,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        setLoading(false);
        console.log(responseJson);
        if (responseJson.success == 1) {
          setIsRegistraionSuccess(true);
        } else {
          setErrortext('Registration Unsuccessful');
        }
      })
      .catch(error => {
        setLoading(false);
        console.error(error);
      });
  };
  if (isRegistraionSuccess) {
    return (
      <View style={styles.registrationSuccessfuly}>
        {
          <Image
            source={require('../assets/Images/checkMark.png')}
            style={styles.registrationSuccessfulyImage}
          />
        }
        <Text style={styles.successTextStyle}>Registration Successful.</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#FAEBD7'}}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={styles.loginScreenKeyboardAvoidingViewView}>
          <Image
            source={require('../assets/Images/bInfoGISLOGO.png')}
            style={styles.registrationScreenlogoImageStyle}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={FirstName => setFirstName(FirstName)}
              underlineColorAndroid="#f000"
              placeholder="First Name"
              placeholderTextColor="#AAAAAA"
              autoCapitalize="sentences"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={SecondName => setSecondName(SecondName)}
              underlineColorAndroid="#f000"
              placeholder="Second Name"
              placeholderTextColor="#AAAAAA"
              autoCapitalize="sentences"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              placeholder="Enter Email"
              placeholderTextColor="#AAAAAA"
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={Password => setPassword(Password)}
              placeholder="Enter Password"
              placeholderTextColor="#AAAAAA"
              keyboardType="default"
              secureTextEntry={true}
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={PasswordConfirmation =>
                setPasswordConfirmation(PasswordConfirmation)
              }
              placeholder="Enter Password"
              placeholderTextColor="#AAAAAA"
              keyboardType="default"
              secureTextEntry={true}
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.6}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegistrationScreen;
