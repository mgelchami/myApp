import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { brewMethods } from '@/constants/coffee-data';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function BrewMethodDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useColorScheme() ?? 'light';
  const colors = Colors[theme];
  const method = brewMethods.find((m) => m.id === id);

  if (!method) {
    return (
      <ThemedView style={styles.notFound}>
        <ThemedText>Brew method not found.</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: method.name }} />
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText type="title">{method.name}</ThemedText>
        <ThemedText style={[styles.category, { color: colors.tint }]}>
          {method.category} brewing
        </ThemedText>
        <ThemedText style={styles.paragraph}>{method.overview}</ThemedText>

        <View style={styles.specGrid}>
          <Spec label="Grind" value={method.grind} colors={colors} />
          <Spec label="Ratio" value={method.ratio} colors={colors} />
          <Spec label="Water temp" value={method.waterTemp} colors={colors} />
          <Spec label="Brew time" value={method.brewTime} colors={colors} />
        </View>

        <Section title="Equipment" colors={colors}>
          <View style={styles.chipRow}>
            {method.equipment.map((item) => (
              <View key={item} style={[styles.chip, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <ThemedText style={[styles.chipText, { color: colors.text }]}>{item}</ThemedText>
              </View>
            ))}
          </View>
        </Section>

        <Section title="Steps" colors={colors}>
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
        </Section>

        <Section title="Tips" colors={colors}>
          {method.tips.map((tip) => (
            <View key={tip} style={styles.tipRow}>
              <ThemedText style={[styles.tipBullet, { color: colors.tint }]}>{'•'}</ThemedText>
              <ThemedText style={styles.stepText}>{tip}</ThemedText>
            </View>
          ))}
        </Section>

        <ThemedText style={[styles.invented, { color: colors.muted }]}>
          Origins of the method: {method.invented}
        </ThemedText>
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
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        {title}
      </ThemedText>
      {children}
    </View>
  );
}

function Spec({ label, value, colors }: { label: string; value: string; colors: (typeof Colors)['light'] }) {
  return (
    <View style={[styles.specBlock, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <ThemedText style={[styles.specLabel, { color: colors.muted }]}>{label}</ThemedText>
      <ThemedText type="defaultSemiBold" style={styles.specValue}>
        {value}
      </ThemedText>
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
  category: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 23,
  },
  specGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 16,
  },
  specBlock: {
    flexGrow: 1,
    minWidth: '45%',
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    gap: 2,
  },
  specLabel: {
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  specValue: {
    fontSize: 14,
  },
  section: {
    marginTop: 20,
    gap: 10,
  },
  sectionTitle: {
    fontSize: 18,
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
    fontSize: 15,
    lineHeight: 22,
  },
  tipRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
  },
  tipBullet: {
    fontSize: 15,
    lineHeight: 22,
  },
  invented: {
    fontSize: 13,
    marginTop: 24,
    fontStyle: 'italic',
  },
});
