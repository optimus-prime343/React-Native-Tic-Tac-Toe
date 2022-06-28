import { PlayerMarker } from '../types/player-marker'
import { isGameDraw } from '../utilities/is-game-draw'

const DRAW_MARKERS: PlayerMarker[] = [
  PlayerMarker.X,
  PlayerMarker.X,
  PlayerMarker.O,
  PlayerMarker.O,
  PlayerMarker.O,
  PlayerMarker.X,
  PlayerMarker.X,
  PlayerMarker.O,
  PlayerMarker.O
]
describe('is-game-draw', () => {
  describe('given the player markers', () => {
    it('should return true if all markers are filled and the game is not over', () => {
      expect(isGameDraw(DRAW_MARKERS)).toBe(true)
    })
  })
})
