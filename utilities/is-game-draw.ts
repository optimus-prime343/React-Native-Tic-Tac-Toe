import { PlayerMarker } from '../types/player-marker'
import { isGameOver } from './is-game-over'

export const isGameDraw = (markers: PlayerMarker[]): boolean => {
  if (
    markers.length === 9 &&
    !isGameOver(markers) &&
    !markers.includes(undefined)
  ) {
    return true
  }
  return false
}
