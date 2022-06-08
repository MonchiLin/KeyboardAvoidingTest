import { useAnyNavigation } from "../../hooks/useAnyNavigation";
import { Text, TouchableOpacity, View, Dimensions } from "react-native";
import { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Item = ({ label, onPress }: { label: string, onPress: () => void }) => {
  return <TouchableOpacity onPress={onPress}>
    <Text>{label}</Text>
  </TouchableOpacity>;
};

export default function KeyboardAvoidingTest() {
  const navigation = useAnyNavigation();
  const safeAreaInsets = useSafeAreaInsets()

  return <View style={{ flex: 1, flexDirection: "column" }}>
    <Item label={"KeyboardAvoidingCommon"} onPress={() => navigation.navigate("KeyboardAvoidingCommon")}/>
    <Item label={"KeyboardAvoidingBehavior"} onPress={() => navigation.navigate("KeyboardAvoidingBehavior")}/>
    <Item label={"KeyboardAvoidingChart"} onPress={() => navigation.navigate("KeyboardAvoidingChart")}/>
    <Item label={"ResizeVSPan"} onPress={() => navigation.navigate("ResizeVSPan")}/>
    <Item label={"SignUp"} onPress={() => navigation.navigate("SignUp")}/>
  </View>;
}
