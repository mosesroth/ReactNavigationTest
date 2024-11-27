import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

type HomeTabsParamList = {
  Main: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<HomeTabsParamList>();

// Screen Components
function MainScreen() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main Screen</Text>
      <Button 
        title="Go to Details"
        onPress={() => {
          router.push({
            pathname: '/modal',
            params: { itemId: '123' }
          });
        }}
      />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
}

// Export the main screen component
export default function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Main" 
        component={MainScreen}
        options={{
          title: 'Main',
          headerShown: true
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerShown: true
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
