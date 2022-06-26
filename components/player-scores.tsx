import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { SIZING } from '../constants/sizing'
import { COLORS } from '../constants/colors'

interface Props {
  playerOneScore: number
  playerTwoScore: number
}
const PlayerScores = ({ playerOneScore, playerTwoScore }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>Player 1 : {playerOneScore}</Text>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>Player 2 : {playerTwoScore}</Text>
      </View>
    </View>
  )
}

export default PlayerScores

const styles = StyleSheet.create({
  container: {
    padding: SIZING.defaultPadding,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  scoreContainer: {
    padding: 6,
    backgroundColor: COLORS.primary,
    borderRadius: SIZING.defaultBorderRadius
  },
  score: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold'
  }
})
