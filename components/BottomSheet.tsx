import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button, useColorScheme } from 'react-native';
import { GestureHandlerRootView, Pressable } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import commonStyles from '@/commonstyles/commonStyles';
import { ButtonWithIcon } from './ButtonWithIcon';
import Spacer from './Spacer';

interface DownloadPictureProps {
    onClose: () => void;
    wallPaper: Wallpaper
}

const DownloadPicture = ({ onClose, wallPaper }: DownloadPictureProps) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['50%', '70%', '90'], [])
    const theme = useColorScheme() ?? 'light'

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        // <GestureHandlerRootView style={styles.container}>

        // </GestureHandlerRootView>
        <BottomSheet
            index={1}
            ref={bottomSheetRef}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            snapPoints={snapPoints}
            onClose={onClose}
            handleIndicatorStyle={{ display: 'none' }}
            handleStyle={{ display: "none" }}
        >
            <BottomSheetView style={styles.contentContainer}>
                <Image source={{ uri: wallPaper.url }} style={styles.image} />
                <View style={styles.topBar}>
                    <Ionicons name='close' size={24} color={theme === 'light' ? Colors.light.icon : Colors.dark.icon} />
                    <View style={styles.topBarInner}>
                        <Ionicons name='heart' size={24} color={theme === 'light' ? Colors.light.icon : Colors.dark.icon} />
                        <Spacer customStyles={commonStyles.marginTop20} />
                        <Ionicons name='share' size={24} color={theme === 'light' ? Colors.light.icon : Colors.dark.icon} />

                    </View>
                </View>

                <Spacer customStyles={commonStyles.marginTop10} />
                <Text style={styles.text}>{wallPaper.name}</Text>

                <ButtonWithIcon iconName='download' titleText='Download'/>

            </BottomSheetView>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    image: {
        height: '60%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        resizeMode: 'stretch',
        flexWrap: 'wrap',
        alignSelf: 'center',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        padding: 10,
        width: '100%'
    },
    topBarInner: {
        paddingBottom: 10
    },
    text: {
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 30
    },
});

export default DownloadPicture;