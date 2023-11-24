import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000220',
    padding: 20,
    paddingTop: 40,
  },
  searchInput: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 10,
    color: "#FFF",
  },
  placeholder: {
    color: 'silver',
  },
  showContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  showImage: {
    width: 200,
    height: 300,
    marginBottom: 10,
    borderRadius: 20,
  },
  showTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'silver',
    paddingBottom: 20,
    textAlign: "center",

  }
});


const SearchScreen = () => {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();

  const processQuery = async () => {
    try {
      const config = { params: { q: searchTerm } };
      const response = await axios.get('https://api.tvmaze.com/search/shows', config);
      return response.data;
    } catch (error) {
      console.log('Connection Timeout', error);
      return []; // Return empty array if there's an error
    }
  };

  const makeShows = (data) => {
    setShows(data);
  };

  const deleteShows = () => {
    setShows([]);
  };

  const handleSearch = async () => {
    deleteShows();
    const response = await processQuery();
    if (response.length > 0) {
      makeShows(response);
    } else {
      console.log('Cannot display');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.searchText}>Search</Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for shows"
        placeholderTextColor='gray'
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        onSubmitEditing={handleSearch}
      />
      <ScrollView>
        {shows.map((show) => (
          <TouchableOpacity
            key={show.show.id}
            style={styles.showContainer}
            onPress={() => navigation.navigate('Detail', { show: show.show })}
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

export default SearchScreen;
