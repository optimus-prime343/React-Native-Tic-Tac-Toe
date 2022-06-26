import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { SIZING } from '../constants/sizing'
import { COLORS } from '../constants/colors'

const PlayerMarkersInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.markerInfo}>
        <Text style={styles.playerText}>Player 1</Text>
        <Text style={styles.markerText}>X</Text>
      </View>
      <View style={styles.markerInfo}>
        <Text style={styles.playerText}>Player 2</Text>
        <Text style={styles.markerText}>O</Text>
      </View>
    </View>
  )
}

export default PlayerMarkersInfo

const styles = StyleSheet.create({
  container: {
    padding: SIZING.defaultPadding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  markerInfo: {
    alignItems: 'center'
  },
  playerText: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: COLORS.text
  },
  markerText: {
    fontSize: 36,
    color: COLORS.primary
  }
})
