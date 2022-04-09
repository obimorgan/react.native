/** @format */

import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AddGoal from './AddGoal'
import ListGoals from './ListGoals'
import { styles } from '../styles/homeStyles'

const Home = () => {
	const [newGoal, setNewGoal] = useState([])
	function handleAddGoal() {
		setNewGoal((currentGoal) => [
			...currentGoal,
			{
				text: newGoal,
				id: Math.random().toString(),
			},
		])
	}
	return (
		<View style={styles.AppContainer}>
			<View style={styles.AddGoalContainer}>
				<AddGoal onAddGoal={handleAddGoal} />
			</View>
			<View style={styles.goalsContainer}>
				<ListGoals />
			</View>
		</View>
	)
}
export default Home
