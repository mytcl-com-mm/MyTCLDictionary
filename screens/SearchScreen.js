import React from 'react';
import { View } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = ({ navigation }) => {
  const handleSearch = (query) => {
    navigation.navigate('WordDetail', { word: query });
  };

  return (
    <View>
      <SearchBar onSearch={handleSearch} />
    </View>
  );
};

export default SearchScreen;
