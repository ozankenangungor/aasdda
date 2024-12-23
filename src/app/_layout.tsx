import '../../global.css';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { OverlayProvider } from 'stream-chat-expo';

export default function Layout() {
  return (
    <GestureHandlerRootView className="flex-1">
      <OverlayProvider>
        <Stack />
      </OverlayProvider>
    </GestureHandlerRootView>
  );
}
