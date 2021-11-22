import { convertToObject } from "typescript"

const {shuffleArray} = require('./utils')


describe('shuffleArray should', () => {
    // CODE HERE
    test('Shuffle Array returns array of the same length', () => {
        let shuffledArray = shuffleArray(['Crowbar', 'Nozzle', 'Brobot', 'Rusty'])
        console.log('shuffleObj', shuffledArray)
        expect(shuffledArray).toHaveLength(4)
    })

    test('Shuffle Array returns array', () => {
        let shuffledArray = shuffleArray(['Crowbar', 'Nozzle', 'Brobot', 'Rusty'])
        console.log('shuffleObj', shuffledArray)
        //expect(typeof shuffledArray).toBe('object')
        expect(Array.isArray([shuffledArray])).toBe(true);
    }) 
  

})