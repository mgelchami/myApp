import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { processMethods } from '@/constants/coffee-data';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function ProcessingScreen() {
  const theme = useColorScheme() ?? 'light';
  const colors = Colors[theme];

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText type="title">Processing Methods</ThemedText>
        <ThemedText style={[styles.lead, { color: colors.muted }]}>
          Processing is how a picked coffee cherry becomes a stable green bean ready to roast — and
          it shapes flavor as much as origin or variety does.
        </ThemedText>

        {processMethods.map((method) => (
          <View
            key={method.id}
            style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <ThemedText type="subtitle">{method.name}</ThemedText>
            {method.alsoKnownAs && (
              <ThemedText style={[styles.aka, { color: colors.muted }]}>
                Also known as: {method.alsoKnownAs}
              </ThemedText>
            )}
            <ThemedText style={styles.paragraph}>{method.summary}</ThemedText>

            <ThemedText type="defaultSemiBold" style={styles.subheading}>
              Steps
            </ThemedText>
            {method.steps.map((step, index) => (
              <View key={step} style={styles.stepRow}>
                <View style={[styles.stepBadge, { backgroundColor: colors.tint }]}>
                  <ThemedText style={[styles.stepBadgeText, { color: theme === 'light' ? '#fff' : '#241B14' }]}>
                    {index + 1}
                  </ThemedText>
                </View>
                <ThemedText style={styles.stepText}>{step}</ThemedText>
              </View>
            ))}

            <View style={styles.factGrid}>
              <View style={[styles.factBlock, { borderColor: colors.border }]}>
                <ThemedText style={[styles.factLabel, { color: colors.muted }]}>Duration</ThemedText>
                <ThemedText type="defaultSemiBold" style={styles.factValue}>
                  {method.duration}
                </ThemedText>
              </View>
              <View style={[styles.factBlock, { borderColor: colors.border }]}>
                <ThemedText style={[styles.factLabel, { color: colors.muted }]}>Best for</ThemedText>
                <ThemedText type="defaultSemiBold" style={styles.factValue}>
                  {method.bestFor}
                </ThemedText>
              </View>
            </View>

            <ThemedText type="defaultSemiBold" style={styles.subheading}>
              Flavor impact
            </ThemedText>
            <ThemedText style={styles.paragraph}>{method.flavorImpact}</ThemedText>
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
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
    gap: 8,
  },
  aka: {
    fontSize: 13,
    fontStyle: 'italic',
    marginTop: -4,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
  },
  subheading: {
    marginTop: 6,
  },
  stepRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  stepBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  stepBadgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
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
});
