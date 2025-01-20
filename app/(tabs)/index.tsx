import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from "react-native";
import { SplitView } from "@/components/SplitView";
import { useLibraryWallPapers, useLikedWallPapers, useSuggestedWallPapers } from "@/hooks/useWallPapers";

export default function ForYou() {
    const Tab = createMaterialTopTabNavigator()
    return (
       <SafeAreaView style={{flex: 1}}>
         <Tab.Navigator>
         <Tab.Screen name="Library" component={LibraryScreen} />
            <Tab.Screen name="Liked" component={LikedScreen}/>
            <Tab.Screen name="Suggested" component={SuggestedScreen} />
        </Tab.Navigator>
       </SafeAreaView>
    )
}

function LibraryScreen() {
    const libraryWallPapers = useLibraryWallPapers();
    return (
        <SafeAreaView style={styles.container}>
            <SplitView wallpapers={libraryWallPapers}/>
        </SafeAreaView>
    )
}

function LikedScreen() {
    const likedWallPapers = useLikedWallPapers();
    return (
        <SafeAreaView style={styles.container}>
            <SplitView wallpapers={likedWallPapers}/>
        </SafeAreaView>
    )
}

function SuggestedScreen() {
    const suggestedWallPapers = useSuggestedWallPapers();
    return (
        <SafeAreaView style={styles.container}>
            <SplitView wallpapers={suggestedWallPapers}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})