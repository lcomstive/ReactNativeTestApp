/// https://blog.expo.dev/how-to-build-a-chat-app-with-react-native-3ef8604ebb3c

import React from 'react';
import { Icon } from 'react-native-elements';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

import { Styles, TextColourSecondary } from '../Styles';

export default class Login extends React.Component {
	state = {
		name: '',
		password: ''
	}

	render() {
		return (
			<View style={Styles.loginView}>
				<Text style={Styles.loginTitle}>Login</Text>
				<TextInput
					style={Styles.textInput}
					placeholder="Username"
					value={this.state.name}
					placeholderTextColor={TextColourSecondary}
					onChangeText={this.onChangeName}
					/>
				<TextInput
					style={Styles.textInput}
					placeholder="Password"
					textContentType='password'
					secureTextEntry={true}
					value={this.state.password}
					placeholderTextColor={TextColourSecondary}
					onChangeText={this.onChangePassword}
					/>

				<TouchableOpacity onPress={this.onLoginPressed} style={Styles.loginButton}>
					<Icon name="arrow-right" size={20} color="white" />
				</TouchableOpacity>
				<TouchableOpacity onPress={this.onRegisterPressed} style={Styles.registerButton}>
					<Text style={Styles.registerButtonText}>Register</Text>
				</TouchableOpacity>
			</View>
		)
	}

	onChangeName = name => this.setState({ name, password: this.state.password });
	onChangePassword = password => this.setState({ name: this.state.name, password })

	onLoginPressed = () => {
		Navigation.setRoot
		this.props.navigation.navigate('Home', { name: this.state.name })
	}

	onRegisterPressed = () => {
		this.props.navigation.navigate('Register', { name: this.state.name })
	}
}