import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SERVICES = [
  {
    id: 1,
    title: 'Mobile App Development',
    desc: 'High-performance, cross-platform applications crafted with React Native and Expo.',
    icon: 'phone-portrait-outline',
  },
  {
    id: 2,
    title: 'Web Engineering',
    desc: 'Scalable and responsive modern web architectures using React and Next.js.',
    icon: 'desktop-outline',
  },
  {
    id: 3,
    title: 'Backend & APIs',
    desc: 'Robust server-side architecture, secure databases, and fast REST/GraphQL API development.',
    icon: 'server-outline',
  },
  {
    id: 4,
    title: 'UI/UX Design',
    desc: 'Intuitive, user-centric interfaces meticulously designed for optimal engagement and retention.',
    icon: 'color-palette-outline',
  },
  {
    id: 5,
    title: 'Tech Consulting',
    desc: 'Expert guidance on tech stacks, cloud infrastructure, and product scaling strategies.',
    icon: 'bulb-outline',
  },
];

export default function ServicesScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      className="flex-1 bg-neutral-950"
      contentContainerStyle={{
        paddingTop: Platform.OS === 'android' ? insets.top + 24 : 60,
        paddingBottom: insets.bottom + 100, // Accommodates the bottom tab bar
        paddingHorizontal: 24,
      }}
    >
      <StatusBar style="light" />

      {/* Header Section */}
      <View className="mb-10 mt-4">
        <Text className="text-neutral-400 font-mono text-xs uppercase tracking-widest mb-3">
          Our Capabilities
        </Text>
        <Text className="text-white text-4xl font-black tracking-tight mb-4">
          Services
        </Text>
        <Text className="text-neutral-400 text-base leading-relaxed font-normal">
          At rondev.com.ph, we build premium digital products that drive results. Explore our core areas of expertise below.
        </Text>
      </View>

      {/* Service Cards */}
      <View className="flex-col gap-y-5">
        {SERVICES.map((service) => (
          <View
            key={service.id}
            className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-xl"
          >
            <View className="w-12 h-12 bg-neutral-800 border border-neutral-700 rounded-2xl items-center justify-center mb-5">
              <Ionicons name={service.icon as any} size={22} color="#ffffff" />
            </View>
            <Text className="text-white text-xl font-bold mb-2 tracking-wide">
              {service.title}
            </Text>
            <Text className="text-neutral-400 text-sm leading-relaxed">
              {service.desc}
            </Text>
          </View>
        ))}
      </View>

      {/* Call to Action Section */}
      <View className="mt-10 items-center bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl">
        <View className="w-16 h-16 bg-neutral-800 rounded-full items-center justify-center mb-6 border border-neutral-700">
          <Ionicons name="rocket-outline" size={28} color="#ffffff" />
        </View>
        <Text className="text-white text-2xl font-black mb-3 text-center tracking-tight">
          Ready to innovate?
        </Text>
        <Text className="text-neutral-400 text-sm text-center mb-8 leading-relaxed">
          Let's transform your vision into a reality. We're ready to build something exceptional together.
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          className="w-full bg-white py-4 rounded-xl items-center justify-center shadow-md active:bg-neutral-200"
        >
          <Text className="text-neutral-950 font-bold text-sm tracking-wide">
            Start a Project
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
