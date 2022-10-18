import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import style from '../styles/style.js'
export default function Footer() {
  return (
	<View style={style.footer}>
		<Text style={style.title}>Made By: Jyri Ahola</Text>
	</View>
  )
}