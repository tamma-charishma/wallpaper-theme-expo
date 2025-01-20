import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { ThemedView } from "./ThemedView";
import { Wallpaper } from "@/hooks/useWallpapers";
import DownloadPicture from "./BottomSheet";
import { ImageCard } from "./ImageCard";

interface SplitViewProps {
    wallpapers: Wallpaper[]
}

export function SplitView({ wallpapers }: SplitViewProps) {
    const [selectedWallPaper, setSelectedWallPaper] = useState<Wallpaper | null>(null);

    return (
        <>
            <View style={styles.container}>
                <ThemedView style={styles.innerContainer}>
                    <FlatList
                        data={wallpapers.filter((_, index) => index % 2 === 0)}
                        renderItem={({ item }) => <View style={styles.imageContainer}>
                            <ImageCard wallpaper={item} onPress={() => setSelectedWallPaper(item)} />
                        </View>}
                        keyExtractor={item => item.url}
                    />
                </ThemedView>

                <ThemedView style={styles.innerContainer}>
                    <FlatList
                        data={wallpapers.filter((_, index) => index % 2 === 1)}
                        renderItem={({ item }) => <View style={styles.imageContainer}>
                            <ImageCard wallpaper={item} onPress={() => setSelectedWallPaper(item)} />
                        </View>}
                        keyExtractor={item => item.url}
                    />
                </ThemedView>
            </View>
            {selectedWallPaper && <DownloadPicture onClose={() => setSelectedWallPaper(null)} wallPaper={selectedWallPaper} />}
        </>

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