import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import style from '../styles/style.js'
export default function Header() {
  return (
	<View style={style.header}>
		<Text style={style.title}>Mini Yahtzee</Text>
	</View>
  )
}
