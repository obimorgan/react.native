/** @format */

import React, { useState } from 'react'
import { View, TextInput, Modal, Button, Image } from 'react-native'
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
				<Image styles={styles.image} source={require('../assets/favicon.png')} />
				<TextInput
					value={enteredGoalText}
					style={styles.AddGoalInput}
					onChangeText={goalInputHandler}
					placeholder='Add new goal'
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttons}>
						<Button color='#e5e5e5' title='Add Goal' onPress={addGoalHandler} />
					</View>
					<View style={styles.buttons}>
						<Button color='#f48c06' title='Close' onPress={props.closeModal} />
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default AddGoal
