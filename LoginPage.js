import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login pressed');
    navigation.navigate('BatchUpdate');
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    console.log('Google Sign-In pressed');
  };

  const handleFacebookSignIn = () => {
    // Implement Facebook Sign-In logic here
    console.log('Facebook Sign-In pressed');
  };

  const handleSignUp = () => {
    // Navigate to the Sign Up screen
    console.log('Navigate to Sign Up');
  };

  return (
    <View style={styles.Logincontainer}>
        <View style={styles.container}>
            <Text style={styles.title}>GemStudio®</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {/* <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity> */}
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>

            <View style={styles.divider} />
            <Text style={styles.forgotPasswordText}>OR</Text>

            <TouchableOpacity onPress={handleGoogleSignIn} style={styles.socialButtonGoogle}>
                <Text style={styles.socialButtonText}>Sign in with Google   </Text>
                <Icon name="google" size={20} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFacebookSignIn} style={styles.socialButtonFacebook}>
                <Text style={styles.socialButtonText}>Sign in with Facebook  </Text>
                <Icon name="facebook" size={20} color="white" />
            </TouchableOpacity>

            <View style={styles.signUpContainer}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.signUpText}> Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.signInButtonContainer}>
            <TouchableOpacity onPress={handleLogin} style={styles.b_Button}>
                <Text style={styles.buttonText}>Sign in</Text>
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
  container: {
    width: '94%',
    maxHeight: '90%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffddf4',
    marginTop:'10%',
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
  b_Button: {
    width: '100%',
    maxWidth: '65%',
    height: 50,
    backgroundColor: '#ffddf4',
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
    height:1,
    width: '100%',
    backgroundColor: 'black',
    marginVertical: 10,
    marginBottom:10,
    marginTop:20,
  },
  socialButtonGoogle: {
    width: '100%',
    minWidth: '60%',
    height: 50,
    backgroundColor: '#dc143c',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    marginBottom: 10,
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
    color: 'white',
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

export default LoginPage;
