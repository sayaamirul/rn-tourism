import { Image, ScrollView, Text, View } from "react-native";
import { tourismData } from "@/data/tourismData";

export default function Index() {
  return (
    <ScrollView className="flex">
      {tourismData.map((item) => (
        <View className="rounded-lg border border-gray-200 p-4 shadow">
          <Image
            source={item.imageUrl}
            resizeMode="cover"
            className="h-64 w-full"
          />
          <Text className="font-bold text-2xl">{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
