import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import { COLORS } from '../constants/colors'
import GameBoard from '../components/game-board'
import PlayerMarkersInfo from '../components/player-markers-info'
import PlayerScores from '../components/player-scores'
import { Player } from '../types/player'

const HomeScreen = () => {
  const [playerOneScore, setPlayerOneScore] = useState(0)
  const [playerTwoScore, setPlayerTwoScore] = useState(0)

  const handleGameOver = (winner: Player) => {
    if (winner === Player.PLAYERONE) {
      setPlayerOneScore(currScore => currScore + 1)
    } else {
      setPlayerTwoScore(currScore => currScore + 1)
    }
  }

  return (
    <View style={styles.home}>
      <PlayerScores
        playerOneScore={playerOneScore}
        playerTwoScore={playerTwoScore}
      />
      <GameBoard onGameOver={handleGameOver} />
      <PlayerMarkersInfo />
    </View>
  )
}
const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: COLORS.background
  }
})
export default HomeScreen
