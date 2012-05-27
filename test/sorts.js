var sort = require('../');

describe('Insertion Sort', function () {
  it('should sort the array correctly', function () {
    var original = [3, 2, 1];
    var sorted = sort.Insertion(original);
    var expected = [1, 2, 3];
    sorted.should.eql(expected);
  });
});

describe('Selection Sort', function () {
  it('should sort the array correctly', function () {
    var original = [3, 2, 1];
    var sorted = sort.Selection(original);
    var expected = [1, 2, 3];
    sorted.should.eql(expected);
  });
});

describe('Shell Sort', function () {
  it('should sort the array correctly', function () {
    var original = [3, 2, 1];
    var sorted = sort.Shell(original);
    var expected = [1, 2, 3];
    sorted.should.eql(expected);
  });
});

describe('Merge Sort', function () {
  it('should sort the array correctly', function () {
    var original = [3, 2, 1];
    var sorted = sort.Merge(original);
    var expected = [1, 2, 3];
    sorted.should.eql(expected);
  });
});
