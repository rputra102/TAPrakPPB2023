import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import Header from "../components/Header";

export default ProfileDetail = () => {

  
  return (
      <View style={styles.container}>
       <Header headerText={'Profile'} flexPosition={'flex-start'} />
        <View style={[styles.card, styles.profileCard]}>
          <Image
            style={styles.avatar}
            source={{ uri: 
              'https://media-sin6-1.cdn.whatsapp.net/v/t61.24694-24/366388246_902470724534419_5178474117599528017_n.jpg?ccb=11-4&oh=01_AdSaks4v2xiq6SPpflLHhqdFYqlGBn2UUww7JC3aeFRHHw&oe=6568816A&_nc_sid=e6ed6c&_nc_cat=104' 
            }}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTittle}>Ramadhin Putra Fadhli</Text>
          <Text style={styles.titledesc}> NIM: 21120121140101</Text>
          <Text style={styles.titledesc}> Praktikum Perangkat Bergerak 2023</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTittledesc}>Apa Itu Mazee.id?</Text>
          <Text style={styles.titledesc}>
            Aplikasi ini merupakan prototype untuk TA PPB menggunakan API TVMaze dan dikembangkan dengan bahasa
            pemrograman React Native. API ini mengambil data acara TV random dan obscure yang disediakan oleh TVMaze.
          </Text>
        </View>
        
        <View>
          <Text style={styles.bottext}>Mazee.ID</Text>
          <Text style={styles.bottext2}>by Ramadhin Putra Fadhli</Text>
          <Text style={styles.bottext3}>All Rights Reserved, 2023</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    padding: 10,
    backgroundColor: '#000220',
  },
  cardTittle: {
    color: 'silver',
    fontSize: 16,
    marginBottom: 5,
  },
  bottext: {
    color: 'darkgray',
    textAlign: 'center',
    fontSize: 10,
    paddingTop: "15%",
  },
  bottext2: {
    color: 'darkgray',
    textAlign: 'center',
    fontSize: 10,
    paddingTop: 1,
  },
  bottext3: {
    color: 'darkgray',
    textAlign: 'center',
    fontSize: 10,
    paddingTop: 2,
  },
  cardTittledesc: {
    color: 'silver',
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginTop: 40,
  },
  card: {
    backgroundColor: '#00001a',
    borderRadius: 10,
    padding: 10,
    height: "50",
    marginTop: 10,
    elevation: 20, 
    shadowColor: "silver",
  },
  profileCard: {
    height: 200,
    alignItems: 'center',
    marginTop: 20,
  },
  name: {
    marginTop: 10,
    fontSize: 22,
    color: 'silver',
  },
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',
  },
  photosCard: {
    marginTop: 10,
  },
  photo: {
    width: 100,
    height: 100,
    marginTop: 5,
    marginRight: 5,
  },
  titledesc: {
    color: '#808080',
    fontSize: 14,
  }
})




