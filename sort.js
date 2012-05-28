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

  return arr;
};

Sort.Shell = function (arr) {
  var n = arr.length;
  var h = 1;

  while (h < n / 3) {
    h = 3 * h + 1;
  }

  while (h >= 1) {
    for (var i = h; i < n; i++) {
      for (var j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
        this.exchange(arr, j, j - h);
      }
    }
    h /= 3;
  }

  return arr;
};

Sort.TopDownMerge = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid, arr.length);

  left = this.TopDownMerge(left);
  right = this.TopDownMerge(right);

  return this.merge(left, right);
};

Sort.merge = function (left, right) {
  var res = [];
  while (left.length > 0 || right.length > 0) {
    if (left.length > 0 && right.length > 0) {
      if (left[0] <= right[0]) {
        res.push(left.shift());
      } else {
        res.push(right.shift());
      }
    } else if (left.length > 0) {
      res.push(left.shift());
    } else if (right.length > 0) {
      res.push(right.shift());
    }
  }
  return res;
};
