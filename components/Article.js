import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import moment from 'moment';
import * as WebBrowser from 'expo-web-browser';

const Article = (props) => {
  const goToArticle = () => {
    WebBrowser.openBrowserAsync(props.url);
  };

  return (
    <Pressable style={styles.container} onPress={goToArticle}>
      <Image
        source={{
          uri: props.urlToImage,
        }}
        style={styles.image}
      />
      <View style={{ padding: 16 }}>
        <Text style={styles.title}>{props.title}</Text>

        <Text style={styles.description} numberOfLines={3}>
          {props.description}
        </Text>
        <View style={styles.data}>
          <Text style={styles.by}>
            By: <Text style={styles.author}>{props.author}</Text>
          </Text>
          <Text style={styles.date}>
            {moment(props.publishedAt).format('MMM DD YY')}
          </Text>
        </View>
        <View style={styles.source}>
          <Text style={styles.sourceText}>
            Source: <Text style={styles.sourceAuthor}> {props.sourceName}</Text>
          </Text>
        </View>
      </View>
    </Pressable>
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
    // marginTop: 5,
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
