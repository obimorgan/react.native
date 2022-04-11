/** @format */

import React, { useState } from 'react'
import { View, TextInput, Modal, Button } from 'react-native'
import { styles } from '../styles/homeStyles'

function AddGoal(props) {
	const [enteredGoalText, setEnteredGoalText] = useState('')

	const goalInputHandler = (enteredGoalText) => {
		setEnteredGoalText(enteredGoalText)
	}

	const addGoalHandler = () => {
		props.handleAddGoal(enteredGoalText)
		setEnteredGoalText('')
	}

	return (
		<Modal visible={props.openModal} animationType='slide'>
			<View style={styles.AddGoalContainer}>
				<TextInput
					value={enteredGoalText}
					style={styles.AddGoalInput}
					onChangeText={goalInputHandler}
					placeholder='Add new goal'
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttons}>
						<Button title='Add Goal' onPress={addGoalHandler} />
					</View>
					<View style={styles.buttons}>
						<Button title='Close' onPress={props.closeModal} />
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default AddGoal
