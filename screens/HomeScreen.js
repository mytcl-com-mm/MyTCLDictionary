import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import Header from '../components/Header'; // Assuming Header component is defined

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header 
        title="Dictionary App"
        logoUri="https://www.clipartmax.com/png/middle/196-1964901_dictionary-com-logo-dictionary-logo.png" // Placeholder logo URL, replace with real one
        showBackButton={false} // No back button on HomeScreen
      />

      {/* Scrollable Content */}
      <ScrollView style={styles.contentContainer}>
        
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search a word..."
            placeholderTextColor="#888"
          />
        </View>

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Welcome to the Dictionary App!</Text>

        {/* Call-to-Action Image */}
        <Image 
          source={{ uri: 'https://via.placeholder.com/400' }} // Placeholder image, replace with real image
          style={styles.callToActionImage}
        />

        {/* Word of the Day Section */}
        <View style={styles.wordOfTheDaySection}>
          <Text style={styles.wordOfTheDayTitle}>Word of the Day</Text>
          <Text style={styles.wordOfTheDay}>Serendipity</Text>
          <Text style={styles.wordOfTheDayDescription}>
            "Serendipity" refers to the occurrence of events by chance in a happy or beneficial way.
          </Text>
        </View>

        {/* Featured Words Section */}
        <View style={styles.featureSection}>
          <Text style={styles.featureTitle}>Featured Words</Text>
          <View style={styles.featureList}>
            <View style={styles.featureItem}>
              <Text style={styles.featureItemText}>Trending Word: Ephemeral</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureItemText}>Most Searched: Petrichor</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureItemText}>Popular Word: Ineffable</Text>
            </View>
          </View>
        </View>

        {/* Quick Access to Categories */}
        <View style={styles.quickAccessSection}>
          <Text style={styles.sectionTitle}>Quick Access</Text>
          <View style={styles.quickAccessButtons}>
            <TouchableOpacity style={styles.quickAccessButton}>
              <Text style={styles.quickAccessButtonText}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickAccessButton}>
              <Text style={styles.quickAccessButtonText}>Recent</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickAccessButton}>
              <Text style={styles.quickAccessButtonText}>Favorites</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Audio Pronunciation */}
        <View style={styles.audioPronunciationSection}>
          <Text style={styles.sectionTitle}>Audio Pronunciation</Text>
          <TouchableOpacity style={styles.audioButton}>
            <Text style={styles.audioButtonText}>Listen to Word Pronunciation</Text>
          </TouchableOpacity>
        </View>

        {/* Educational Tip Section */}
        <View style={styles.educationalTipSection}>
          <Text style={styles.sectionTitle}>Did You Know?</Text>
          <Text style={styles.tipText}>
            "The longest word in the dictionary is 'pneumonoultramicroscopicsilicovolcanoconiosis,' a lung disease caused by inhaling fine silica dust."
          </Text>
        </View>

        {/* Call to Action Button for More Features */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => alert('Explore More Features!')}>
            <Text style={styles.buttonText}>Explore More Features</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  searchBarContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  searchInput: {
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1.2,
  },
  callToActionImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginVertical: 25,
    resizeMode: 'contain',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  wordOfTheDaySection: {
    marginBottom: 30,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  wordOfTheDayTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 5,
  },
  wordOfTheDay: {
    fontSize: 30,
    fontWeight: '700',
    color: '#3B82F6',
  },
  wordOfTheDayDescription: {
    fontSize: 18,
    color: '#555',
    marginTop: 10,
  },
  featureSection: {
    marginBottom: 30,
  },
  featureTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  featureList: {
    marginLeft: 10,
  },
  featureItem: {
    paddingVertical: 8,
  },
  featureItemText: {
    fontSize: 18,
    color: '#555',
  },
  quickAccessSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  quickAccessButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickAccessButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 5,
  },
  quickAccessButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  audioPronunciationSection: {
    marginBottom: 30,
  },
  audioButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  audioButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  educationalTipSection: {
    marginBottom: 30,
  },
  tipText: {
    fontSize: 18,
    color: '#555',
    fontStyle: 'italic',
    marginTop: 10,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#3B82F6',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
    borderWidth: 1,
    borderColor: '#0D6EFD',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    letterSpacing: 1.2,
  },
});

export default HomeScreen;
