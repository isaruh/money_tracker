import { Text, View } from 'react-native';
import "./global.css";
import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { initDB } from './src/utils/database';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  useEffect(() => {
    initDB();
  }, []);
  
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
