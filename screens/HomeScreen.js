import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Article from '../components/Article';

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} styles={styles.container}>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
