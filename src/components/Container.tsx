import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

interface WrapperProps {
  children: React.ReactNode;
}
export default function Wrapper(props: WrapperProps): React.ReactNode {
  const { Layout, darkMode: isDark } = useTheme();
  const styles = StyleSheet.create({
    container: {
      ...Layout.fullSize,
      padding: 20,
      paddingHorizontal: 20,
      backgroundColor: Colors.background,
    },
  });
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
}
