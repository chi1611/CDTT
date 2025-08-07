import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    Image,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const ProfileScreen = () => {
  const [isUSCitizen, setIsUSCitizen] = React.useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="#ff4d4d" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#ff4d4d" />
        </TouchableOpacity>
      </View>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://i.imgur.com/4ZQZ4fS.png',
          }}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="pencil" size={16} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Personal Info */}
      <Text style={styles.sectionTitle}>Personal Info</Text>
      <View style={styles.card}>
        <Text style={styles.infoText}>Your name  <Text style={styles.bold}>Tommy Jason</Text></Text>
        <Text style={styles.infoText}>Occupation  <Text style={styles.bold}>Manager</Text></Text>
        <Text style={styles.infoText}>Employer  <Text style={styles.bold}>Overlay Design</Text></Text>
        <View style={styles.switchRow}>
          <Text style={styles.infoText}>U.S Citizen</Text>
          <Switch
            value={isUSCitizen}
            onValueChange={setIsUSCitizen}
            trackColor={{ false: '#ccc', true: '#ff4d4d' }}
            thumbColor={isUSCitizen ? '#fff' : '#fff'}
          />
        </View>
      </View>

      {/* Contact Info */}
      <Text style={styles.sectionTitle}>Contact Info</Text>
      <View style={styles.card}>
        <Text style={styles.infoText}>Phone  <Text style={styles.bold}>+234 806 2856 543</Text></Text>
        <Text style={styles.infoText}>Email  <Text style={styles.bold}>segunphilips@mail.com</Text></Text>
      </View>

      {/* Edit Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: '38%',
    backgroundColor: '#ff4d4d',
    borderRadius: 20,
    padding: 4,
    borderWidth: 2,
    borderColor: '#fff',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#ff4d4d',
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
