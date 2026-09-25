import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { historyTimeline } from '@/constants/coffee-data';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function HistoryScreen() {
  const theme = useColorScheme() ?? 'light';
  const colors = Colors[theme];

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText type="title">History of Coffee</ThemedText>
        <ThemedText style={[styles.lead, { color: colors.muted }]}>
          From a legendary Ethiopian goat herder to the third-wave specialty movement — a timeline of
          how coffee spread across the world.
        </ThemedText>

        <View style={styles.timeline}>
          {historyTimeline.map((event, index) => (
            <View key={event.id} style={styles.eventRow}>
              <View style={styles.timelineRail}>
                <View style={[styles.dot, { backgroundColor: colors.tint }]} />
                {index < historyTimeline.length - 1 && (
                  <View style={[styles.line, { backgroundColor: colors.border }]} />
                )}
              </View>
              <View
                style={[styles.eventCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <ThemedText style={[styles.era, { color: colors.tint }]}>{event.era}</ThemedText>
                <ThemedText type="defaultSemiBold" style={styles.eventTitle}>
                  {event.title}
                </ThemedText>
                <ThemedText style={styles.description}>{event.description}</ThemedText>
              </View>
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
  },
  lead: {
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
    marginBottom: 20,
  },
  timeline: {
    gap: 0,
  },
  eventRow: {
    flexDirection: 'row',
    gap: 14,
  },
  timelineRail: {
    alignItems: 'center',
    width: 16,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: 6,
  },
  line: {
    flex: 1,
    width: 2,
    marginTop: 4,
  },
  eventCard: {
    flex: 1,
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 14,
    marginBottom: 16,
    gap: 4,
  },
  era: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  eventTitle: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
});
