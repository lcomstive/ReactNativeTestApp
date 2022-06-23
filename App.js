import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler'

import Chat from './components/Chat';
import { Styles } from './Styles';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import Register from './components/Register';

const Stack = createStackNavigator();

const NavigationStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Login"
				component={Login} 
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen
				name="Register"
				component={Register}
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Chat" component={Chat} />
		</Stack.Navigator>
	)
}

export default function App()
{
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }} >
				<NavigationContainer>
					<NavigationStack />
				</NavigationContainer>
			</SafeAreaView>
		</GestureHandlerRootView>
	)
}