import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { roastChemistryNotes, roastLevels } from '@/constants/coffee-data';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RoastingScreen() {
  const theme = useColorScheme() ?? 'light';
  const colors = Colors[theme];

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText type="title">Roasting</ThemedText>
        <ThemedText style={[styles.lead, { color: colors.muted }]}>
          Roasting turns dense, grassy-tasting green coffee into the aromatic, soluble beans we grind
          and brew, through a chain of chemical reactions driven almost entirely by heat and time.
        </ThemedText>

        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Roast levels
        </ThemedText>
        {roastLevels.map((level) => (
          <View
            key={level.id}
            style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <ThemedText type="subtitle" style={{ fontSize: 18 }}>
              {level.name}
            </ThemedText>
            <ThemedText style={[styles.temp, { color: colors.tint }]}>{level.tempRange}</ThemedText>
            <ThemedText style={styles.paragraph}>{level.description}</ThemedText>
            <View style={styles.chipRow}>
              {level.flavorNotes.map((note) => (
                <View key={note} style={[styles.chip, { backgroundColor: colors.background, borderColor: colors.border }]}>
                  <ThemedText style={[styles.chipText, { color: colors.muted }]}>{note}</ThemedText>
                </View>
              ))}
            </View>
          </View>
        ))}

        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Roast chemistry, stage by stage
        </ThemedText>
        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, gap: 12 }]}>
          {roastChemistryNotes.map((note, index) => (
            <View key={note} style={styles.stepRow}>
              <View style={[styles.stepBadge, { backgroundColor: colors.tint }]}>
                <ThemedText style={[styles.stepBadgeText, { color: theme === 'light' ? '#fff' : '#241B14' }]}>
                  {index + 1}
                </ThemedText>
              </View>
              <ThemedText style={styles.stepText}>{note}</ThemedText>
            </View>
          ))}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    padding: 20,
    paddingBottom: 48,
    gap: 12,
  },
  lead: {
    fontSize: 15,
    lineHeight: 22,
    marginTop: -8,
    marginBottom: 8,
  },
  sectionTitle: {
    marginTop: 8,
  },
  card: {
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 16,
    gap: 8,
  },
  temp: {
    fontSize: 13,
    fontWeight: '600',
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
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
  stepRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  stepBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  stepBadgeText: {
    fontSize: 12,
    fontWeight: '700',
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
  },
});
