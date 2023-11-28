let { countAndSum } = require("./task2");
let assert = require("assert")
describe('task2 testing', () => {
    it('should return null, when input is null', () => {
        let result = countAndSum(null)
        assert.equal(result, null)
    });

    it('should return null, when empty array', () => {
        let result = countAndSum([])
        assert.equal(result, null)
    });

    it('should return [10,-65]', () => {
        let result = countAndSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
        assert.equal(result[0], 10)
        assert.equal(result[1], -65)
    });

});