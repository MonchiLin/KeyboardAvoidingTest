import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function Boxes() {
  return <>
    {
      [...Array(100).keys()]
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
            <TextInput placeholder={"Input"}/>
          </View>;
        })
    }
  </>;
}

export default function KeyboardAvoidingCommon() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Text style={{ flex: 1 }} numberOfLines={1}>I am a KeyboardAwareScrollView</Text>
        <Text style={{ flex: 1 }} numberOfLines={1}>I am a View</Text>
        <Text style={{ flex: 1 }} numberOfLines={1}>I am a ScrollView</Text>
      </View>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <KeyboardAwareScrollView contentContainerStyle={[styles.border]} enableOnAndroid>
          <Boxes/>
        </KeyboardAwareScrollView>
        <View style={[{ flex: 1, }, styles.border]}>
          <Boxes/>
        </View>
        <ScrollView contentContainerStyle={[styles.border,]} style={{ flex: 1 }}>
          <Boxes/>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    borderColor: "gray",
    borderWidth: 1,
    borderStyle: "dashed"
  }
});
