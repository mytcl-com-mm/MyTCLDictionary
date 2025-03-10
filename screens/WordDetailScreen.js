import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';

const WordDetailScreen = ({ route }) => {
  const { word } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.word}>{word}</Text>
      <Text style={styles.meaning}>Meaning: Example meaning of {word}</Text>
      <Button title="🔊 Pronounce" onPress={() => Speech.speak(word)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  word: { fontSize: 24, fontWeight: 'bold' },
  meaning: { fontSize: 18, marginTop: 10 },
});

export default WordDetailScreen;
