import {
  FlatList,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ViewStyle
} from 'react-native'
import React, { useMemo, useState } from 'react'
import { useToast } from 'react-native-toast-notifications'

import { SIZING } from '../constants/sizing'
import { COLORS } from '../constants/colors'
import { PlayerMarker } from '../types/player-marker'
import { isGameOver } from '../utilities/is-game-over'
import GameOverModal from './game-over-modal'
import { Player } from '../types/player'
import { isGameDraw } from '../utilities/is-game-draw'

interface Props {
  style?: StyleProp<ViewStyle>
  onGameOver: (winner: Player) => void
}
const boardElements = Array.from({ length: 9 }).map((_, index) => index)

// randomly generates a player marker when the game is first started
const randomPlayerMarker = () =>
  Math.random() < 0.5 ? PlayerMarker.X : PlayerMarker.O

const GameBoard = ({ style, onGameOver }: Props) => {
  const toast = useToast()
  const { width } = useWindowDimensions()
  const [marker, setMarker] = useState<PlayerMarker>(() => randomPlayerMarker())
  const [markers, setMarkers] = useState<PlayerMarker[]>([])
  const [winner, setWinner] = useState<Player | undefined>(undefined)

  const currentPlayer = useMemo<Player>(
    () => (marker === PlayerMarker.X ? Player.PLAYERONE : Player.PLAYERTWO),
    [marker]
  )
  //size of each board item = width of screen / 3 - default padding
  const boardSize = width / 3 - 16

  const restartGame = () => {
    setMarkers([])
    setWinner(undefined)
  }
  const handleGameDraw = () => {
    toast.show('Game Draw!', { type: 'info' })
    setMarkers([])
    setMarker(randomPlayerMarker())
  }

  const handleBoardItemPress = (index: number) => {
    // if the marker at the given index is not empty,do nothing
    if (markers[index] !== undefined) return
    setMarkers(prevMarkers => {
      prevMarkers[index] = marker
      setMarker(currMarker =>
        currMarker === PlayerMarker.X ? PlayerMarker.O : PlayerMarker.X
      )
      if (isGameOver(prevMarkers)) {
        setWinner(currentPlayer)
        onGameOver(currentPlayer)
      }
      if (isGameDraw(prevMarkers)) {
        handleGameDraw()
      }
      return prevMarkers
    })
  }

  const renderBoardElements = () => {
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={boardElements}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => handleBoardItemPress(index)}
            style={[styles.boardItem, { width: boardSize, height: boardSize }]}
          >
            <Text style={styles.boardItemText}>
              {markers[index] ? markers[index].toString() : ''}
            </Text>
          </Pressable>
        )}
        keyExtractor={item => item.toString()}
        numColumns={3}
      />
    )
  }
  if (winner)
    return (
      <GameOverModal
        text={`${winner} won the Game`}
        onGameRestart={restartGame}
      />
    )
  return (
    <View style={[styles.container, style]}>
      {renderBoardElements()}
      <Text style={styles.currentTurn}>Current Turn : {currentPlayer}</Text>
    </View>
  )
}

export default GameBoard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boardItem: {
    margin: 6,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZING.defaultBorderRadius
  },
  boardItemText: {
    fontSize: 56,
    fontWeight: 'bold'
  },
  currentTurn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    backgroundColor: 'green',
    padding: 8,
    borderRadius: SIZING.defaultBorderRadius
  }
})
