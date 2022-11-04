import React, {useState, useEffect} from 'react';

//Import all required component
import {ActivityIndicator, View, StyleSheet, Image, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = (props) => {
  //State for ActivityIndicator animation
  let [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then((value) =>
        props.navigation.navigate(
          value === null ? 'Auth' : 'DrawerNavigationRoutes',
        ),
      );
    }, 5000);
    // setTimeout(() => {
    //   props.navigation.navigate('Auth');
    // }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {/*<Image
        source={require('../Image/aboutreact.png')}
        style={{ width: '90%', resizeMode: 'contain', margin: 30 }}
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
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3f50b5',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
