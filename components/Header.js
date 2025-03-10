import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, showBackButton, backgroundColor, textColor, logoUri }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor || '#3B82F6' }]}>
      {/* Back Button (Optional) */}
      {showBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={[styles.backButtonText, { color: textColor || '#fff' }]}>
            {'<'}
          </Text>
        </TouchableOpacity>
      )}

      {/* Logo Column */}
      <View style={styles.logoContainer}>
        {logoUri && (
          <Image
            source={{ uri: logoUri }} // Add the logo URL or local source here
            style={styles.logo}
          />
        )}
      </View>

      {/* Title Column */}
      <Text style={[styles.title, { color: textColor || '#fff' }]}>{title}</Text>

      {/* Empty View for Right Side (Can be used for icons) */}
      <View style={styles.emptyView}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Subtle border for separation
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Adds a subtle shadow effect for Android
  },
  backButton: {
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: '600',
  },
  logoContainer: {
    width: 50, // Control the size of the logo container
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 40, // Set the size of the logo image
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    flex: 1, // Title takes the remaining space
  },
  emptyView: {
    width: 30, // Empty space to maintain header structure
  },
});

export default Header;
