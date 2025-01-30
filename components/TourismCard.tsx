import { View, Text, Image } from "react-native";
import React from "react";
import { TouristDestination } from "@/data/tourismData";

interface Props {
  item: TouristDestination;
}

export default function TourismCard({ item }: Props) {
  return (
    <View
      key={item.id}
      className="flex-1 bg-white rounded border border-gray-200 shadow"
    >
      <Image source={item.image} className="rounded-md w-full h-40" />
      <Text className="font-bold text-xl">{item.name}</Text>
      <View>
        <Text className="m-2 text-xs text-gray-300">{item.country}</Text>
      </View>
    </View>
  );
}
