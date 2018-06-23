let expect = require('chai').expect;

function sum(arra){
    let sum = 0;
    for(let item of array)
    {
        sum +=item;
    }
};
describe("sum(arr)", function(){
    it("should return 3 for [1,2]", function(){
        expect(sum([1,2])).to.be.equal(3);
    });
});