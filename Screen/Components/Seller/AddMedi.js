import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Picker,
} from 'react-native';

export default class EditMedi extends Component {
  constructor() {
    super();
    this.state = {
      medicineName: '',
      strength: '',
      unit: 'mg',
      genericName: '',
      manufacturer: '',
      price: '',
      successText: '',
    };
  }

  Add = () => {
    // fetch("https://medicine-sheba-server.herokuapp.com/admin/add-medicine", {
    //     method: 'POST',
    //     headers: {
    //         'Authorization':'Bearer '+global.adminToken,
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         medicineName: this.state.medicineName,
    //         strength: this.state.strength,
    //         unit: this.state.unit,
    //         genericName: this.state.genericName,
    //         manufacturer: this.state.manufacturer,
    //         price: this.state.price,
    //     })
    // })

    //     .then((response) => response.json())
    //     .then((responseJson) => {

    //         //setLoading(false);
    //         console.log(responseJson);
    //         // If server response message same as Data Matched
    //         if (responseJson.status == 'success') {
    //             // console.log('Medicine Added');
    //             alert("Medicine Added successfully")
    //             this.setState({ successText: "Medicine Added successfully" })

    //         }else if(responseJson.status == 'error')
    //         {
    //             alert("Medicine add failed")
    //         }
    //     })

    //     .done();
    alert('Added to cart');
  };

  GoToList = () => {
    this.props.navigation.navigate('NavToSeller');
    //alert("Hi")
  };

  render() {
    // alert('props '+JSON.stringify(this.props))

    return (
      <KeyboardAvoidingView enabled>
        <View style={styles.container}>
          <View>
            <Text
              style={{
                fontSize: 30,
                marginTop: 20,
                fontWeight: 'bold',
                textDecorationLine: 'underline',
                marginBottom: 25,
              }}>
              Add to cart
            </Text>
          </View>
          {/* <TextInput
            style={styles.inputBox}
            onChangeText={(medicineName) =>
              this.setState({medicineName: medicineName})
            }
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Medicine Name"
            placeholderTextColor="#002f6c"
            selectionColor="#fff"
            keyboardType="email-address"
            onSubmitEditing={() => this.password.focus()}
          />

          <TextInput
            style={styles.inputBox}
            onChangeText={(strength) => this.setState({strength: strength})}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Strength"
            placeholderTextColor="#002f6c"
            ref={(input) => (this.password = input)}
          />

          <View style={styles.inputBox}>
            <Picker
              selectedValue={this.state.unit}
              style={{height: 50, width: 280, color: '#002f6c'}}
              onValueChange={(unit) => this.setState({unit: unit})}>
              <Picker.Item label="mg" value="mg" />
              <Picker.Item label="ml" value="ml" />
            </Picker>
          </View>

          <TextInput
            style={styles.inputBox}
            onChangeText={(genericName) =>
              this.setState({genericName: genericName})
            }
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Generic Name"
            placeholderTextColor="#002f6c"
            ref={(input) => (this.password = input)}
          /> 
          
          <TextInput
            style={styles.inputBox}
            onChangeText={(manufacturer) =>
              this.setState({manufacturer: manufacturer})
            }
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Manufacturer"
            placeholderTextColor="#002f6c"
            ref={(input) => (this.password = input)}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={(price) => this.setState({price: price})}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Price"
            placeholderTextColor="#002f6c"
            ref={(input) => (this.password = input)}
          />*/}
          <TextInput
            style={styles.inputBox}
            onChangeText={(manufacturer) =>
              this.setState({manufacturer: manufacturer})
            }
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Quantity"
            placeholderTextColor="#002f6c"
            ref={(input) => (this.password = input)}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => this.Add()}>
              Upload Prescription
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => this.Add()}>
              ADD
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => this.GoToList()}>
              Go to home
            </Text>
          </TouchableOpacity>

          {this.state.successText != '' ? (
            <Text style={styles.successTextStyle}>
              {' '}
              {this.state.successText}{' '}
            </Text>
          ) : null}
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#B2BEB5',
    height: '100%',
  },
  successTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  inputBox: {
    width: 300,
    backgroundColor: '#eeeeee',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 10,
  },
  button: {
    width: '50%',
    backgroundColor: '#2B2D2F',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});
