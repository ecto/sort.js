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

Sort.merge = function (arr, low, mid, high) {
  low = low || 0;
  high = high || arr.length - 1;
  mid = mid || Math.floor(high / 2);

  var aux = [];
  var i = low;
  var j = mid + 1;
  var k;

  for (k = low; k <= high; k++) {
    aux[k] = arr[k];
  }

  for (k = low; k <= high; k++) {
    if (i > mid) {
      arr[k] = aux[j++];
    } else if (j > high) {
      arr[k] = aux[i++];
    } else if (aux[j] < aux[i]) {
      arr[k] = aux[j++];
    } else {
      arr[k] = aux[i++];
    }
  }

  return arr;
};

Sort.TopDownMerge = function (arr) {
  function sort (arr, low, high) {
    if (high <= low) {
      return;
    }
    var mid = low + (high - low) / 2;
    sort(arr, low, mid);
    sort(arr, mid + 1, high);
    return this.merge(arr, low, high, mid);
  }

  return sort(arr, 0, arr.length - 1);
};
