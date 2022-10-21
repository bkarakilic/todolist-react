import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Page2() {
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
