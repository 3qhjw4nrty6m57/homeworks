function mySlice(arr, start = 0, end = arr.length) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(arr[i]);
    }
    return result;
  }
  
  function myIndexOf(arr, item, from = 0) {
    for (let i = from; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  }
  
  function myIncludes(arr, item, from = 0) {
    for (let i = from; i < arr.length; i++) {
      if (arr[i] === item) {
        return true;
      }
    }
    return false;
  }