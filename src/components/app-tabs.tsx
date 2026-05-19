import { NativeTabs } from 'expo-router/unstable-native-tabs';
import React from 'react';

export default function AppTabs() {

  const colors = {
    background: '#0a0a0a',        // Matches bg-neutral-950
    activeIndicator: '#0a0a0a',   // Keeps the active tab flush
    activeText: '#ffffff',        // High-contrast active text
    inactiveText: '#525252',      // Muted inactive gray
  };

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.activeIndicator}
      labelStyle={{
        selected: {
          color: colors.activeText,
          fontSize: 10,
        },
        default: {
          color: colors.inactiveText,
          fontSize: 10,
        }
      }}>

      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="terminal" md="terminal" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="c.square" md="code" />
      </NativeTabs.Trigger>

    </NativeTabs>
  );
}
