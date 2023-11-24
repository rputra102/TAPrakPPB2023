import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Header from "../components/Header";
import DetailScreen from './DetailScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000220',
    padding: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 16,
  },
  horizontalScroll: {
    height: 500,
    marginBottom: 0,
  },
  verticalScroll: {
    paddingBottom: 100,
  },
  showContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  showImage: {
    width: 200,
    height: 300,
    borderRadius: 15,
  },
  showTitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

const HomeScreen = () => {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=trending');
        setShows(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  const makeShows = (data) => {
    setShows(data);
  };

  const deleteShows = () => {
    setShows([]);
  };

  const handleSearch = async () => {
    deleteShows();
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    if (response.data.length > 0) {
      makeShows(response.data);
    } else {
      console.log('Cannot display');
    }
  };

  return (
    <View style={styles.container}>
      <Header headerText={'For You'} flexPosition={'flex-start'} />
      <ScrollView
        contentContainerStyle={styles.verticalScroll}
        showsVerticalScrollIndicator={false}
      >
        {shows.map((show) => (
        <TouchableOpacity
          key={show.show.id}
          style={styles.showContainer}
          onPress={() => {
            navigation.navigate('Detail', { show: show.show });
            }}
          >
            {show.show.image && (
              <Image source={{ uri: show.show.image.medium }} style={styles.showImage} />
            )}
            <Text style={styles.showTitle}>{show.show.name}</Text>
        </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
