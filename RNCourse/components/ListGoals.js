/** @format */

import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from '../styles/homeStyles'

export default function ListGoals(props) {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: '#e63946' }}
				style={({ pressed }) => pressed && styles.pressed}
				onPress={props.onDeleteItem.bind(this, props.id)}
			>
				<Text style={{ color: '#03071e', fontWeight: '600' }}>{props.text}</Text>
			</Pressable>
		</View>
	)
}
