import { Stack, Link, Redirect } from 'expo-router';
import React from 'react';

import { Button } from '~/src/components/Button';
import { Container } from '~/src/components/Container';
import { ScreenContent } from '~/src/components/ScreenContent';

export default function Home() {
  return <Redirect href="/(protected)" />;
  // return (
  //   <>
  //     <Stack.Screen options={{ title: 'Home' }} />
  //     <Container>
  //       <ScreenContent path="src/app/index.tsx" title="Home" />
  //       <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
  //         <Button title="Show Details" />
  //       </Link>
  //     </Container>
  //   </>
  // );
}
