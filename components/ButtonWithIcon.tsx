
import commonStyles from "@/commonstyles/commonStyles"
import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { Pressable, View, Text, StyleSheet, ViewStyle } from "react-native"
import Spacer from "./Spacer";

interface ButtonWithIconProps {
    iconName: any;
    titleText: string;
    customDownloadViewStyle?: ViewStyle;
}

export function ButtonWithIcon({iconName, titleText, customDownloadViewStyle}: ButtonWithIconProps) {
    return (
        <Pressable style={[customDownloadViewStyle ? [styles.downloadView, customDownloadViewStyle] : styles.downloadView]}>
        <View style={{ flexDirection: 'row' }}>
            <Ionicons name={iconName} size={24} color={'white'} />
            <Spacer customStyles={commonStyles.marginStart4} />
            <Text style={styles.downloadText}>{titleText}</Text>
        </View>

    </Pressable>
    )
}

const styles = StyleSheet.create({
    downloadText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white'
    },
    downloadView: {
        backgroundColor: 'black',
        padding: 10,
        marginHorizontal: 40,
        marginVertical: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10
    }
})