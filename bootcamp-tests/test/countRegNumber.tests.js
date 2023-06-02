describe ("testing isFromGauteng function", function(){
    it("it should return true if the registration number ends with GP is from Gauteng", function(){
        
        assert.equal(isFromGauteng('DR 45 LR GP'), true); 

    });
    it("it should return false if the registration number CJ 123 908 is for Gauteng", function(){
        
        assert.equal(isFromGauteng('CJ 123 908'), false);
    });

});

 