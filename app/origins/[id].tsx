import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { origins } from '@/constants/coffee-data';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function OriginDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useColorScheme() ?? 'light';
  const colors = Colors[theme];
  const origin = origins.find((o) => o.id === id);

  if (!origin) {
    return (
      <ThemedView style={styles.notFound}>
        <ThemedText>Origin not found.</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: origin.country }} />
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText type="title">{origin.country}</ThemedText>
        <ThemedText style={[styles.tagline, { color: colors.tint }]}>{origin.tagline}</ThemedText>

        <View style={styles.factGrid}>
          <FactBlock label="Continent" value={origin.continent} colors={colors} />
          <FactBlock label="Altitude" value={origin.altitude} colors={colors} />
          <FactBlock label="Harvest" value={origin.harvest} colors={colors} />
          <FactBlock label="Primary process" value={origin.primaryProcess} colors={colors} />
          <FactBlock label="Primary species" value={origin.primarySpecies} colors={colors} />
        </View>

        <Section title="Overview" colors={colors}>
          <ThemedText style={styles.paragraph}>{origin.overview}</ThemedText>
        </Section>

        <Section title="History" colors={colors}>
          <ThemedText style={styles.paragraph}>{origin.history}</ThemedText>
        </Section>

        <Section title="Notable growing regions" colors={colors}>
          <ChipList items={origin.notableRegions} colors={colors} />
        </Section>

        <Section title="Varieties grown" colors={colors}>
          <ChipList items={origin.varieties} colors={colors} />
        </Section>

        <Section title="Typical tasting notes" colors={colors}>
          <ChipList items={origin.tastingNotes} colors={colors} accent accentTextColor={theme === 'light' ? '#fff' : '#241B14'} />
        </Section>

        <View style={[styles.funFactBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <ThemedText type="defaultSemiBold" style={{ color: colors.tint }}>
            Fun fact
          </ThemedText>
          <ThemedText style={styles.paragraph}>{origin.funFact}</ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

function Section({
  title,
  colors,
  children,
}: {
  title: string;
  colors: (typeof Colors)['light'];
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <ThemedText type="subtitle" style={[styles.sectionTitle, { color: colors.text }]}>
        {title}
      </ThemedText>
      {children}
    </View>
  );
}

function FactBlock({
  label,
  value,
  colors,
}: {
  label: string;
  value: string;
  colors: (typeof Colors)['light'];
}) {
  return (
    <View style={[styles.factBlock, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <ThemedText style={[styles.factLabel, { color: colors.muted }]}>{label}</ThemedText>
      <ThemedText type="defaultSemiBold" style={styles.factValue}>
        {value}
      </ThemedText>
    </View>
  );
}

function ChipList({
  items,
  colors,
  accent,
  accentTextColor,
}: {
  items: string[];
  colors: (typeof Colors)['light'];
  accent?: boolean;
  accentTextColor?: string;
}) {
  return (
    <View style={styles.chipRow}>
      {items.map((item) => (
        <View
          key={item}
          style={[
            styles.chip,
            {
              backgroundColor: accent ? colors.tint : colors.card,
              borderColor: accent ? colors.tint : colors.border,
            },
          ]}>
          <ThemedText style={[styles.chipText, { color: accent ? accentTextColor : colors.text }]}>
            {item}
          </ThemedText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 20,
    paddingBottom: 48,
    gap: 4,
  },
  tagline: {
    fontSize: 16,
    marginBottom: 16,
  },
  factGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 8,
  },
  factBlock: {
    flexGrow: 1,
    minWidth: '45%',
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    gap: 2,
  },
  factLabel: {
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  factValue: {
    fontSize: 14,
  },
  section: {
    marginTop: 20,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 23,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '500',
  },
  funFactBox: {
    marginTop: 24,
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 14,
    gap: 6,
  },
});
