import * as SQLite from 'expo-sqlite';

// Open or create the database
const db = SQLite.openDatabase('dictionary.db');

// Function to create the tables in the database
const createDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS words (id INTEGER PRIMARY KEY AUTOINCREMENT, word TEXT, definition TEXT);'
    );
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS favorites (id INTEGER PRIMARY KEY AUTOINCREMENT, word_id INTEGER, FOREIGN KEY(word_id) REFERENCES words(id));'
    );
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS history (id INTEGER PRIMARY KEY AUTOINCREMENT, word_id INTEGER, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY(word_id) REFERENCES words(id));'
    );
  });
};

// Function to insert a word into the database
const insertWord = (word, definition) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO words (word, definition) VALUES (?, ?)', [word, definition]);
  });
};

// Function to fetch all words
const fetchWords = callback => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM words', [], (_, { rows }) => {
      callback(rows._array);
    });
  });
};

export { createDatabase, insertWord, fetchWords };
