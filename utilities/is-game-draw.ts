import { PlayerMarker } from '../types/player-marker'
import { isGameOver } from './is-game-over'

export const isGameDraw = (markers: PlayerMarker[]): boolean => {
  const isDraw =
    !isGameOver(markers) &&
    markers.every(
      marker => marker === PlayerMarker.X || marker === PlayerMarker.O
    )
  console.log('isDraw', isDraw)
  return isDraw
}
