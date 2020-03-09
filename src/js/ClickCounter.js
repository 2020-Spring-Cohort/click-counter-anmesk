class CookieClicker {

    constructor() {
        this.clickCount = 0
        this.companionCount = 0
        this.companionCost = 100

        this.compounderCount = 0
        this.compounderCost = 10
        this.clickValue = 1
    }

    clickButton() {
        this.clickCount = this.clickCount + this.clickValue
    }

    clickAction() {
        this.clickCount++
    }

    companionAdd() {
        this.companionCount++
    }

    companionCostIncrease() {
        this.companionCost = this.companionCost + this.companionCost * .1
    }

    companionBuy() {
        if (this.clickCount >= this.companionCost) {
            this.clickCount = this.clickCount - this.companionCost
            this.companionAdd()
            this.companionCostIncrease()
        }
    }

    addCompanionCountToClickCount() {
        this.clickCount = this.clickCount + (this.companionCount * this.clickValue)
    }


    compounderAdd() {
        this.compounderCount++
    }

    compounderCostIncrease() {
        this.compounderCost = this.compounderCost + this.compounderCost * .1
    }

    compounderBuy() {
        if (this.clickCount >= this.compounderCost) {
            this.clickCount = this.clickCount - this.compounderCost
            this.compounderAdd()
            this.compounderCostIncrease()
        }
    }

    clickValueIncrease() {
        this.clickValue = this.clickValue + (this.clickValue * .2)
    }

    compounderBuy() {
        if (this.clickCount >= this.compounderCost) {
            this.clickCount = this.clickCount - this.compounderCost
            this.compounderAdd()
            this.compounderCostIncrease()
            this.clickValueIncrease()
        }
    }


    showClickCount() {
        this.fixClickCount = this.clickCount.toFixed(2)
        if (this.clickCount.toString().length > 3) {
            return this.fixClickCount
        }
        else {
            return this.clickCount
        }
    }

    showClickValue() {
        this.fixClickValue = this.clickCount.toFixed(4)
        if (this.clickValue.toString().length > 5) {
            return this.fixClickValue
        }
        else {
            return this.clickValue
        }
    }

    showCompanionCount() {
        return this.companionCount
    }
    
    showCompounderCount() {
        return this.compounderCount
    }

    showCompanionCost() {
        this.fixCompanionCost = this.companionCost.toFixed(4)
        if (this.companionCost.toString().length > 5) {
            return this.fixCompanionCost
        }
        else {
            return this.companionCost
        }
    }
    
    showCompounderCost() {
        this.fixCompounderCost = this.compounderCost.toFixed(4)
        if (this.compounderCost.toString().length > 5) {
            return this.fixCompounderCost
        }
        else {
            return this.compounderCost
        }
    }
}

const updateCookieCounter = (cookieCountElement, cookieClicker) => {
    cookieCountElement.innerText = cookieClicker.showClickCount()
}

const createCookieButton = (cookieButtonElement, cookieCountElement, cookieClicker) => {
    cookieButtonElement.addEventListener('click', () => {
        cookieClicker.clickButton()
        updateCookieCounter(cookieCountElement, cookieClicker)
        enableCompanionButton()
        enableCompounderButton()
    })
}

const updateCompanionCounter = (companionCountElement, cookieClicker) => {
    companionCountElement.innerText = cookieClicker.showCompanionCount()
}

const createCompanionButton = (companionButtonElement, companionCountElement, companionCostElement, cookieCountElement, cookieClicker) => {
    companionButtonElement.addEventListener('click', () => {
        cookieClicker.companionBuy()
        updateCompanionCounter(companionCountElement, cookieClicker)
        updateCompanionCost(companionCostElement, cookieClicker)
        updateCookieCounter(cookieCountElement, cookieClicker)
        enableCompanionButton()
        enableCompounderButton()
    })
}

const updateCompounderCounter = (compounderCountElement, cookieClicker) => {
    compounderCountElement.innerText = cookieClicker.showCompounderCount()
}

const createCompounderButton = (compounderButtonElement, compounderCountElement, clickValueElement, compounderCostElement, cookieCountElement, cookieClicker) => {
    compounderButtonElement.addEventListener('click', () => {
        cookieClicker.compounderBuy()
        updateCompounderCounter(compounderCountElement, cookieClicker)
        updateClickValue(clickValueElement, cookieClicker)
        updateCompounderCost(compounderCostElement, cookieClicker)
        updateCookieCounter(cookieCountElement, cookieClicker)
        enableCompanionButton()
        enableCompounderButton()
    })
}

const updateClickValue = (clickValueElement, cookieClicker) => {
    clickValueElement.innerText = cookieClicker.showClickValue()
}

const updateCompanionCost = (companionCostElement, cookieClicker) => {
    companionCostElement.innerText = cookieClicker.showCompanionCost()
}

const updateCompounderCost = (compounderCostElement, cookieClicker) => {
    compounderCostElement.innerText = cookieClicker.showCompounderCost()
}

const createResetButton = (resetButtonElement) => {
    resetButtonElement.addEventListener('click', () => {
        location.reload()
    })
}


function showAboutCompany() {
    if (showAboutCompany.style.display === "block") {
        aboutCompany.style.display = "none"
    }
    else {
        aboutCompany.style.display = "block"
    }
}

function showAboutMe() {
    if (showAboutMe.style.display === "block") {
        aboutMe.style.display = "none"
    }
    else {
        aboutMe.style.display = "block"
    }
}


function enableCompanionButton() {
    if (cookieClicker.clickCount >= cookieClicker.companionCost) {
        companionButtonElement.removeAttribute('disabled')
    }
    else {
        companionButtonElement.disabled = true
    }
}

function enableCompounderButton() {
    if (cookieClicker.clickCount >= cookieClicker.compounderCost) {
        compounderButtonElement.removeAttribute('disabled')
    }
    else {
        compounderButtonElement.disabled = true
    }
}


const autoClickElement = setInterval(autoClick, 1000)

function autoClick() {
    cookieClicker.addCompanionCountToClickCount()
    updateCookieCounter(cookieCountElement, cookieClicker)
    enableCompanionButton()
    enableCompounderButton()
}

const cookieClicker = new CookieClicker()
const aboutCompany = document.getElementById("aboutCompany")
const aboutMe = document.getElementById("aboutMe")
const cookieButtonElement = document.querySelector('#cookieButton')
const cookieCountElement = document.querySelector('#cookieCount')
const clickValueElement = document.querySelector('#clickValue')
const companionButtonElement = document.querySelector('#companionButton')
const companionCountElement = document.querySelector('#companionCount')
const companionCostElement = document.querySelector('#companionCost')
const compounderButtonElement = document.querySelector('#compounderButton')
const compounderCountElement = document.querySelector('#compounderCount')
const compounderCostElement = document.querySelector('#compounderCost')
const resetButton = document.querySelector('#resetButton')

createCookieButton(cookieButtonElement, cookieCountElement, cookieClicker)
updateCookieCounter(cookieCountElement, cookieClicker)
createCompanionButton(companionButtonElement, companionCountElement, companionCostElement, cookieCountElement, cookieClicker)
updateCompanionCounter(companionCountElement, cookieClicker)
createCompounderButton(compounderButtonElement, compounderCountElement, clickValueElement, compounderCostElement, cookieCountElement, cookieClicker)
updateCompounderCounter(compounderCountElement, cookieClicker)
updateClickValue(clickValueElement, cookieClicker)
createResetButton(resetButton, cookieClicker)