import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header';
import axios from 'axios';

const DetailScreen = ({ route }) => {
  const { show } = route.params;
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    async function fetchSeasons() {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${show.id}/seasons`);
        setSeasons(response.data);
      } catch (error) {
        console.error("Error fetching seasons: ", error);
      }
    }

    fetchSeasons();
  }, [show.id]);

  const fetchEpisodesForSeason = async (seasonId) => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/seasons/${seasonId}/episodes`);
      setEpisodes(response.data);
      setSelectedSeason(seasonId);
      setShowDropdown(false); // Close dropdown after selecting a season
    } catch (error) {
      console.error("Error fetching episodes: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Header headerText={show.name} flexPosition={'flex-start'} />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {show.image && (
          <Image source={{ uri: show.image.medium }} style={styles.showImage} />
        )}
        <Text style={styles.showTitle}>{show.name}</Text>
        <Text style={styles.showSummary}>{show.summary}</Text>
        <Text style={styles.showLang}>Language: {show.language}</Text>
        <Text style={styles.premiered}>Premiered In: {show.premiered}</Text>
        <Text style={styles.subtitle}>Seasons:</Text>
        <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
          <Text style={styles.dropdownHeader}>
          {selectedSeason ? `Season ${seasons.find(season => season.id === selectedSeason).number} ${seasons.find(season => season.id === selectedSeason).name}` : 'Select a season'}
          </Text>
        </TouchableOpacity>
        {showDropdown && (
          <View style={styles.dropdownContainer}>
            <FlatList
              data={seasons}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => fetchEpisodesForSeason(item.id)}
                >
                  <Text style={styles.dropdownText}>{`Season ${item.number}: `}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
        {selectedSeason && (
          <>
            <Text style={styles.subtitle}>Episodes:</Text>
            <FlatList
              data={episodes}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.episodeItem}>
                  <Text style={styles.episodeText}>{`${item.name}`}</Text>
                  {/* Additional episode details if available */}
                </View>
              )}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000220',
    padding: 20,
    paddingTop: 40,
  },
  contentContainer: {
  },
  showImage: {
    width: 200,
    height: 300,
    borderRadius: 15,
    marginBottom: 10,
    alignSelf: 'center',
  },
  showTitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  showSummary: {
    color: 'silver'
  },
  showLang: {
    color: 'gray',
  },
  premiered: {
    color: 'lightblue',
    fontStyle: 'italic',
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  dropdownHeader: {
    color: '#fff',
    backgroundColor: 'midnightblue',
    width: '35%',
    fontSize: 16,
    marginTop: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 20,
    textAlign: 'center',
  },
  dropdownContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    marginTop: 5,
    maxHeight: 150,
    alignItems: 'baseline',
  },
  dropdownItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    alignItems: 'flex-start',
  },
  dropdownText: {
    color: '#fff',
    fontSize: 16,
    paddingLeft: 10,
  },
  episodeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  episodeText: {
    color: '#fff',
    fontSize: 16,
  },
  // Additional styles for other details if needed
});

export default DetailScreen;
