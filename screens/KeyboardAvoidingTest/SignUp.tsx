import { Button, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';

function StyledInput() {
  return <TextInput
    style={{
      height: 60,
      marginBottom: 20,
      marginTop: 20,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#919191"
    }}
    placeholder={"please enter ..."}/>;
}

function Logo() {
  return <View
    style={{ width: 100, height: 100, backgroundColor: "#3f69d2", justifyContent: "center", alignItems: "center" }}>
    <Text>Logo</Text>
  </View>;
}

export default function SignUp() {
  return <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
    <View style={{ height: 40, justifyContent: "center", alignItems: "center" }}>
      <Text>Sign Up Header</Text>
    </View>
    <KeyboardAvoidingView behavior={Platform.select({ ios: "padding", default: undefined })} style={{ flex: 1 }}>
      <ScrollView>
        <Logo/>
        <StyledInput/>
        <StyledInput/>
        <StyledInput/>
        <StyledInput/>
        <StyledInput/>
        <StyledInput/>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Button title={"Sign Up"}/>
          <Button title={"Sign In"}/>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>;
}
