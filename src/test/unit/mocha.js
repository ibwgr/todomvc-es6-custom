import assert from 'assert'

describe('Array', function() {
  describe('#indexOf()', function() {

    describe('the value is not present', function () {
      it('should return -1', function() {
        assert.equal([1,2,3].indexOf(-1), -1);
      });
    })

    describe('the value is first element', function () {
      it('should return 0', function () {
        assert.equal([1, 2, 3].indexOf(1), 0)
      })
    })

    describe('the value is last element', function () {
      it('should return length-1', function () {
        assert.equal([2, 3, 1].indexOf(1), 2)
      })
    })
  });
});
