describe('Cookie Clicker Game', function(){

    let sut;

    beforeEach(function(){
        sut = new CookieClicker();
        sut.clickCount = 0;
    })

    describe('clickCount', function(){
        it('initial click count should be 0', function(){
            expect(sut.clickCount).toBe(0);
        });
    })

    describe('clickCount', function(){
        it('click count should increment by 1 from 0', function(){
            sut.clickAction();
            expect(sut.clickCount).toBe(1);
        });
    })

    describe('companionCount', function(){
        it('initial companion count should be 0', function(){
            expect(sut.companionCount).toBe(0);
        });
    })

    describe('companionCount', function(){
        it('companion count should increment by 1 from 0', function(){
            sut.companionAdd();
            expect(sut.companionCount).toBe(1);
        });
    })

    describe('companionCount', function(){
        it('companion should be purchasable at 100 clicks', function(){
            if(clickCount >= 100){
                // on-click to be implemented...
                expect(companionCount(1)).toBe('1');
            }
            else expect(companionCount(0)).toBe('0');
        });
    })

    describe('companionCount', function(){
        it('companion should not be purchasable below 100 clicks', function(){
            if(clickCount <= 100){
                // on-click to be implemented...
                expect(companionCount(0)).toBe('0');
            }
            expect(clickCount(0)).toBe('0');
        });
    })

    describe('companionCount', function(){
        it('companion count cost should increase by 10% upon purchase', function(){
            expect(companionCount(0)).toBe('0');
        });
    })

    describe('companionCount', function(){
        it('click count should increment by companion count value every second', function(){
            expect(clickCount(0)).toBe('0');
        });
    })
})