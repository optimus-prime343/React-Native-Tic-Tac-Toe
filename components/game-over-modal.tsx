import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'
import { SIZING } from '../constants/sizing'

interface Props {
  title?: string
  text?: string
  onGameRestart: () => void
}
const GameOverModal = ({ title = 'Game Over', text, onGameRestart }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text
          style={[
            styles.title,
            { marginBottom: text ? 0 : SIZING.defaultPadding }
          ]}
        >
          {title}
        </Text>
        {text && <Text style={styles.text}>{text}</Text>}
        <Button
          onPress={onGameRestart}
          color={COLORS.primary}
          title='Restart Game'
        />
      </View>
    </View>
  )
}

export default GameOverModal

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    zIndex: 100
  },
  modal: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.background,
    padding: SIZING.defaultPadding,
    borderRadius: SIZING.defaultBorderRadius
  },
  title: {
    fontSize: 32,
    color: COLORS.primary,
    fontWeight: 'bold'
  },
  text: {
    marginVertical: SIZING.defaultPadding,
    color: COLORS.text
  }
})
