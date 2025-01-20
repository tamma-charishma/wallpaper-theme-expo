import commonStyles from "@/commonstyles/commonStyles";
import DownloadPicture from "@/components/BottomSheet";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import Spacer from "@/components/Spacer";
import { ThemedText } from "@/components/ThemedText";
import React, { useState } from "react";
import { View, Text, SafeAreaView, Button, StyleSheet, Pressable } from "react-native";

export default function Account() {
    const [isPictureOpen, setIsPictureOpen] = useState<boolean>(false);

    const Header = () => {
        return (
            <View style={styles.topBar}>
                <ThemedText style={styles.textBig}>Panels</ThemedText>
                <ThemedText>Sign in to save your data</ThemedText>
            </View>
        )
    }

    const LoginButtons = () => {
        return (
            <>
                <ButtonWithIcon titleText="Sign in" iconName={'logo-google'} customDownloadViewStyle={{ marginVertical: 10 }} />
                <ButtonWithIcon titleText="Sign in" iconName={'logo-apple'} customDownloadViewStyle={{ marginVertical: 10 }} />
            </>
        )
    }

    const ThemedButton = ({ title, selected }: { title: string, selected: boolean }) => {
        return (
            <Pressable style={{ flex: 0.3, borderColor: 'black', borderWidth: 1, borderRadius: 5, padding: 10 }}>
                <ThemedText style={{textAlign: 'center'}}>{title}</ThemedText>
            </Pressable>
        )
    }

    const ThemeSelector = () => {
        return (
            <View style={commonStyles.padding20}>
                <ThemedText style={styles.textBig}>Settings</ThemedText>
                <ThemedText>Theme</ThemedText>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <ThemedButton title="Dark" selected={false} />
                    <ThemedButton title="Light" selected={false} />
                    <ThemedButton title="System" selected={false} />

                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header />
            <LoginButtons />
            <ThemeSelector />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    topBar: {
        marginTop: 20,
        padding: 20
    },
    textBig: {
        fontSize: 25,
        fontWeight: '600'
    },
    themeSelectorContainer: {
        flex: 1
    },
    themeSelectorChild: {
        flex: 0.33
    },
})