import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { brewMethods, type BrewMethod } from '@/constants/coffee-data';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function BrewingScreen() {
  const theme = useColorScheme() ?? 'light';
  const colors = Colors[theme];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <ThemedText type="title">Brew Guide</ThemedText>
          <ThemedText style={[styles.subtitle, { color: colors.muted }]}>
            {brewMethods.length} methods, each with grind size, ratio, water temperature, and
            step-by-step instructions.
          </ThemedText>
        </View>

        <View style={styles.list}>
          {brewMethods.map((method) => (
            <BrewRow key={method.id} method={method} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function BrewRow({ method }: { method: BrewMethod }) {
  const theme = useColorScheme() ?? 'light';
  const colors = Colors[theme];
  return (
    <Link href={{ pathname: '/brewing/[id]', params: { id: method.id } }} asChild>
      <Pressable style={[styles.row, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <View style={[styles.iconWrap, { backgroundColor: colors.tint }]}>
          <IconSymbol name="mug.fill" size={20} color={theme === 'light' ? '#fff' : '#241B14'} />
        </View>
        <View style={styles.rowTextWrap}>
          <ThemedText type="defaultSemiBold" style={styles.rowTitle}>
            {method.name}
          </ThemedText>
          <ThemedText style={[styles.rowMeta, { color: colors.muted }]}>
            {method.category} · {method.brewTime} · {method.grind.split(' (')[0]}
          </ThemedText>
        </View>
        <IconSymbol name="chevron.right" size={18} color={colors.icon} />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  header: {
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 16,
    gap: 6,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
  },
  list: {
    paddingHorizontal: 20,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 12,
    gap: 12,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowTextWrap: {
    flex: 1,
    gap: 2,
  },
  rowTitle: {
    fontSize: 16,
  },
  rowMeta: {
    fontSize: 13,
  },
});
