import { StyleSheet, View } from 'react-native';

import { NavCard } from '@/components/nav-card';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { origins, speciesList } from '@/constants/coffee-data';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function HomeScreen() {
  const theme = useColorScheme() ?? 'light';
  const colors = Colors[theme];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E7D2B4', dark: '#3A2C1F' }}
      headerImage={
        <View style={styles.headerImageWrap}>
          <IconSymbol size={200} color={theme === 'light' ? '#8B5A2B' : '#E3B778'} name="mug.fill" />
        </View>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">The Coffee Atlas</ThemedText>
      </ThemedView>
      <ThemedText style={[styles.lead, { color: colors.muted }]}>
        An in-depth guide to coffee: where it grows, the species and varieties behind every cup, how
        cherries become green beans, how roasting transforms them, and how to brew them well.
      </ThemedText>

      <ThemedView style={styles.statsRow}>
        <StatBlock value={String(origins.length)} label="Origins covered" />
        <StatBlock value={String(speciesList.length)} label="Coffee species" />
        <StatBlock value="7" label="Brew methods" />
      </ThemedView>

      <ThemedText type="subtitle" style={styles.sectionTitle}>
        Explore
      </ThemedText>

      <NavCard
        href="/origins"
        icon="globe"
        title="Growing Origins"
        subtitle="From Ethiopia's forests to Panama's volcanoes — the countries and regions that grow coffee."
      />
      <NavCard
        href="/species"
        icon="leaf.fill"
        title="Species & Varieties"
        subtitle="Arabica, Robusta, Liberica, and Excelsa — what makes each one different in the cup."
      />
      <NavCard
        href="/processing"
        icon="drop.fill"
        title="Processing Methods"
        subtitle="Washed, natural, honey, wet-hulled, and anaerobic — how cherries become green beans."
      />
      <NavCard
        href="/roasting"
        icon="flame.fill"
        title="Roasting"
        subtitle="The chemistry of the roast, from first crack to second, and how roast level shapes flavor."
      />
      <NavCard
        href="/brewing"
        icon="mug.fill"
        title="Brewing Guide"
        subtitle="Espresso, pour-over, French press, AeroPress, cold brew, and more, step by step."
      />
      <NavCard
        href="/history"
        icon="clock.fill"
        title="History of Coffee"
        subtitle="From a legendary Ethiopian goat herder to the third-wave specialty movement."
      />
      <NavCard
        href="/glossary"
        icon="book.closed.fill"
        title="Glossary"
        subtitle="Searchable definitions for the terms you'll hear from farm to cup."
      />
    </ParallaxScrollView>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  const theme = useColorScheme() ?? 'light';
  const colors = Colors[theme];
  return (
    <View style={[styles.statBlock, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <ThemedText type="title" style={[styles.statValue, { color: colors.tint }]}>
        {value}
      </ThemedText>
      <ThemedText style={[styles.statLabel, { color: colors.muted }]}>{label}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImageWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  lead: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 4,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  statBlock: {
    flex: 1,
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 12,
    alignItems: 'center',
    gap: 2,
  },
  statValue: {
    fontSize: 24,
    lineHeight: 28,
  },
  statLabel: {
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  sectionTitle: {
    marginTop: 8,
  },
});
