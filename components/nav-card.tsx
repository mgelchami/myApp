import { Link, type Href } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { IconSymbol, type IconSymbolName } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type NavCardProps = {
  href: Href;
  title: string;
  subtitle?: string;
  icon: IconSymbolName;
};

export function NavCard({ href, title, subtitle, icon }: NavCardProps) {
  const theme = useColorScheme() ?? 'light';
  const colors = Colors[theme];

  return (
    <Link href={href} asChild>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <View style={[styles.iconWrap, { backgroundColor: colors.tint }]}>
          <IconSymbol name={icon} size={22} color={theme === 'light' ? '#FFF' : '#241B14'} />
        </View>
        <ThemedText type="defaultSemiBold" style={styles.title}>
          {title}
        </ThemedText>
        {subtitle ? (
          <ThemedText style={[styles.subtitle, { color: colors.muted }]}>{subtitle}</ThemedText>
        ) : null}
        <IconSymbol name="chevron.right" size={16} color={colors.icon} style={styles.chevron} />
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 16,
    marginBottom: 12,
    position: 'relative',
    gap: 4,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 17,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 19,
    paddingRight: 24,
  },
  chevron: {
    position: 'absolute',
    right: 16,
    top: 18,
  },
});
