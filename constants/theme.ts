/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#8B5A2B';
const tintColorDark = '#E3B778';

export const Colors = {
  light: {
    text: '#2C1B10',
    background: '#FBF6F0',
    tint: tintColorLight,
    icon: '#7A5B44',
    tabIconDefault: '#B79E8B',
    tabIconSelected: tintColorLight,
    card: '#FFFFFF',
    border: '#E7D9C9',
    muted: '#6B5847',
    accent: '#C97C3D',
  },
  dark: {
    text: '#F1E6DA',
    background: '#1B140F',
    tint: tintColorDark,
    icon: '#C9A480',
    tabIconDefault: '#8A705A',
    tabIconSelected: tintColorDark,
    card: '#241B14',
    border: '#3A2C21',
    muted: '#C9A480',
    accent: '#E39A56',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
