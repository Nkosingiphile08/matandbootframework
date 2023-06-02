describe("testing my function called is yearsAgo", function(){
  it("it should return how many years ago the year is from the current year", function(){
    assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
  });
  
  it("it should use the current year and date to get the full year", function(){
    assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));

  });
  
});