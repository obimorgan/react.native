/** @format */
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
	AppContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	AddGoalContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomColor: '#cccccc',
	},
	AddGoalInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		padding: 8,
	},
	AddGoalInputBtn: {
		borderRadius: 50,
	},
	goalsContainer: {
		flex: 5,
		borderTopWidth: 1,
	},
})
