describe ('it should test if isFromBellville function', function(){

 it('it should return true if the registration number start with CY' , function(){
    assert.equal(isFromBellville('CY 123'), true);

});

it('it should return false if the registration number does not start with CJ' , function(){

    assert.equal(isFromBellville('CJ 123'), false);
});

});