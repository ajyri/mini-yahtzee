import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import style from '../styles/style.js'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
export default function Game() {
	const [game, setGame] = useState(false);
	const [values, setValues] = useState([]);
	const [throws, setThrows] = useState(0)
	const [selection, setSelection] = useState(null)
	const [rounds, setRounds] = useState(1)
	const [scoreList, setScoreList] = useState([])
	const [errorText, setErrorText] = useState('')
	const BONUS = 63

	useEffect(() => {
		if (selection && selection.amount === 5) {
			setScore()
		}
	}, [selection])

	useEffect(() => {
		if (rounds === 0 && game) {
			setGame(false)
		} else if (game) {
			startGame()
		}
	}, [rounds])

	function startGame() {
		setThrows(3)
		setValues([])

		if (!game) {
			setSelection(null)
			setRounds(6)
			setScoreList([])
			for (let i = 0; i < 6; i++) {
				setScoreList(scoreList => [...scoreList, { score: 0 }])
			}
		}

		setGame(true)

		for (let i = 0; i < 5; i++) {
			setValues(values => [...values, { value: Math.floor(Math.random() * 6) + 1, selected: false }])
		}
	}

	function rollDice() {
		setErrorText('')
		if (selection === null) {
			setValues([])
			for (let i = 0; i < 5; i++) {
				setValues(values => [...values, { value: Math.floor(Math.random() * 6) + 1, selected: false }])
			}
		} else {
			let temp = values.map(element =>
				({ ...element }))

			for (let i = 0; i < 5; i++) {
				if (!temp[i].selected) {
					temp[i].value = Math.floor(Math.random() * 6) + 1
					if (throws === 1 && temp[i].value == selection.value) {
						temp[i].selected = true
						selection.amount++
					}
				}
			}
			setValues(temp)


		}
		setThrows(throws - 1)
	}


	function selectElement(i) {
		let temp = values.map(element =>
			({ ...element }))
		temp[i].selected = !temp[i].selected

		let scoreIndex = temp[i].value - 1

		if (selection !== null && temp[i].value !== selection.value) {
			setErrorText('You can only select dices with the same value.')
			return
		}
		else if (scoreList[scoreIndex].score) {
			setErrorText('Score already set. Pick another value.')
			return
		}
		setErrorText('')
		if (selection === null) {
			setSelection({ value: temp[i].value, amount: 1 })
			setValues(temp)
		} else if (temp[i].value === selection.value && temp[i].selected) {
			setSelection({ value: temp[i].value, amount: selection.amount + 1 })
			setValues(temp)
			if (selection && temp[i].amount === 4) {
				setThrows(0)
			}
		} else if (temp[i].value === selection.value && !temp[i].selected) {
			let amount = selection.amount - 1
			setSelection({ value: temp[i].value, amount: selection.amount - 1 })
			setValues(temp)
			if (amount === 0) {
				setSelection(null)
			}
		}



	}

	function setScore() {
		if (selection === null) {
			setErrorText('No score set, please try again')
			setSelection(null)
			startGame()
		} else {
			let index = selection.value - 1
			let temp = scoreList.map(element =>
				({ ...element }))
			temp[index].score = selection.value * selection.amount
			setRounds(rounds - 1)
			setScoreList(temp)
			setSelection(null)
		}
	}

	function PrintTotal() {
		if (game || rounds === 0) {
			let score = 0
			scoreList.forEach(element => {
				score += element.score
			});
			let bonusCalc = BONUS - score
			return (
				<View style={style.scoreView}>
					<Text style={style.total}>{'Total score: ' + score}</Text>
					<Text style={style.bonus}>{bonusCalc > 0 ? 'You are ' + bonusCalc + ' points away from the bonus' : 'You got the bonus!'}</Text>
				</View>
			)
		}
	}

	function PrintDice() {
		return values.map((element, i) => {
			return (
				<Pressable key={i} onPress={() => selectElement(i)}>
					<MaterialCommunityIcons color={element.selected ? '#dc143c' : 'black'} key={i} name={'dice-' + element.value} size={60} ></MaterialCommunityIcons>
				</Pressable>
				// <Text key={i} style={element.selected ? style.diceSelect : style.dice} onPress={() => selectElement(i)}>{element.value}</Text>
			)


		})
	}

	function PrintScore() {
		return scoreList.map((element, i) => {
			return (
				<Text key={i} style={element.score < 10 ? style.score : style.score2}>{element.score}</Text>
			)


		})
	}

	function PrintNumbers() {
		if (game || rounds === 0) {
			let nums = [1, 2, 3, 4, 5, 6]
			return nums.map((element, i) => {
				if (scoreList[i].score !== 0) {
					return (
						<Text key={i} style={style.numberSet}>{element}</Text>
					)
				} else {
					return (
						<Text key={i} style={style.number}>{element}</Text>
					)
				}
			})
		}
	}

	function ScoreButton() {
		if (throws === 0 && game) {
			return (
				<Button title={'Set Score'} color='#dc143c' onPress={() => setScore()}></Button>
			)
		}
	}

	function GameButton() {
		if (!game) {
			return (
				<Button color='#dc143c' title={'New Game'} onPress={() => startGame()}></Button>
			)
		} else if (game && throws !== 0) {
			return (
				<Button color='#dc143c' title={'Throw Dice'} onPress={() => rollDice()}></Button>
			)
		}
	}

	return (
		<View style={style.gameboard}>
			<Text style={style.error}>{errorText}</Text>

			<View style={style.diceList}>
				<PrintDice></PrintDice>
			</View>

			<Text style={style.throws}>{game ? 'Throws left: ' + throws : ''}</Text>
			<Text style={style.throws}>{rounds === 0 ? 'Game over.' : ''}</Text>
			<GameButton></GameButton>
			<ScoreButton></ScoreButton>

			<View style={style.scoreList}>
				<PrintScore></PrintScore>
			</View>

			<View style={style.scoreList}>
				<PrintNumbers></PrintNumbers>
			</View>
			<PrintTotal></PrintTotal>
		</View>
	)
}
