import { Image, View, StyleSheet, useColorScheme, Pressable } from "react-native";

import { ThemedText } from "./ThemedText";
import { Wallpaper } from "@/hooks/useWallpapers";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

interface ImageCardProps {
    wallpaper: Wallpaper,
    onPress: () => void
}

export function ImageCard({ wallpaper, onPress }: ImageCardProps) {
    const theme = useColorScheme() ?? 'light'

    return <Pressable onPress={onPress}>
        <Image source={{ uri: wallpaper.url }} style={styles.image} />
        <View style={styles.labelContainer}>
            <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
            <View style={styles.iconContainer}>
            <Ionicons name="heart" size={18} color={theme === 'light' ? Colors.light.icon : Colors.dark.icon} />
            </View>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 250,
        borderRadius: 20
    },
    label: {
        color: "white"
    },
    labelContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
})