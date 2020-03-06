describe('Cookie Clicker Game', function(){

    let sut;

    beforeEach(function(){
        sut = new CookieClicker();
        sut.clickCount = 0;
        sut.companionCount = 0;
        sut.companionCost = 100;
    })

    describe('Click count', function(){
        describe('Upon initializing the game, the click count should be set to 0', function(){
            it('Initial clickCount should be 0', function(){
                expect(sut.clickCount).toBe(0);
            });
        })
    
        describe('When a click action is carried out, the click count should increase by 1', function(){
            it('clickCount should increment by 1 from 0', function(){
                sut.clickAction();
                expect(sut.clickCount).toBe(1);
            });
        })

        describe('When a Companion is purchased, the click count should decrease by its cost value', function(){
            it('Click count cost should decrease by 100 upon Companion purchase', function(){
                sut.clickCount = 100;
                sut.companionBuy();
                expect(sut.clickCount).toBe(0);
            });
        })
    })
    

    describe('Companion count', function(){
        describe('Upon initializing the game, the Companion count should be set to 0', function(){
            it('Initial companionCount should be 0', function(){
                expect(sut.companionCount).toBe(0);
            });
        })
    
        describe('When a Companion add action is carried out, the Companion count should increase by 1', function(){
            it('companionCount should increment by 1 from 0', function(){
                sut.companionAdd();
                expect(sut.companionCount).toBe(1);
            });
        })
    
        describe('When the click count reaches 100, the Companion count should increase by 1', function(){
            it('Companion should be purchasable at 100 clicks', function(){
                sut.clickCount = 100;
                sut.companionAdd();
                expect(sut.companionCount).toBe(1);
            });
        })
    
        describe('When the click count is below 100, the Companion count should not be able to increase', function(){
            it('Companion should not be purchasable below 100 clicks', function(){
                sut.clickCount = 0;
                sut.companionBuy();
                expect(sut.companionCount).toBe(0);
            });
        })
    
        describe('When a Companion is added, its purchase cost should increase by 10%', function(){
            it('Companion count cost should increase by 10% upon purchase', function(){
                sut.clickCount = 100;
                sut.companionBuy();
                expect(sut.companionCost).toBe(110);
            });
        })
    })

    // describe('When a Companion is present, the click count should increase every second', function(){
    //     it('Click count should increment by companion count value every second', function(){
    //         expect(clickCount(0)).toBe('0');
    //     });
    // })
})