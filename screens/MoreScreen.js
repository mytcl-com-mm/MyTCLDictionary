import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const MoreScreen = ({ navigation }) => {
  // Data array to represent the table rows
  const options = [
    { id: '1', title: 'History', route: 'History' },
    { id: '2', title: 'Add Word', route: 'AddWord' },
    { id: '3', title: 'Word of the Day', route: 'WordOfTheDay' },
    { id: '4', title: 'Settings', route: 'Settings' },
    { id: '5', title: 'About', route: 'About' },
  ];

  // Render function for each row
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() => navigation.navigate(item.route)}>
      <Text style={styles.rowText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>More Options</Text>

      {/* Table-like View */}
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#333',
    textAlign: 'left',
    marginVertical: 20,
  },
  row: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  rowText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});

export default MoreScreen;
