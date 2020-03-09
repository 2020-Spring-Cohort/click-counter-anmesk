class CookieClicker {

    constructor() {
        this.clickCount = 0
        this.companionCount = 0
        this.companionCost = 100

        this.compounderCount = 0
        this.compounderCost = 10
        this.clickValue = 1
    }

    // clickCount = 0
    // companionCount = 0
    // companionCost = 100

    // compounderCount = 0
    // compounderCost = 10
    // clickValue = 1


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
        this.fixClicks = this.clickCount.toFixed(2)
        if(this.ClickCount.toString().length > 3) {
            return this.fixClicks
        }
        else {
            return this.clickCount
        }
    }
}

const updateCookieCounter = (countElement, cookieClicker) => {
    countElement.innerText = cookieClicker.showCurrentClicks()
}

const createCookieButton = (buttonElement, countElement, cookieClicker) => {
    buttonElement.addEventListener('click', () => {
        cookieClicker.clickButton()
        updateCookieCounter(countElement, cookieClicker)
    })
}

// let cookieClicker = new CookieClicker()
// cookieClicker.clickAction()
// cookieClicker.companionAdd()
// cookieClicker.companionBuy()
// cookieClicker.companionCostIncrease()
const cookieClicker = new CookieClicker()
// setInterval(cookieClicker.companionAdd(), 1000)

const buttonElement = document.querySelector('#cookieButton')
const countElement = document.querySelector('#cookieCount')

createCookieButton(buttonElement, countElement, cookieClicker)
updateCookieCounter(countElement, cookieClicker)

// cookieClicker.setClickCountToZero();
// cookieClicker.setCompanionCountToZero();


// var clickCount = 0;

// var button = document.getElementById("cookieObject"),

// button.onclick = function() {
//     count += 1;
//     button.innerHTML = "Cookie Object: " + count;
// };
