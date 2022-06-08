import {
  Keyboard,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps, Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput, TouchableOpacity,
  View
} from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useEffect, useState } from "react";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

function Boxes() {
  return <>
    {
      [...Array(30).keys()]
        .map(i => {
          return <View
            key={i}
            style={{
              width: "100%",
              backgroundColor: i % 2 === 0 ? "#b7b7b7" : "#828ebe",
              height: 40,
              justifyContent: "center",
              alignItems: "center"
            }}>
            <TextInput placeholder={"Input" + '-' + i}/>
          </View>;
        })
    }
  </>;
}

const Behavior = (props: { value: KeyboardAvoidingViewProps["behavior"], currentValue: KeyboardAvoidingViewProps["behavior"], onPress: () => void }) => {
  return <TouchableOpacity style={{ flex: 1 }} onPress={props.onPress}>
    <Text numberOfLines={1} style={{ color: props.currentValue === props.value ? "#53b1c4" : "#000000" }}>
      use {props.value + ""}
    </Text>
  </TouchableOpacity>;
};

export default function KeyboardAvoidingBehavior() {
  const [behavior, setBehavior] = useState<KeyboardAvoidingViewProps["behavior"]>("position");
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 20
        }}
        enabled={Platform.OS === "ios"}
        behavior={behavior}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Behavior value={"height"} currentValue={behavior} onPress={() => setBehavior("height")}/>
          <Behavior value={"position"} currentValue={behavior} onPress={() => setBehavior("position")}/>
          <Behavior value={"padding"} currentValue={behavior} onPress={() => setBehavior("padding")}/>
          <Behavior value={undefined} currentValue={behavior} onPress={() => setBehavior(undefined)}/>
        </View>
        <ScrollView>
          <Boxes/>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
