import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Article from '../components/Article';
import axios from 'axios';
import { SafeAreaView } from 'react-native';
import { ActivityIndicator } from 'react-native';

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNews = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=in&apiKey=ad9bd660150b45adb5f24c2c5193aaca',
        {
          params: {
            category: 'sports',
          },
        }
      )
      .then((response) => {
        setArticles(response.data.articles);
        setIsLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator color='red' size="large" style={styles.loadingIndicator} />
      ) : (
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
            />
          )}
          keyExtractor={(item) => item.title}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
