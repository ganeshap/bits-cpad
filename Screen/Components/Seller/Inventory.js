import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  TextInput,
  Alert,
} from 'react-native';
//import { MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Octicons';
import Dialog from 'react-native-dialog';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAll: false,
      cartItemsIsLoading: false,
      dialogVisible: false,
      id: '',
      cartItems: [
        // {
        // 	medicineName: 'Dolo',
        // 	strength: '250mg',
        // 	unit: 10,
        // 	genericName: 'Dolo',
        // 	price: 200
        // },
        // {
        // 	medicineName: 'Abc',
        // 	strength: '250mg',
        // 	unit: 10,
        // 	genericName: 'Dolo',
        // 	price: 200
        // }
      ],
    };
  }

  showDialog = (value) => {
    this.text = value + 1;
    this.setState({dialogVisible: true});
  };

  handleCancel = () => {
    this.setState({dialogVisible: false});
  };

  handleSubmit = () => {
    //alert(this.Text2)
    this.setState({dialogVisible: false});
  };

  handleText = (textinp, store) => {
    if (store == 'name') {
      this.setState({name: textinp});
    }
  };

  selectHandler = (index, value) => {
    const newItems = [...this.state.cartItems]; // clone the array
    newItems[index]['checked'] = value == 1 ? 0 : 1; // set the new value

    this.setState({cartItems: newItems}); // set new state
  };

  selectHandlerAll = (value) => {
    const newItems = [...this.state.cartItems]; // clone the array
    newItems.map((item, index) => {
      newItems[index]['checked'] = value == true ? 0 : 1; // set the new value
    });
    this.setState({
      cartItems: newItems,
      selectAll: value == true ? false : true,
    }); // set new state
  };

  quantityHandler = (action, index) => {
    const newItems = [...this.state.cartItems]; // clone the array

    let currentQty = newItems[index]['qty'];

    if (action == 'more') {
      newItems[index]['qty'] = currentQty + 1;
    } else if (action == 'less') {
      newItems[index]['qty'] = currentQty > 1 ? currentQty - 1 : 1;
    }

    this.setState({cartItems: newItems}); // set new state
  };

  subtotalPrice = () => {
    const {cartItems} = this.state;
    if (cartItems) {
      return cartItems.reduce(
        (sum, item) =>
          sum + (item.checked == 1 ? item.qty * item.salePrice : 0),
        0,
      );
    }
    return 0;
  };

  addMedicine = () => {
    this.props.navigation.navigate('AddMedi', {
      someData: {},
    });
    //alert("Hi")
  };

  test = (itemName, ID) => {
    this.props.navigation.navigate('EditMedi', {name: itemName, id: ID});
    //console.log(itemName);
  };

  componentDidMount() {
    this.getData();
  }

  componentDidMount() {
    this.getData();
    //console.log("Accepted")
  }

  getData() {
    this.setState({
      cartItems: [
        {
          medicineName: 'Soferi',
          strength: '15 ml',
          unit: 2,
          genericName: 'Soferi',
          price: 65,
        },
        {
          medicineName: 'Supracal Tablet',
          strength: '15 mg ',
          unit: 1,
          genericName: 'Supracal Tablet',
          price: 250,
        },
        {
          medicineName: 'Volini Spray',
          strength: '40 gm',
          unit: 3,
          genericName: 'Volini Spray',
          price: 126,
        },
        {
          medicineName: 'Letroz',
          strength: '2.5 mg ',
          unit: 1,
          genericName: 'Letroz',
          price: 183,
        },
      ],
    });
  }

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.state.cartItems.filter(function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.medicineName
        ? item.medicineName.toUpperCase()
        : ''.toUpperCase();
      const textData = text.toUpperCase();
      //console.log()
      return itemData.indexOf(textData) > -1;
    });
    //console.log(newData)
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view

      dataSource: newData,
      text: text,
    });
  }

  render() {
    const {cartItems, cartItemsIsLoading, selectAll} = this.state;

    return (
      <View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            marginBottom: 10,
          }}>
          <View style={[styles.centerElement, {width: 50, height: 50}]}>
            <Icon style={[{color: 'black'}]} size={25} name="search" />
          </View>

          <View style={[styles.centerElement, {height: 40, marginTop: 5}]}>
            <TextInput
              onChangeText={(text) => this.SearchFilterFunction(text)}
              value={this.state.text}
              style={{
                borderWidth: 2,
                width: 320,
                borderRadius: 8,
                paddingLeft: 10,
              }}
              placeholder={'Search'}></TextInput>
          </View>
        </View>

        {cartItemsIsLoading ? (
          <View style={[styles.centerElement, {height: 300}]}>
            <ActivityIndicator size="large" color="#ef5739" />
          </View>
        ) : (
          <ScrollView>
            {this.state.dataSource &&
              this.state.dataSource.map((item, i) => (
                <View
                  key={i}
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    marginBottom: 2,
                    height: 120,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexGrow: 1,
                      flexShrink: 1,
                      alignSelf: 'center',
                      marginLeft: 20,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        /*this.props.navigation.navigate('ProductDetails', {productDetails: item})*/
                      }}
                      style={{paddingRight: 10}}></TouchableOpacity>
                    <View
                      style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
                      <TouchableOpacity
                        onPress={() =>
                          alert(
                            'Name: ' +
                              item.medicineName +
                              '\n' +
                              item.strength +
                              ' ' +
                              item.unit +
                              '\n' +
                              'Generic: ' +
                              item.genericName +
                              '\n' +
                              'Company: ' +
                              item.manufacturer +
                              '\n' +
                              'Price: ' +
                              item.price,
                          )
                        }>
                        <Text numberOfLines={1} style={{fontSize: 20}}>
                          {item.medicineName}
                        </Text>
                        <Text numberOfLines={1} style={{color: '#8f8f8f'}}>
                          {item.strength} {item.unit}
                        </Text>
                        <Text numberOfLines={1} style={{color: '#8f8f8f'}}>
                          Generic Name: {item.genericName}
                        </Text>
                        <Text numberOfLines={1} style={{color: '#8f8f8f'}}>
                          Manufacturer: {item.manufacturer}
                        </Text>
                        <Text numberOfLines={1} style={{color: '#8f8f8f'}}>
                          Price: {item.price}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      width: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.addMedicine();
                      }}>
                      <Icon name="add" color="black" size={25} />
                    </TouchableOpacity>
                  </View>

                  <View style={[styles.centerElement, {width: 60}]}>
                    <TouchableOpacity
                      style={[styles.centerElement, {width: 32, height: 32}]}>
                      {/* <Icon name="md-trash" size={25} color="rgb(129,122,126)" />*/}
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
          </ScrollView>
        )}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            height: 32,
            paddingRight: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={[
              styles.centerElement,
              {
                backgroundColor: '#2B2D2F',
                width: 40,
                height: 40,
                marginBottom: 40,
                borderRadius: 20,
              },
            ]}
            onPress={() => this.addMedicine()}>
            <Icon name="add" color="white" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerElement: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  box1: {
    flex: 1,
  },
  container: {
    height: '100%',
  },

  box2: {
    flex: 1,
    alignItems: 'flex-end',
  },
  detailBox: {
    flexDirection: 'row',
    margin: 10,
  },
  header: {
    backgroundColor: 'rgb(171, 235, 198)',
  },
  headerContent: {
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'pink',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  buttonStyle: {
    backgroundColor: 'rgb(230, 45, 82)',
    borderWidth: 0,
    color: '#FFFFFF',
    height: 45,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginLeft: '38%',
    marginTop: 85,
  },
  buttonTextStyle: {
    color: 'rgb(255,255, 255)',
    paddingVertical: 10,
    fontSize: 16,
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
  },
  body: {
    backgroundColor: 'rgb(255,255,255)',
    height: '68%',
  },
  item: {
    flexDirection: 'row',
    marginTop: 20,
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    paddingRight: 1,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 10,
    color: 'white',
    marginLeft: 20,
  },
});
