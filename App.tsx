import React from 'react';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';

export default function App() {
  const handlePress = () => {
    // F l-web kay-khdem alert 3adi
    alert('Bienvenue dans le TP1 de Développement Mobile !');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bonjour Campus !</Text>
      <Text style={styles.subtitle}>IAIL S5 - Developpement mobile</Text>
      
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Bienvenue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
