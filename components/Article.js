import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';

const Article = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        }}
        style={styles.image}
      />
      <View style={{ padding: 16 }}>
        <Text style={styles.title}>
          Tech News about coding Language Application using react-native
        </Text>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
          ipsam nam molestias perspiciatis explicabo non natus cupiditate,
          perferendis rerum,
        </Text>
        <View style={styles.data}>
          <Text style={styles.by}>
            By: <Text style={styles.author}>Digital Zoro</Text>
          </Text>
          <Text style={styles.date}>Feb 22nd 2023</Text>
        </View>
        <View style={styles.source}>
          <Text style={styles.sourceText}>
            Source: <Text style={styles.sourceAuthor}> TechZoro</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    marginTop: 19,
    marginBottom: 8,
    marginHorizontal: 25,
    borderRadius: 40,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowOffset: { height: 5, width: 5 },
    elevation: 5,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
    marginTop: 10,
  },
  description: {
    fontSize: 17,
    fontWeight: '400',
    marginTop: 7,
  },
  data: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  by: {
    fontSize: 15,
  },
  author: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FF6666',
  },
  source: {
    marginTop: 8,
  },
  sourceText: {
    fontSize: 15,
  },
  sourceAuthor: {
    color: '#FF6666',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
