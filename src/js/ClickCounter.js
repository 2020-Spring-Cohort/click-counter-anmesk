class CookieClicker {

    constructor() {
        this.clickCount = 0;
        this.companionCount = 0;
        this.companionCost = 100;
    }

    clickCount = 0;
    companionCount = 0;
    companionCost = 100;

    clickAction() {
        this.clickCount++;
    }

    companionAdd() {
        this.companionCount++;
    }

    companionCostIncrease() {
        this.companionCost = this.companionCost + this.companionCost * .1;
    }


    companionBuy() {
        if (this.clickCount >= this.companionCost) {
            this.clickCount = this.clickCount - this.companionCost;
            this.companionAdd();
            this.companionCostIncrease();
        }
    }
}

let cookieClicker = new CookieClicker();
cookieClicker.clickAction();
cookieClicker.companionAdd();
cookieClicker.companionBuy();
cookieClicker.companionCostIncrease();
// cookieClicker.setClickCountToZero();
// cookieClicker.setCompanionCountToZero();


// var clickCount = 0;

// var button = document.getElementById("cookieObject"),

// button.onclick = function() {
//     count += 1;
//     button.innerHTML = "Cookie Object: " + count;
// };
