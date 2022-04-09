/** @format */

import React, { useState } from 'react'
import { View, TextInput, Text, Button } from 'react-native'
import { styles } from '../styles/homeStyles'

function AddGoal(props) {
	const [text, setText] = useState('')
	const goalInputHandler = (text) => {
		setNewGoal(text)
	}
	return (
		<View style={styles.AddGoalContainer}>
			<TextInput
				style={styles.AddGoalInput}
				onChangeText={goalInputHandler}
				value={text}
				placeholder='Add new goal'
				keyboardType='text'
			/>
			<Button
				title='Add Goal'
				onClickonPress={() => {
					props.handleAddGoal
				}}
			/>
		</View>
	)
}

export default AddGoal
