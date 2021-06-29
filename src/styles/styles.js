import {StyleSheet, ActivityIndicator} from 'react-native';

const styles = StyleSheet.create({
  //SplashScreen
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAEBD7',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  //LoginScreen
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FAEBD7',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#006400',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 8,
    fontSize: 18,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#006400',
  },
  registerTextStyle: {
    color: '#8B0000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  loginScreenKeyboardAvoidingViewView: {
    alignItems: 'center',
  },
  loginScreenKeyboardAvoidingViewViewImage: {
    width: '70%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  //Registration Screen
  successTextStyle: {
    color: 'green',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  registrationScreenlogoImageStyle: {
    width: '70%',
    height: 100,
    resizeMode: 'contain',
    margin: 30,
  },
  registrationSuccessfuly: {
    flex: 1,
    backgroundColor: '#FAEBD7',
    justifyContent: 'center',
  },
  registrationSuccessfulyImage: {
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  //home screen
  homeScreenSafetyarea: {
    flex: 1,
  },
  homeScreenSafetyareaView: {
    flex: 1,
    padding: 16,
  },
  homeScreenSafetyareaViewText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
    marginBottom: 50,
  },
  homeScreenSafetyareaViewView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeScreenSafetyareaViewViewText: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default styles;
