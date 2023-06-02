describe ("testing the greet function", function(){
it ("it should return hello,Bob when it called with Bob", function(){
  
  assert.equal(greet('Bob'), 'Hello, Bob'), 'this should return true'

});
   it ("it should return hello, Sam when it called with Sam", function(){
     assert.equal(greet('Sam'), 'Hello, Sam'); 'this should return true'

   });
  });