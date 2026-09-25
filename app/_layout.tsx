import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme ?? 'light';
  const colors = Colors[theme];

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerTintColor: colors.tint,
          headerStyle: { backgroundColor: colors.background },
          headerTitleStyle: { color: colors.text },
          headerBackTitle: 'Back',
        }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="origins/[id]" options={{ title: 'Origin' }} />
        <Stack.Screen name="brewing/[id]" options={{ title: 'Brew Method' }} />
        <Stack.Screen name="species" options={{ title: 'Species & Varieties' }} />
        <Stack.Screen name="processing" options={{ title: 'Processing Methods' }} />
        <Stack.Screen name="roasting" options={{ title: 'Roasting' }} />
        <Stack.Screen name="history" options={{ title: 'History of Coffee' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
