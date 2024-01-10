import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BatchUpdate = ({ navigation }) => {

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

  const handleNewBatch = () => {
    // Implement Facebook Sign-In logic here
    console.log('Facebook Sign-In pressed');
    navigation.navigate('TakePhoto');
  };

  const handleExistingBatch = () => {
    // Navigate to the Sign Up screen
    console.log('Navigate to Sign Up');
    navigation.navigate('BatchQueue');
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
            <Text style={styles.title}>Batch Update</Text>
            <Text style={styles.forgotPasswordText}>Select Batch Type</Text>

            <TouchableOpacity onPress={handleNewBatch} style={styles.b_Button}>
                <Text style={styles.socialButtonText}>New Batch</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleExistingBatch} style={styles.b_Button}>
                <Text style={styles.socialButtonText}>Existing Batch</Text>
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
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: "10%",
    margin:'auto',
    marginBottom:80,
    marginTop:-100,
  },
  input: {
    width: '100%',
    minWidth: '60%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginVertical: 5,
    fontWeight: 'bold',
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
    marginBottom:50,
    fontSize: 18,
  },
  divider: {
    height:5,
    width: '100%',
    backgroundColor: 'black',
    marginVertical: 10,
  },
  b_Button: {
    width: '100%',
    minWidth: '65%',
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
    marginBottom:20,
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

export default BatchUpdate;
