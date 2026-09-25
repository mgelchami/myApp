import { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { origins, type Origin } from '@/constants/coffee-data';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Link } from 'expo-router';

const CONTINENTS: (Origin['continent'] | 'All')[] = [
  'All',
  'Africa',
  'Latin America',
  'Asia-Pacific',
  'Caribbean',
  'Middle East',
];

export default function OriginsScreen() {
  const theme = useColorScheme() ?? 'light';
  const colors = Colors[theme];
  const [filter, setFilter] = useState<(typeof CONTINENTS)[number]>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? origins : origins.filter((o) => o.continent === filter)),
    [filter]
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <ThemedText type="title">Growing Origins</ThemedText>
        <ThemedText style={[styles.subtitle, { color: colors.muted }]}>
          {origins.length} countries, from coffee&apos;s Ethiopian birthplace to the newest micro-lot
          frontiers.
        </ThemedText>
      </View>

      <FlatList
        horizontal
        data={CONTINENTS}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterRow}
        renderItem={({ item }) => {
          const active = item === filter;
          return (
            <Pressable
              onPress={() => setFilter(item)}
              style={[
                styles.filterChip,
                {
                  backgroundColor: active ? colors.tint : colors.card,
                  borderColor: active ? colors.tint : colors.border,
                },
              ]}>
              <ThemedText
                style={[
                  styles.filterChipText,
                  { color: active ? (theme === 'light' ? '#fff' : '#241B14') : colors.text },
                ]}>
                {item}
              </ThemedText>
            </Pressable>
          );
        }}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <OriginRow origin={item} />}
      />
    </SafeAreaView>
  );
}

function OriginRow({ origin }: { origin: Origin }) {
  const theme = useColorScheme() ?? 'light';
  const colors = Colors[theme];
  return (
    <Link href={{ pathname: '/origins/[id]', params: { id: origin.id } }} asChild>
      <Pressable style={[styles.row, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <View style={styles.rowTextWrap}>
          <ThemedText type="defaultSemiBold" style={styles.rowTitle}>
            {origin.country}
          </ThemedText>
          <ThemedText style={[styles.rowTagline, { color: colors.muted }]}>{origin.tagline}</ThemedText>
          <View style={styles.tagRow}>
            <Tag label={origin.continent} colors={colors} />
            <Tag label={origin.primaryProcess} colors={colors} />
          </View>
        </View>
        <IconSymbol name="chevron.right" size={18} color={colors.icon} />
      </Pressable>
    </Link>
  );
}

function Tag({ label, colors }: { label: string; colors: (typeof Colors)['light'] }) {
  return (
    <View style={[styles.tag, { backgroundColor: colors.background, borderColor: colors.border }]}>
      <ThemedText style={[styles.tagText, { color: colors.muted }]}>{label}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 6,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
  },
  filterRow: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 8,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    marginRight: 8,
  },
  filterChipText: {
    fontSize: 13,
    fontWeight: '600',
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 14,
    gap: 8,
  },
  rowTextWrap: {
    flex: 1,
    gap: 4,
  },
  rowTitle: {
    fontSize: 16,
  },
  rowTagline: {
    fontSize: 13,
    lineHeight: 18,
  },
  tagRow: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 4,
    flexWrap: 'wrap',
  },
  tag: {
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '600',
  },
});
