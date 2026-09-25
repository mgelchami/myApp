import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { glossaryTerms } from '@/constants/coffee-data';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function GlossaryScreen() {
  const theme = useColorScheme() ?? 'light';
  const colors = Colors[theme];
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const sorted = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));
    if (!q) return sorted;
    return sorted.filter(
      (item) => item.term.toLowerCase().includes(q) || item.definition.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
      <View style={styles.header}>
        <ThemedText type="title">Glossary</ThemedText>
        <ThemedText style={[styles.subtitle, { color: colors.muted }]}>
          {glossaryTerms.length} terms from farm to cup.
        </ThemedText>
      </View>

      <View style={[styles.searchBar, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <IconSymbol name="magnifyingglass" size={18} color={colors.icon} />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search terms..."
          placeholderTextColor={colors.muted}
          style={[styles.searchInput, { color: colors.text }]}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.term}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <ThemedText style={[styles.empty, { color: colors.muted }]}>
            No terms match &quot;{query}&quot;.
          </ThemedText>
        }
        renderItem={({ item }) => (
          <View style={[styles.termCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <ThemedText type="defaultSemiBold" style={[styles.term, { color: colors.tint }]}>
              {item.term}
            </ThemedText>
            <ThemedText style={styles.definition}>{item.definition}</ThemedText>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 12,
    gap: 6,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
  },
  searchBar: {
    marginHorizontal: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 12,
    height: 44,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    height: '100%',
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    gap: 10,
  },
  termCard: {
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 14,
    gap: 4,
  },
  term: {
    fontSize: 16,
  },
  definition: {
    fontSize: 14,
    lineHeight: 20,
  },
  empty: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 14,
  },
});
