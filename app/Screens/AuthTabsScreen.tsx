import React, { useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const AuthTabsScreen = ({ navigation }: any) => {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.imgur.com/J9j7v2R.png' }}
        style={styles.headerImage}
        resizeMode="contain"
      />

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, isRegister && styles.activeTab]}
          onPress={() => setIsRegister(true)}
        >
          <Text style={[styles.tabText, isRegister && styles.activeTabText]}>
            Create Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, !isRegister && styles.activeTab]}
          onPress={() => setIsRegister(false)}
        >
          <Text style={[styles.tabText, !isRegister && styles.activeTabText]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email address"
          keyboardType="email-address"
        />
        {isRegister && (
          <TextInput style={styles.input} placeholder="Full Name" />
        )}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home'); // or HomeTabs, tùy theo bạn cấu hình Stack
          }}
        >
          <Text style={styles.buttonText}>
            {isRegister ? 'Sign Up' : 'Login'}
          </Text>
        </TouchableOpacity>

        {/* Google Button */}
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }}
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>
            {isRegister ? 'Sign up' : 'Sign in'} with Google
          </Text>
        </TouchableOpacity>

        {/* Forgot password link */}
        {!isRegister && (
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AuthTabsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerImage: {
    width: '100%',
    height: 150,
    marginTop: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 12,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  activeTab: {
    borderColor: '#ff4d4d',
  },
  tabText: {
    fontSize: 16,
    color: '#888',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#ff4d4d',
  },
  formContainer: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#ff4d4d',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 12,
    marginTop: 16,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  googleButtonText: {
    fontWeight: '600',
  },
  forgotText: {
    color: '#007bff',
    textAlign: 'center',
    marginTop: 16,
  },
});
