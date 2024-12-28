import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>
        Welcome to Home Screen
      </Text>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Ini adalah contoh</Text>
        </Card.Content>
      </Card>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        Go to Profile
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
    textAlign: 'center',
  },
  card: {
    marginVertical: 20,
    width: '90%',
  },
  button: {
    marginTop: 20,
  },
});
