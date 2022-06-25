import { PlayerMarker } from '../types/player-marker'
import { isGameOver } from './is-game-over'

export const isGameDraw = (markers: PlayerMarker[]): boolean => {
  const undefinedMarkers = markers.filter(marker => marker === undefined)
  if (
    markers.length === 9 &&
    undefinedMarkers.length === 0 &&
    !isGameOver(markers)
  ) {
    return true
  }
  return false
}
