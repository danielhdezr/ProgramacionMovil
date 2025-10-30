import React from 'react';
import FeedScreen from '../Screens/FeedScreen';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ReportCard = ({ name, location, time, description, image }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
       
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={image} style={styles.reportImage} />
      </View>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.actions}>
        <TouchableOpacity><Text style={styles.action}> Me gusta</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.action}> Comentar</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.action}> Compartir</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  header: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  info: { flex: 1 },
  name: { fontWeight: '600', fontSize: 16 },
  location: { color: '#777' },
  time: { color: '#999', fontSize: 12 },
  imageContainer: { marginVertical: 10 },
  reportImage: { width: '100%', height: 150, borderRadius: 10, backgroundColor: '#f2f2f2' },
  description: { marginBottom: 10 },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
  },
  action: { color: '#555' },
});

export default ReportCard;
