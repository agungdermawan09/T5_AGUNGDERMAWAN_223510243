import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>
        Profile Screen
      </Text>
      <Button
        mode="outlined"
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        Back to Home
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});
