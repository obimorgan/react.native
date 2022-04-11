/** @format */
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
	AppContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
		backgroundColor: '#370617',
	},
	AddGoalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#6a040f',
		paddingHorizontal: 16,
	},
	AddGoalInput: {
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#cccccc',
		width: '100%',
		padding: 14,
		backgroundColor: '#cccccc',
		margin: 10,
		marginTop: 50,
		color: '#000000',
	},
	AddGoalInputBtn: {
		borderRadius: 50,
	},
	goalsContainer: {
		height: '100%',
	},
	goalItem: {
		borderWidth: 1,
		borderColor: '#cccccc',
		padding: 10,
		marginTop: 5,
		backgroundColor: '#e85d04',
		borderRadius: 5,
	},
	pressed: {
		opacity: 0.5,
	},
	buttonsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	buttons: {
		width: 100,
		height: 40,
		marginHorizontal: 1,
		borderWidth: 1,
		backgroundColor: '#03071e',
		borderRadius: 5,
		borderColor: '#03071e',
		marginTop: 10,
	},
	image: {
		width: 100,
		height: 100,
		marginBottom: 20,
	},
})
