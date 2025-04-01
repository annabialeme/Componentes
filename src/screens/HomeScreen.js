import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

const HomeScreen = () => {
  return (
    <ScrollView>
      <Header title="Bem-vindo à Home" />
      <Card
        title="Card 1"
        description="Gavi"
        Image style ={styles.image} source ={require('../img/gavi.jpg')} />
      
      <Card
        title="Card 2"
        description="Gavi com o amigo"
        Image style ={styles.image} source ={require('../img/gavicomamigo.jpg')} />
      
    </ScrollView>
  );
};

export default HomeScreen;


















