import {
  Animated,
  Button,
  Easing,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useRef, useState } from "react";

function ItemView({ item }: { item: number }) {
  return <View
    key={item}
    style={{
      width: "100%",
      backgroundColor: item % 2 === 0 ? "#b7b7b7" : "#828ebe",
      height: 40,
      justifyContent: "center",
      alignItems: "center"
    }}>
    <Text>Chart Message {item}</Text>
  </View>;
}

const MoreView = ({ visible }: { visible: boolean }) => {
  const v = useRef(new Animated.Value(visible ? 200 : 0));

  useEffect(() => {
    Animated.timing(v.current, {
      toValue: visible ? 200 : 0,
      useNativeDriver: false,
      duration: 1000,
      easing: Easing.bounce
    }).start();
  }, [visible]);

  return <Animated.View
    style={{ width: "100%", height: v.current, backgroundColor: "#75a67a" }}>

  </Animated.View>;
};

export default function KeyboardAvoidingChart() {
  const insets = useSafeAreaInsets();
  const listRef = useRef<FlatList>(null);
  const inputRef = useRef<TextInput>(null);
  const [data, setData] = useState([...Array(30).keys()]);
  const [moreViewVisible, setMoreViewVisible] = useState(false);

  const onSendPress = () => {
    setData(state => [...state, state.length]);
    setImmediate(() => listRef.current?.scrollToEnd());
  };

  const onFocus = () => {
    setMoreViewVisible(false);
  };

  const onMorePress = () => {
    Keyboard.dismiss();
    setMoreViewVisible(state => !state);
  };

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={{ height: 40, justifyContent: "center", alignItems: "center" }}>
        <Text>Fixed Header</Text>
      </View>
      <KeyboardAvoidingView behavior={Platform.select({ ios: "padding", default: undefined })} style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <FlatList
            ref={listRef}
            data={data}
            renderItem={({ item }) => <ItemView item={item}/>}
          />
        </View>
        <View style={{ height: 40, flexDirection: "row" }}>
          <TextInput
            ref={inputRef}
            style={{ backgroundColor: "#dadada", flex: 1, paddingLeft: 20 }}
            placeholder={"input something"}
            onFocus={onFocus}
          />
          <Button onPress={onSendPress} title={"Send"}/>
          <Button onPress={onMorePress} title={"More"}/>
        </View>
        {<MoreView visible={moreViewVisible}/>}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
