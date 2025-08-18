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
  const [user, setUser] = useState<any>(null);
  const [isUSCitizen, setIsUSCitizen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await GET_USER_INFO();
        setUser(response.data);
        setIsUSCitizen(response.data.isUSCitizen || false); // adjust based on your API
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };

    fetchUser();
  }, []);
    return (
        <View style={{ flex: 1, padding: 20 }}>
        {user ? (
            <>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{user.name}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Phone: {user.phone}</Text>
            <Text>Address: {user.address}</Text>
            <Text>Is US Citizen: {isUSCitizen ? 'Yes' : 'No'}</Text>
            </>
        ) : (
            <Text>Loading user information...</Text>
        )}
        </View>
    );  
}
    export default ProfileScreen;