describe("testing my regCheck function", function(){
    it("it should return true if the registration number start with CA 123 908 is from Cape Town", function(){
        assert.equal(isFromCapeTown('CA 123 908'), true);

    });
    
    it("it should return false if the registration number start with CJ 123 908 is not from Cape Town", function(){
        assert.equal(isFromCapeTown('CJ 123 908'), false);
    });

});