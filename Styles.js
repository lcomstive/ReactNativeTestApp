import { StyleSheet, Dimensions } from "react-native";

export const TextColourPrimary = '#000';
export const TextColourSecondary = '#adadad';

export const AccentColour = '#007efc';
export const BackgroundColour = '#fff';
export const TextInputBackgroundColour = '#f7f7f7';

export const Styles = StyleSheet.create({
	textInput: {
		color: TextColourPrimary,
		borderRadius: 10,
		backgroundColor: TextInputBackgroundColour,
		padding: 20,
		paddingTop: 5,
		paddingBottom: 5,
		textAlign: 'center',
		marginTop: 5,
		width: Math.min(Dimensions.get('window').width * 0.75, 200)
	},
	
	// Login
	loginView: {
		flex: 1,
		backgroundColor: BackgroundColour,
		justifyContent: 'center',
		alignItems: 'center'
	},

	loginTitle: {
		color: TextColourPrimary,
		marginBottom: 40,
		fontSize: 24
	},

	loginButton: {
		color: TextColourPrimary,
		marginTop: 10,
		paddingTop: 4,
		paddingBottom: 4,
		textAlign: 'center',
		backgroundColor: AccentColour,
		borderRadius: 10,
		width: Math.min(Dimensions.get('window').width * 0.75, 200)
	},

	registerButton: {
		color: AccentColour,
		marginTop: 10,
		paddingTop: 4,
		paddingBottom: 5,
		textAlign: 'center',
		borderRadius: 10,
		width: Math.min(Dimensions.get('window').width * 0.75, 200)
	},

	registerButtonText: {
		fontSize: 14,
		textAlign: 'center',
		color: AccentColour
	}
});
