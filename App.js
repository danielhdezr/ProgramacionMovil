import React from 'react';
import { SafeAreaView } from 'react-native';
import FeedScreen from './Screens/FeedScreen';
import ReportCard from './Components/ReportCard';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FeedScreen />
    </SafeAreaView>
  );
}
