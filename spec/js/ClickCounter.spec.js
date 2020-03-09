describe('Cookie Clicker Game', () => {

    let sut

    beforeEach(() => {
        sut = new CookieClicker()
        sut.clickCount = 0
        sut.companionCount = 0
        sut.companionCost = 100

        sut.compounderCount = 0
        sut.compounderCost = 10
    })

    // Iteration #1 Tests
    describe('Click Tests', () => {
        describe('Upon initializing the game, the click count should be set to 0', () => {
            it('Initial clickCount should be 0', () => {
                expect(sut.clickCount).toBe(0)
            })
        })
    
        describe('When a click action is carried out, the click count should increase by 1', () => {
            it('clickCount should increment by 1 from 0', () => {
                sut.clickAction()
                expect(sut.clickCount).toBe(1)
            })
        })

        describe('When a Companion is purchased, the click count should decrease by its cost value', () => {
            it('Click count cost should decrease by 100 upon Companion purchase', () => {
                sut.clickCount = 100
                sut.companionBuy()
                expect(sut.clickCount).toBe(0)
            })
        })
    })
    

    describe('Companion Tests', () => {
        describe('Upon initializing the game, the Companion count should be set to 0', () => {
            it('Initial companionCount should be 0', () => {
                expect(sut.companionCount).toBe(0)
            })
        })
    
        describe('When a Companion add action is carried out, the Companion count should increase by 1', () => {
            it('companionCount should increment by 1 from 0', () => {
                sut.companionAdd()
                expect(sut.companionCount).toBe(1)
            })
        })
    
        describe('When the click count reaches 100, the Companion count should increase by 1', () => {
            it('Companion should be purchasable at 100 clicks', () => {
                sut.clickCount = 100
                sut.companionAdd()
                expect(sut.companionCount).toBe(1)
            })
        })
    
        describe('When the click count is below 100, the Companion count should not be able to increase', () => {
            it('Companion should not be purchasable below 100 clicks', () => {
                sut.clickCount = 0
                sut.companionBuy()
                expect(sut.companionCount).toBe(0)
            })
        })
    
        describe('When a Companion is added, its purchase cost should increase by 10%', () => {
            it('Companion count cost should increase by 10% upon purchase', () => {
                sut.clickCount = 100
                sut.companionBuy()
                expect(sut.companionCost).toBe(110)
            })
        })

        // describe('When a Companion is present, the click count should increase every second', () => {
        //     it('Click count should increment by companion count value every second', () => {
        //         expect(clickCount(0)).toBe('0')
        //     })
        // })
    })

    // Iteration #2 Tests
    describe('Compounder Tests', () => {
        describe('Upon initializing the game, the compounder count should be set to 0', () => {
            it('Initial compounderCount should be 0', () => {
                expect(sut.compounderCount).toBe(0)
            })
        })

        describe('When a Compounder add action is carried out, the Compounder count should increase by 1', () => {
            it('compounderCount should increment by 1 from 0', () => {
                sut.compounderAdd()
                expect(sut.compounderCount).toBe(1)
            })
        })

        describe('When the click count reaches 10, the Compounder count should increase by 1', () => {
            it('Compounder should be purchasable at 10 clicks', () => {
                sut.clickCount = 10
                sut.compounderAdd()
                expect(sut.compounderCount).toBe(1)
            })
        })
    
        describe('When the click count is below 10, the Compounder count should not be able to increase', () => {
            it('Compounder should not be purchasable below 10 clicks', () => {
                sut.clickCount = 0
                sut.compounderBuy()
                expect(sut.compounderCount).toBe(0)
            })
        })
    
        describe('When a Compounder is added, its purchase cost should increase by 10%', () => {
            it('Compounder count cost should increase by 10% upon purchase', () => {
                sut.clickCount = 10
                sut.compounderBuy()
                expect(sut.compounderCost).toBe(11)
            })
        })

        describe('When a Compounder is added, the value of a click should increase by 1.2x', () => {
            it('With 1 Compounder present, the value of a click should increase by 1.2x', () => {
                sut.clickValue = 1
                sut.clickCount = 10
                sut.compounderCount = 0
                sut.compounderBuy()
                expect(sut.clickValue).toBe(1.2)
            })
        })

        describe('When more Compounders are added, the value of a click should increase by 1.2x to the xth power', () => {
            it('With x Compounders, the value of a click should increase by 1.2x to the xth power', () => {
                sut.clickValue = 1.2
                sut.clickCount = 11
                sut.compounderCount = 1
                sut.compounderBuy()
                expect(sut.clickValue).toBe(1.44)
            })
        })
    })
})

// Iteration #4 Tests
describe("Cookie Clicker DOM Manipulation Tests", () => {
    let testClicker
    let testCookieButton
    let testCookieCount
    let testCompanionButton
    let testCompanionCount
    let testCompanionCost
    let testCompounderButton
    let testCompounderCount
    let testCompounderCost
    
    beforeEach(() => {
        testClicker = new CookieClicker
        testCookieButton = document.createElement('button')
        testCookieCount = document.createElement('div')
        testCompanionButton = document.createElement('button')
        testCompanionCount = document.createElement('div')
        testCompanionCost = document.createElement('div')
        testCompounderButton = document.createElement('button')
        testCompounderCount = document.createElement('div')
        testCompounderCost = document.createElement('div')
        testClickValue = document.createElement('div')
        createCookieButton(testCookieButton, testCookieCount, testClicker)
        createCookieButton(testCompanionButton, testCompanionCount, testCompanionCost, testCookieCount, testClicker)
        createCookieButton(testCompounderButton, testCompounderCount, testCompounderCost, testClickValue, testCookieCount, testClicker)
    })

    describe("Cookie Counter Tests", () => {
        describe("Cookie Counter Update Test - Initialization", () => {
            it("Cookie button test count should be initialized with a value of 0 (no clicks)", () => {
                updateCookieCounter(testCookieCount, testClicker)
                expect(testCookieCount.innerText).toBe('0')
            })
        })
    
        describe("Cookie Counter Update Test - Value Update Upon Click", () => {
            it("Cookie button test count should read 1 after user's first button click", () => {
                testClicker.clickButton()
                updateCookieCounter(testCookieCount, testClicker)
                expect(testCookieCount.innerText).toBe('1')
            })
        })
    })
    
    describe("Companion Counter Tests", () => {
        describe("Companion Counter Update Test - Initialization", () => {
            it("Companion button test count should be initialized with a value of 0 (no clicks)", () => {
                updateCompanionCounter(testCompanionCount, testClicker)
                expect(testCompanionCount.innerText).toBe('0')
            })
        })
    
        describe("Companion Counter Update Test - Value Update Upon Click", () => {
            it("Companion button test count should read 1 after user's first button click", () => {
                testClicker.clickCount = 100
                testClicker.companionAdd()
                updateCompanionCounter(testCompanionCount, testClicker)
                expect(testCompanionCount.innerText).toBe('1')
            })
        })
    })

    describe("Compounder Counter Tests", () => {
        describe("Compounder Counter Update Test - Initialization", () => {
            it("Compounder button test count should be initialized with a value of 0 (no clicks)", () => {
                updateCompounderCounter(testCompounderCount, testClicker)
                expect(testCompounderCount.innerText).toBe('0')
            })
        })
    
        describe("Compounder Counter Update Test - Value Update Upon Click", () => {
            it("Compounder test count should read 1 after user's first button click", () => {
                testClicker.clickCount = 10
                testClicker.compounderAdd()
                updateCompounderCounter(testCompounderCount, testClicker)
                expect(testCompounderCount.innerText).toBe('1')
            })
        })
    })
})