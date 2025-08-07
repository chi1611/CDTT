import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const ChatScreen = () => {
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#ff4d4d" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <Ionicons name="notifications" size={24} color="#ff4d4d" />
      </View>

      {/* Chat content */}
      <ScrollView contentContainerStyle={styles.chatContainer}>
        <View style={styles.botMessage}>
          <Text style={styles.botText}>
            Hello! my name is <Text style={styles.bold}>Food Runs</Text>{'\n'}
            before we start, what is your name?
          </Text>
        </View>

        <View style={styles.userMessage}>
          <Text style={styles.userText}>Segun Phillips</Text>
        </View>

        <View style={styles.botMessage}>
          <Text style={styles.botText}>
            Hello! <Text style={styles.highlight}>Segun 👋</Text>. I can
            converse{'\n'}in your preferred language. How{'\n'}may I help you
            today?
          </Text>
        </View>

        <View style={styles.userMessage}>
          <Text style={styles.userText}>
            Is there Basmati Rice{'\n'}and pepper chicken?
          </Text>
        </View>

        <View style={styles.typing}>
          <Text style={styles.dots}>● ● ●</Text>
        </View>
      </ScrollView>

      {/* Input bar */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachmentButton}>
          <Ionicons name="link-outline" size={24} color="#ff4d4d" />
        </TouchableOpacity>
        <TextInput
          placeholder="Type here..."
          style={styles.input}
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="arrow-redo" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    paddingRight: 8,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  chatContainer: {
    padding: 16,
    paddingBottom: 100,
  },

  botMessage: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },

  userMessage: {
    backgroundColor: '#ff4d4d',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },

  botText: {
    fontSize: 16,
    color: '#000',
  },

  userText: {
    fontSize: 16,
    color: '#fff',
  },

  bold: {
    fontWeight: 'bold',
  },

  highlight: {
    fontWeight: 'bold',
    color: '#ff4d4d',
  },

  typing: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  dots: {
    fontSize: 20,
    letterSpacing: 4,
    color: '#888',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 12,
    paddingVertical: 8,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
  },

  input: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 8,
  },

  attachmentButton: {
    padding: 4,
  },

  sendButton: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 100,
  },
});
