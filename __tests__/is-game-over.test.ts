import { PlayerMarker } from '../types/player-marker'
import { isGameOver } from '../utilities/is-game-over'

// fill the markers at given indexes with the same marker for testing purposes
const fillMarkers = (...indexes: number[]): PlayerMarker[] => {
  return Array.from({ length: 9 })
    .map((_, index) => index)
    .map(index => (indexes.includes(index) ? PlayerMarker.X : PlayerMarker.O))
}

describe('fill-markers', () => {
  describe('given the indexes to fill', () => {
    it('should return an array of markers', () => {
      expect(fillMarkers(0, 1, 2)).toEqual([
        PlayerMarker.X,
        PlayerMarker.X,
        PlayerMarker.X,
        PlayerMarker.O,
        PlayerMarker.O,
        PlayerMarker.O,
        PlayerMarker.O,
        PlayerMarker.O,
        PlayerMarker.O
      ])
    })
  })
})
describe('is-game-over', () => {
  describe('given the player markers', () => {
    it('should return true if markers at index 0, 1 and 2 are equal', () => {
      expect(isGameOver(fillMarkers(0, 1, 2))).toBe(true)
    })
    it('should return true if markers at index 3,4 and 5 are equal', () => {
      expect(isGameOver(fillMarkers(3, 4, 5))).toBe(true)
    })
    it('should return true if markers at index 6,7 and 8 are equal', () => {
      expect(isGameOver(fillMarkers(6, 7, 8))).toBe(true)
    })
    it('should return true if markers at index 0,3 and 6 are equal', () => {
      expect(isGameOver(fillMarkers(0, 3, 6))).toBe(true)
    })
    it('should return true if markers at index 1,4 and 7 are equal', () => {
      expect(isGameOver(fillMarkers(1, 4, 7))).toBe(true)
    })
    it('should return true if markers at index 2,5 and 8 are equal', () => {
      expect(isGameOver(fillMarkers(2, 5, 8))).toBe(true)
    })
    it('should return true if markers at index 0,4 and 8 are equal', () => {
      expect(isGameOver(fillMarkers(0, 4, 8))).toBe(true)
    })
    it('should return true if markers at index 2,4 and 6 are equal', () => {
      expect(isGameOver(fillMarkers(2, 4, 6))).toBe(true)
    })
  })
})
