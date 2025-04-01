import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Meu Perfil" />
      <Text style={styles.text}>Este é o seu perfil!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  text: {
    fontSize: 18,
  },
});

export default ProfileScreen;