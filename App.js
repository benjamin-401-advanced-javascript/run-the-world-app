/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Button, TextInput,
} from 'react-native';

export default function App() {
  const [usernameText, setusernameText] = useState('');
  const [passwordText, setpasswordText] = useState('');

  const handleUsernameInput = (enteredText) => {
    setusernameText(enteredText);
  };

  const handleSigninSubmit = () => {
    // console.log(usernameText, passwordText);
  };

  return (
    <View style={styles.screen}>
      <View >

        <TextInput
          placeholder='Username'
          onChangeText={handleUsernameInput}
          value={usernameText}
        />
        <TextInput placeholder='Password' />
        <Button
          title='Sign In'
          onPress={handleSigninSubmit}
        />

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
