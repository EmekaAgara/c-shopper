import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // statusBarHidden={true}
      }}
    >
      {/* Optionally configure static options outside the route.*/}
      {/* <Stack.Screen name="index" options={{}} /> */}
      <Stack.Screen name="screens/home" options={{}} />
      <Stack.Screen name="screens/chat" options={{}} />
      <Stack.Screen name="screens/aichat" options={{}} />
      <Stack.Screen name="screens/gemini" options={{}} />
      <Stack.Screen name="screens/products" options={{}} />
    </Stack>
  );
}
