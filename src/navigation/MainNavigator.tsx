import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from './Splash';
import Home from './Home'
const Stack = createStackNavigator();


const MainNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: false,
                headerShown: false,
            }}>
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{
                    header: () => null,
                }}
                initialParams={{ user: 'me' }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Home Title' }}
            />
        </Stack.Navigator>
    );
}
// export default createAppContainer(
//     MainNavigator
// );

export default function Main() {
    return <NavigationContainer><MainNavigator/></NavigationContainer>;
}
