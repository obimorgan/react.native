/** @format */
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
	AppContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	AddGoalContainer: {
		padding: 10,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 1,
	},
	AddGoalInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '100%',
		padding: 8,
	},
	AddGoalInputBtn: {
		borderRadius: 50,
	},
	goalsContainer: {
		flex: 10,
	},
	goalItem: {
		borderWidth: 1,
		borderColor: '#cccccc',
		padding: 10,
		marginTop: 5,
		color: '#1d3557',
		backgroundColor: '#94d2bd',
	},
	pressed: {
		opacity: 0.5,
	},
	buttonsContainer: {
		display: 'flex',
		flexDirection: 'row',
	},
	buttons: {
		width: 100,
		height: 40,
		marginHorizontal: 1,
		borderWidth: 1,
		backgroundColor: '#94d2bd',
		borderRadius: 5,
		borderColor: '#cccccc',
		marginTop: 10,
	},
})
