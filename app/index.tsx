import {
  FlatList,
  Image,
  ListRenderItem,
  ScrollView,
  Text,
  View,
} from "react-native";
import { tourismData, TouristDestination } from "@/data/tourismData";
import TourismCard from "@/components/TourismCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const renderItem: ListRenderItem<TouristDestination> = ({ item }) => (
    <TourismCard item={item} />
  );
  return (
    <SafeAreaView className="flex-1">
      <FlatList
        numColumns={2}
        data={tourismData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={TourismCard}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 8 }}
      />
    </SafeAreaView>
  );
}
