import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Article from '../components/Article';
import axios from 'axios';

const SearchScreen = (props) => {
  const [searchText, setSearchText] = useState('');
  const [articles, setArticles] = useState('');

  const searchArticle = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=in&apiKey=ad9bd660150b45adb5f24c2c5193aaca',
        {
          params: {
            category: 'sports',
            q: searchText,
          },
        }
      )
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };
  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={searchArticle}
      />
      <Pressable onPress={props.goToArticle}>
        <FlatList
          data={articles}
          renderItem={({ item }) => (
            <Article
              urlToImage={item.urlToImage}
              title={item.title}
              description={item.description}
              author={item.author}
              publishedAt={item.publishedAt}
              sourceName={item.source.name}
              url={item.url}
            />
          )}
          keyExtractor={(item) => item.title}
        />
      </Pressable>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 70,
  },
});
