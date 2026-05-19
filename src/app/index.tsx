import { View, Text, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function TestScreen() {
  return (
    <View className="flex-1 bg-neutral-950 items-center justify-center px-6">
      <StatusBar style="light" />

      {/* Main Container */}
      <View className="w-full bg-neutral-900 border border-neutral-800 rounded-3xl p-8 items-center shadow-2xl">

        {/* Place this snippet inside your TestScreen component render method */}
        <View className="w-full bg-neutral-900 border border-neutral-800 rounded-3xl p-8 items-center shadow-2xl">

          {/* Brand Logo Integration */}
          <Image
            source={require('@/assets/images/rondevlogo.png')}
            className="w-20 h-20"
            resizeMode="contain"
          />

          {/* Domain Label */}
          <Text className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-3 text-center">
            rondev.com.ph
          </Text>

          {/* Premium Headline */}
          <Text className="text-3xl font-black tracking-tight text-white mb-4 text-center leading-none">
            Elite Mobile{"\n"}
            <Text className="text-neutral-400">Development</Text>
          </Text>

          {/* Pitch / Capabilities List */}
          <Text className="text-sm text-neutral-400 font-normal mb-6 text-center leading-relaxed">
            We engineer high-performance iOS and Android applications. From fluid NativeWind architectures to scalable backend systems, we turn your product vision into production-grade code.
          </Text>

          {/* ... rest of your tags and buttons remain exactly the same ... */}
        </View>

        {/* Service Badges */}
        <View className="flex-row flex-wrap justify-center gap-2 mb-8">
          <View className="bg-neutral-800 border border-neutral-700 px-3 py-1 rounded-full">
            <Text className="text-xs text-neutral-300 font-medium">React Native</Text>
          </View>
          <View className="bg-neutral-800 border border-neutral-700 px-3 py-1 rounded-full">
            <Text className="text-xs text-neutral-300 font-medium">Tailwind CSS</Text>
          </View>
          <View className="bg-neutral-800 border border-neutral-700 px-3 py-1 rounded-full">
            <Text className="text-xs text-neutral-300 font-medium">Cross-Platform</Text>
          </View>
        </View>

        {/* Call to Action Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="w-full bg-white py-4 rounded-xl items-center justify-center shadow-md active:bg-neutral-200"
        >
          <Text className="text-neutral-950 font-bold text-sm tracking-wide">
            Book a Consultation
          </Text>
        </TouchableOpacity>

        {/* Secondary Link */}
        <TouchableOpacity activeOpacity={0.7} className="mt-4">
          <Text className="text-xs text-neutral-500 font-medium underline">
            Explore Our Portfolio
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}