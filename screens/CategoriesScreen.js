import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';

const CategoriesScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const db = SQLite.openDatabase('dictionary.db');

  useEffect(() => {
    // Fetch categories from the database
    db.transaction(tx => {
      tx.executeSql('SELECT DISTINCT category FROM words', [], (_, { rows }) => {
        setCategories(rows._array);
      });
    });
  }, []);

  const handleCategoryPress = (category) => {
    navigation.navigate('CategoryDetail', { category });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Word Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.categoryItem} 
            onPress={() => handleCategoryPress(item.category)}
          >
            <Text style={styles.categoryText}>{item.category}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f8f8' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  categoryItem: {
    padding: 15,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    marginBottom: 10,
  },
  categoryText: { color: 'white', fontSize: 18 },
});

export default CategoriesScreen;
