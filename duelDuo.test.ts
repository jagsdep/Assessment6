
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('Clicking the draw button displays ', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click()

    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)

    
})
test('Clicking the add to duo button displays the player id', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click()
    const addBtn = await driver.findElement(By.className('bot-btn'))
    await addBtn.click()

    const playerId = await driver.findElement(By.id('player-duo'))
    const displayed = await playerId.isDisplayed()
    expect(displayed).toBe(true)

    
})