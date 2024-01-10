import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BatchQueue = ({ navigation }) => {
    const [gemType, setGemType] = useState('');
    const [company, setCompany] = useState('');
    const [carat, setCarat] = useState('');
    const [seller, setSeller] = useState('');
    const [salesPrice, setsalesPrice] = useState('');
    const [dimensions, setdimensions] = useState('');
    const [shape, setshape] = useState('');
    const [count, setcount] = useState('');

  const handleHome = () => {
    // Implement your login logic here
    console.log('Home pressed');
    navigation.navigate('BatchUpdate');
  };

  const handlesignOut = () => {
    // Implement Google Sign-In logic here
    console.log('Google Sign-In pressed');
    navigation.navigate('Login');
  };

  const handleRetake = () => {
    console.log('Facebook Sign-In pressed');
    navigation.navigate('TakePhoto');
  };
  const handleConfirm = () => {
    console.log('Facebook Sign-In pressed');
    navigation.navigate('BatchUpdate');
  };

  const handleCancel = () => {
    // Navigate to the Sign Up screen
    console.log('Navigate to Sign Up');
    navigation.navigate('TakePhoto');
  };

  return (
    <View style={styles.Logincontainer}>
        <View style={styles.header}>
            <TouchableOpacity onPress={handleHome}>
                <Text style={styles.headerButton}>Home</Text>
            </TouchableOpacity>
            <Text style={styles.logo}>💎</Text>
            {/* <Image 
                source={{ uri: './Font_Awesome_5_regular_gem_gray.svg.png' }}
                style={styles.logo}
            /> */}
            <TouchableOpacity onPress={handlesignOut}>
                <Text style={styles.headerButton}>Sign out</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <Text style={styles.title}>Batch Queue</Text>
            <View>
                {/* <Text style={styles.socialButtonText}>Preview</Text> */}
                <TextInput
                    style={styles.input}
                    onChangeText={setGemType}
                    value={gemType}
                    placeholder="ADC852600"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setCompany}
                    value={company}
                    placeholder="CEB1546326"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setCarat}
                    value={company}
                    placeholder="CBC654600"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setSeller}
                    value={company}
                    placeholder="ABE653502"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setsalesPrice}
                    value={company}
                    placeholder="FDA574600"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setdimensions}
                    value={company}
                    placeholder="DFA6153200"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setshape}
                    value={company}
                    placeholder="BED2132100"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setcount}
                    value={company}
                    placeholder="ADE132465"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setcount}
                    value={company}
                    placeholder="CEA349656"
                    editable={false}
                />
            </View>
            <View style={styles.divider}>

            </View>
            <TouchableOpacity onPress={handleConfirm} style={styles.b_Button}>
                <Text style={styles.socialButtonText}>Return to Home Page</Text>
            </TouchableOpacity>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Logincontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    // borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    marginTop:20,
    marginBottom:-10,
  },
  headerButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Choose your color
    padding: 10,
  },
  logo: {
    width: 100, // Adjust as per your logo's dimensions
    height: 50,  // Adjust as per your logo's dimensions
    resizeMode: 'contain',
    marginLeft:80,
    marginTop:10,
    fontSize: 30,
  },
  container: {
    width: '94%',
    maxHeight: '90%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffddf4',
    marginBottom:'10%',
    borderRadius: 25,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container_photo: {
    width: '94%',
    maxHeight: '90%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    // marginBottom:'0%',
    // marginTop: '-10%',
    borderRadius: 25,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: "10%",
    margin:'auto',
  },
  input: {
    width: '100%',
    minWidth: '80%',
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginVertical: 5,
    fontWeight: 'bold',
    backgroundColor:'white',
  },
    input2: {
    width: '100%',
    minWidth: '80%',
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginVertical: 5,
    fontWeight: 'bold',
    backgroundColor: 'white',
    textAlign:'center',
    },
  signInButtonContainer: {
    alignItems: 'center', // Centers the button horizontally
    width: '100%', // Ensures the View takes full width
    marginTop:'3%',
    marginBottom:'3%',
  },
  button: {
    width: '30%', // Adjust the width as needed
    height: 50,
    backgroundColor: '#ffddf4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 5,
  },
  buttonText: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%',
    minWidth: '30%',
    margin: 'auto',
    textAlign:'center',
    // marginLeft: '14%',
  },
  forgotPasswordText: {
    marginVertical: 5,
    marginTop:20,
  },
  divider: {
    height:20,
    width: '100%',
    // backgroundColor: 'black',
    marginVertical: 10,
  },
  b_Button: {
    width: '100%',
    maxWidth: '80%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 5,
    flexDirection: 'row',
    marginBottom: 10,
    borderWidth: 0.1,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom:5,
  },
  socialButtonFacebook: {
    width: '100%',
    minWidth: '60%',
    height: 50,
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
  },
  socialButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 150,

  },
  signUpText: {
    color: 'blue',
    marginLeft: 5,
  },
});

export default BatchQueue;
