import React from 'react';
import { Icon } from 'react-native-elements';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

import { Styles, TextColourSecondary } from '../Styles';

export default class Register extends React.Component {
	state = {
		name: '',
		password: ''
	}

	render() {
		return (
			<View style={Styles.loginView}>
				<Text style={Styles.loginTitle}>Register</Text>
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
				<TouchableOpacity onPress={this.onRegisterPressed} style={Styles.loginButton}>
					<Icon name="arrow-right" size={20} color="white" />
				</TouchableOpacity>
				<TouchableOpacity onPress={this.onLoginPressed} style={Styles.registerButton}>
					<Text style={Styles.registerButtonText}>Login</Text>
				</TouchableOpacity>
			</View>
		)
	}

	onChangeName = name => this.setState({ name, password: this.state.password });
	onChangePassword = password => this.setState({ name: this.state.name, password })

	onRegisterPressed = () => {
		this.props.navigation.navigate('Login', { name: this.state.name });
	}

	onLoginPressed = () => {
		this.props.navigation.navigate('Login');
	}
}