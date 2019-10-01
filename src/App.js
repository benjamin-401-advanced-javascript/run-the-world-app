import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  return (
    <View style={styles.container}>
      <View>

      </View>
      <View>

      </View>
      <Text>{outputText}</Text>
      <Button title='Change Text' onPress={() => setOutputText('The updated text!')} />
    </View>
  );
}
