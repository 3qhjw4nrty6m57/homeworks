function sumOfNumericFields(obj) {
    let sum = 0;
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        sum += obj[key];
      }
    }
    return sum;
  }
  
function getSortedFields(obj) {
   let numericFields = [];
  
   for (let key in obj) {
     if (typeof obj[key] === 'number') {
       numericFields.push(key);
    }
   }
  
  numericFields.sort(function(a, b) {
    return obj[b] - obj[a];
  });
  
   return numericFields;
}
  
 const exampleObj = {
  name: 'Vasya',
   friends: 5,
   likes: 19,
   projects: 7,
 };
  
  console.log(sumOfNumericFields(exampleObj));
  console.log(getSortedFields(exampleObj).join(', '));
  