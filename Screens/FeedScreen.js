import React from 'react';
import ReportCard from '../Components/ReportCard';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';



const FeedScreen = () => {
  const reports = [
    {
      id: 1,
      name: 'Ana García',
      location: 'Centro de la ciudad',
      time: 'Hace 2 horas',
      description: 'Problema con el alumbrado público en la calle principal',
      
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      location: 'Parque Central',
      time: 'Hace 4 horas',
      description: 'Basura acumulada en los contenedores del parque',
      
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Feed de Reportes</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>+ Agregar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {reports.map((r) => (
          <ReportCard key={r.id} {...r} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  title: { fontSize: 22, fontWeight: 'bold' },
  addButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  addText: { color: '#fff', fontWeight: '600' },
});

export default FeedScreen;
