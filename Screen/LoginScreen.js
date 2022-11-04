import React, {useState} from 'react';

global.token = '';
global.owner = '';
global.adminToken = '';
//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from './loader';
// import BottomNav from './Components/BuyerScreens/BuyerNav'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = (props) => {
  let [userEmail, setUserEmail] = useState('');
  let [userPassword, setUserPassword] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');
  const [value, setValue] = React.useState('first');
  const [data, setData] = useState([]);

  let [val, setVal] = useState('');

  const handleSignIn = () => {
    setLoading(true);
    props.navigation.navigate('OrderList', {email: 'test@test.com'});
  };

  const apifetch = () => {
    fetch('https://medicine-sheba-server.herokuapp.com/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);

        console.log(responseJson);

        if (responseJson.status == 'success') {
          var mail = responseJson.message.user.email;
          var name = responseJson.message.user.userName;
          var phone = responseJson.message.user.phone;
          var ID = responseJson.message.user._id;

          global.token = responseJson.message.token;
          global.owner = ID;

          props.navigation.navigate('Profile', {
            address: responseJson.message.user.address,
            email: mail,
            phone: phone,
            name: name,
            ID: responseJson.message.user._id,
            token: responseJson.message.token,
          });
        } else {
          setErrortext('Please check your email id or password');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{marginTop: 90}}>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              {/*<Image
                source={require('../Image/aboutreact.png')}
                style={{
                  width: '80%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />*/}
              <Text
                style={{
                  width: '80%',
                  height: 100,
                  margin: 30,
                  fontSize: 30,
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                CPAD Assignment -Healthcare
              </Text>
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                placeholder="Enter Email"
                placeholderTextColor="#08070D"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  this._passwordinput && this._passwordinput.focus()
                }
                blurOnSubmit={false}
              />
              <Icon
                name="person"
                color="#2B2D2F"
                size={25}
                style={{marginLeft: -30, marginTop: 7}}
              />
            </View>

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                placeholder="Enter Password"
                placeholderTextColor="#08070D"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
              <Icon
                name="key"
                color="#2B2D2F"
                size={25}
                style={{marginLeft: -30, marginTop: 8}}
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}

            {/*<RadioButton.Group onValueChange={value => setValue(value)} value={value} >
              <View style={styles.radioButtonStyle}>
                <View style={{ marginLeft: 20 }}>
                  <Text style={{color:'white' }}>Customer</Text>
                  <RadioButton value="customer" color='black' />
                </View>
                <View style={{ marginLeft: '20%' }}>
                  <Text style={{color:'white' }}>Admin</Text>
                  <RadioButton value="seller" color='black' />
                </View>
              </View>
            </RadioButton.Group>*/}

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSignIn}>
              <Text style={styles.buttonTextStyle}>Sign In</Text>
            </TouchableOpacity>
            {/*<Text
              style={styles.registerTextStyle}
              onPress={() => props.navigation.navigate('BuyerRegistration')}>
              <Text
                style={{
                  fontStyle: 'italic',
                  fontWeight: 'normal',
                  color: 'white',
                }}>
                Don't have any account?
              </Text>{' '}
              Register
              </Text>*/}
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3f50b5',
    color: 'white',
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
    backgroundColor: '#2B2D2F',
    borderWidth: 0,
    color: '#FFFFFF',
    height: 40,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: '40%',
    marginTop: 20,
    marginBottom: 20,
  },
  radioButtonStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    maxWidth: '70%',
    marginLeft: '17%',
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'grey',
  },
  registerTextStyle: {
    color: '#08070D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 20,
    marginTop: 50,
    color: 'white',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
