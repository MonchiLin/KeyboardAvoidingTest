import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';

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

export default function ResizeVSPan() {
  return <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 40, justifyContent: "center", alignItems: "center" }}>
      <Text>Fixed Header</Text>
    </View>
    <ScrollView>
      <View style={{ backgroundColor: "#282fbe", height: 40, justifyContent: "center", alignItems: "center" }}>
        <Text>Inner Header</Text>
      </View>
      <Boxes/>
    </ScrollView>
  </SafeAreaView>;
}
