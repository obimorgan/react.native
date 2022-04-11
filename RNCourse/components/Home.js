/** @format */

import React, { useState } from 'react'
import { Button, FlatList, View } from 'react-native'
import { styles } from '../styles/homeStyles'
import AddGoal from './AddGoal'
import ListGoals from './ListGoals'

const Home = () => {
	const [goals, setGoals] = useState([])
	const [openModal, setOpenModal] = useState(false)

	function handleAddGoal(enteredGoalText) {
		setGoals((currentGoal) => [
			...currentGoal,
			{
				text: enteredGoalText,
				id: Math.random().toString(),
			},
		])
		hadleCloseModal()
	}
	function deleteGoalHandler(id) {
		setGoals((currentGoal) => {
			return currentGoal.filter((goal) => goal.id !== id)
		})
	}

	const handleOpenModal = () => {
		setOpenModal(true)
	}
	const hadleCloseModal = () => {
		setOpenModal(false)
	}
	return (
		<View style={styles.AppContainer}>
			<View>
				<Button title='Add Goal' onPress={handleOpenModal} />
			</View>
			<View style={styles.AddGoalContainer}>
				<AddGoal handleAddGoal={handleAddGoal} openModal={openModal} closeModal={hadleCloseModal} />
			</View>
			<View style={styles.goalsContainer}>
				<FlatList
					data={goals}
					renderItem={(itemData) => {
						return <ListGoals id={itemData.item.id} text={itemData.item.text} onDeleteItem={deleteGoalHandler} />
					}}
					keyExtractor={(item, index) => {
						return item.id
					}}
					alwaysBounceVertical={false}
				></FlatList>
			</View>
		</View>
	)
}
export default Home
