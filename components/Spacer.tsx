import { View, ViewStyle } from "react-native";

interface SpacerProps {
    customStyles: ViewStyle
}

const Spacer = ({ customStyles }: SpacerProps) => {
    return <View style={customStyles} />
}

export default Spacer;