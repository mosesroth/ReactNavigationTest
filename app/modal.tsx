import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ModalScreen() {
  // Use Expo Router's useLocalSearchParams to get parameters
  const { itemId = 'default' } = useLocalSearchParams();
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
    </View>
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