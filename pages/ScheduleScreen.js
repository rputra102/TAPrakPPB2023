import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView } from 'react-native';

const ScheduleScreen = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch(
          'https://api.tvmaze.com/schedule/web?date=2023-12-24'
        );
        const data = await response.json();
        setSchedule(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    fetchSchedule();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
    <FlatList
      style={styles.list}
        data={schedule} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
            console.log(item);

            const showImage = item._embedded?.show?.image?.original || 'No image available';
            const showName = item._embedded?.show?.name || 'No name available';
            const showLang = item._embedded?.show?.language || 'No language available';
            const airtime = item.airtime || 'No airtime available';
          
            return (
              <View style={styles.item}>
                <Image source={{ uri: showImage }} style={styles.showImage}/>
                <Text style={styles.showName}>{showName}</Text>
                <Text style={styles.showTime}>Time: {airtime}</Text>
                <Text style={styles.showLang}>Language: {showLang}</Text>
                {/* Add more details as needed */}
              </View>
        )}
            }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    backgroundColor: '#000220',
  },
  FlatList: {
    flexGrow: 1,
  },
  item: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    padding: 10,
    borderRadius: 25,
  },
  showName: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 4,
    color: 'white',
  },
  showTime: {
    fontStyle: 'italic',
    color: 'lightgray',
    fontSize: 9,
  },
  showLang: {
    color: 'lightblue',
    fontSize: 8,
    marginTop: 1,
  },
  Image: {
    display: 'flex',
    width: 20,
    height: 20,
    borderRadius: 10,
  }
});

export default ScheduleScreen;
