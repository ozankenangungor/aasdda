import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useCreateChatClient, Chat, MessageType } from 'stream-chat-expo';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzIn0.RPJAETKIIwAVNJwsO5kWY-JuUnfiZlG0SR0aVZbxX4w';
export default function ChatClient({ children }: { children: React.ReactNode }) {
  const client = useCreateChatClient({
    apiKey: 'vf7c838qn599',
    tokenOrProvider: token,
    userData: {
      id: '123',
      name: 'Ozan',
    },
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', 'the_park', {
      name: 'The Park',
    });
    channel.watch();
  }, [client]);

  if (!client) {
    return (
      <View className="flex-1 items-center justify-center bg-amber-50">
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return <Chat client={client}>{children}</Chat>;
}
