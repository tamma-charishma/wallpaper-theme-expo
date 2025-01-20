import DownloadPicture from "@/components/BottomSheet";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SplitView } from "@/components/SplitView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallPapers";
import BottomSheet from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, Text, StyleSheet, View, FlatList } from "react-native";

export default function Explore() {
    const wallpapers = useWallpapers();
    const [selectedWallPaper, setSelectedWallPaper] = useState<Wallpaper | null>(null);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Explore page</Text>
            <Link href={"/(nobottombar)/accountInfo"}>
                <Text>Account information</Text>
            </Link>
            <ParallaxScrollView headerImage={<Image style={{ flex: 1 }} source={{ uri: "https://ideogram.ai/assets/image/lossless/response/7Fa0u9-4SzG6we48jz7rGw" }} />} headerBackgroundColor={{
                dark: "black",
                light: "white"
            }} >
               <SplitView wallpapers={wallpapers}/>

            </ParallaxScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    innerContainer: {
        flex: 1,
        padding: 4
    },
    imageContainer: {
        padding: 10
    }
})