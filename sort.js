var Sort = module.exports = {};

Sort.exchange = function (arr, i, j) {
  var x = arr[i];
  arr[i] = arr[j];
  arr[j] = x;
};

Sort.Selection = function (arr) {
  var n = arr.length;
  for (var i = 0; i < n; i++) {
    var min = i;
    for (var j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
      this.exchange(arr, i, j);
    }
  }
  return arr;
};

Sort.Insertion = function (arr) {
  var n = arr.length;
  for (var i = 0; i < n; i++) {
    for (var j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      this.exchange(arr, j, j - 1);
    }
  }
};
