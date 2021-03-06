/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import LinkingConfiguration from './LinkingConfiguration';
import KeyboardAvoidingCommon from "../screens/KeyboardAvoidingTest/KeyboardAvoidingCommon";
import KeyboardAvoidingTest from "../screens/KeyboardAvoidingTest";
import KeyboardAvoidingBehavior from '../screens/KeyboardAvoidingTest/KeyboardAvoidingBehavior';
import KeyboardAvoidingChart from "../screens/KeyboardAvoidingTest/KeyboardAvoidingChart";
import ResizeVSPan from "../screens/KeyboardAvoidingTest/ResizeVSPan";
import SignUp from "../screens/KeyboardAvoidingTest/SignUp";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator/>
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName={'KeyboardAvoiding'}>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }}/>
      <Stack.Group>
        <Stack.Screen name="KeyboardAvoiding" component={KeyboardAvoidingTest}
                      options={{ title: 'KeyboardAvoidingEntry' }}/>
        <Stack.Screen name="KeyboardAvoidingCommon" component={KeyboardAvoidingCommon}
                      options={{ title: 'KeyboardAvoidingCommon' }}/>
        <Stack.Screen name="KeyboardAvoidingBehavior" component={KeyboardAvoidingBehavior}
                      options={{ title: 'KeyboardAvoidingBehavior', headerShown: false }}/>
        <Stack.Screen name="KeyboardAvoidingChart" component={KeyboardAvoidingChart}
                      options={{ title: 'KeyboardAvoidingChart', headerShown: false }}/>
        <Stack.Screen name="ResizeVSPan" component={ResizeVSPan}
                      options={{ title: 'ResizeVSPan', headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp}
                      options={{ title: 'SignUp', headerShown: false }}/>
        <Stack.Screen name="KeyboardAvoidingSignIn" component={KeyboardAvoidingCommon}
                      options={{ title: 'KeyboardAvoidingSignIn' }}/>
      </Stack.Group>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }}/>
      <Stack.Group
        screenOptions={{ presentation: 'transparentModal', headerShown: false, animation: "slide_from_bottom" }}>
        <Stack.Screen name="Modal" component={ModalScreen}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color}/>,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
