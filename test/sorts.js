var sort = require('../');

describe('Insertion Sort', function () {
  it('should sort the array correctly', function () {
    var original = [3, 2, 1];
    var expected = [1, 2, 3];
    var sorted = sort.Insertion(original);
    sorted.should.eql(expected);
  });
});

describe('Selection Sort', function () {
  it('should sort the array correctly', function () {
    var original = [3, 2, 1];
    var expected = [1, 2, 3];
    var sorted = sort.Selection(original);
    sorted.should.eql(expected);
  });
});

describe('Shell Sort', function () {
  it('should sort the array correctly', function () {
    var original = [3, 2, 1];
    var expected = [1, 2, 3];
    var sorted = sort.Shell(original);
    sorted.should.eql(expected);
  });
});

describe('TopDownMerge Sort', function () {
  it('should sort the array correctly', function () {
    var original = [3, 2, 1];
    var expected = [1, 2, 3];
    var sorted = sort.TopDownMerge(original);
    sorted.should.eql(expected);
  });
});
