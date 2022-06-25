import { PlayerMarker } from '../types/player-marker'

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
export const isGameOver = (markers: PlayerMarker[]): boolean => {
  for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
    const [a, b, c] = WINNING_COMBINATIONS[i]
    if (
      markers[a] === undefined &&
      markers[b] === undefined &&
      markers[c] === undefined
    ) {
      return false
    }
    if (markers[a] === markers[b] && markers[b] === markers[c]) {
      return true
    }
  }
  return false
}
