import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { speciesList } from '@/constants/coffee-data';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function SpeciesScreen() {
  const theme = useColorScheme() ?? 'light';
  const colors = Colors[theme];

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText type="title">Species & Varieties</ThemedText>
        <ThemedText style={[styles.lead, { color: colors.muted }]}>
          All cultivated coffee comes from a handful of species in the genus Coffea. Each behaves
          differently in the field and tastes different in the cup — and within each species, named
          varieties add another layer of distinction.
        </ThemedText>

        {speciesList.map((species) => (
          <View
            key={species.id}
            style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={styles.cardHeader}>
              <ThemedText type="subtitle">{species.name}</ThemedText>
              <ThemedText style={[styles.latin, { color: colors.tint }]}>{species.latinName}</ThemedText>
            </View>

            <View style={styles.factGrid}>
              <Fact label="World production" value={species.shareOfWorldProduction} colors={colors} />
              <Fact label="Caffeine" value={species.caffeineContent} colors={colors} />
              <Fact label="Ideal altitude" value={species.idealAltitude} colors={colors} />
              <Fact label="Chromosomes" value={species.chromosomes} colors={colors} />
            </View>

            <ThemedText style={styles.paragraph}>{species.overview}</ThemedText>

            <ThemedText type="defaultSemiBold" style={styles.subheading}>
              Characteristics
            </ThemedText>
            {species.characteristics.map((c) => (
              <View key={c} style={styles.bulletRow}>
                <ThemedText style={[styles.bullet, { color: colors.tint }]}>{'•'}</ThemedText>
                <ThemedText style={styles.bulletText}>{c}</ThemedText>
              </View>
            ))}

            {species.notableVarieties.length > 0 && (
              <>
                <ThemedText type="defaultSemiBold" style={styles.subheading}>
                  Notable varieties
                </ThemedText>
                {species.notableVarieties.map((v) => (
                  <View key={v.name} style={styles.varietyRow}>
                    <ThemedText type="defaultSemiBold" style={{ color: colors.text }}>
                      {v.name}
                    </ThemedText>
                    <ThemedText style={styles.bulletText}>{v.description}</ThemedText>
                  </View>
                ))}
              </>
            )}
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

function Fact({ label, value, colors }: { label: string; value: string; colors: (typeof Colors)['light'] }) {
  return (
    <View style={[styles.factBlock, { borderColor: colors.border }]}>
      <ThemedText style={[styles.factLabel, { color: colors.muted }]}>{label}</ThemedText>
      <ThemedText type="defaultSemiBold" style={styles.factValue}>
        {value}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 48,
    gap: 16,
  },
  lead: {
    fontSize: 15,
    lineHeight: 22,
    marginTop: -8,
    marginBottom: 4,
  },
  card: {
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 16,
    gap: 10,
  },
  cardHeader: {
    gap: 2,
  },
  latin: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  factGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
  factBlock: {
    flexGrow: 1,
    minWidth: '45%',
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 8,
    gap: 2,
  },
  factLabel: {
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  factValue: {
    fontSize: 13,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
  },
  subheading: {
    marginTop: 6,
  },
  bulletRow: {
    flexDirection: 'row',
    gap: 8,
  },
  bullet: {
    fontSize: 14,
    lineHeight: 21,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
  },
  varietyRow: {
    gap: 2,
    marginBottom: 4,
  },
});
