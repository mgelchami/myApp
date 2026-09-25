import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="origins"
        options={{
          title: 'Origins',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="globe" color={color} />,
        }}
      />
      <Tabs.Screen
        name="brewing"
        options={{
          title: 'Brew Guide',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="mug.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="glossary"
        options={{
          title: 'Glossary',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="book.closed.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
