import '../global.css';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <GestureHandlerRootView className="flex-1">
      <Stack />
    </GestureHandlerRootView>
  );
}
