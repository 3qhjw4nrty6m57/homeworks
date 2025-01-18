function capitalizeFirstLetter(str) {
    if (!str) return str;
  
    str = str.charAt(0).toUpperCase() + str.slice(1);
  
    return str.replace(/([.?!]\s*)([a-zа-я])/g, (match, p1, p2) => p1 + p2.toUpperCase());
}
  
function cutLongString(str, maxLength) {
    const breakChars = [' ', ',', '.', '!', '?', ':', ';', ')'];
  
    if (str.length <= maxLength) return str;
  
    let lastValidIndex = maxLength;
    while (lastValidIndex > 0 && !breakChars.includes(str.charAt(lastValidIndex))) {
      lastValidIndex--;
    }
  
    if (lastValidIndex === 0) lastValidIndex = maxLength;
  
    return str.slice(0, lastValidIndex) + '...';
}
  
function isSubstringCheck(str1, str2) {
    return str1.includes(str2) || str2.includes(str1);
}
  
const stringsToCapitalize = [
    "слово", 
    "Another", 
    "", 
    "vashta nerada", 
    "ехал Грека через реку, видит Грека - в реке рак. сунул Грека руку в реку, рак за руку Греку цап"
];
const capitalizedStrings = stringsToCapitalize.map(str => capitalizeFirstLetter(str));
console.log("Capitalized Strings:", capitalizedStrings);
  
const stringsToCut = [
    "This is a long sentence that might need to be cut.",
    "Однажды весною, в час небывалого жаркого заката, в Москве, на Патриарших прудах, появились два гражданина. Первый из них, одетый в летнюю серенькую пару, был маленького роса, упитан, лыс, свою приличную шляпу пирожком нёс в руке, а на хорошо выбритом лице его помещались сверхъестественных размеров очки в серой роговой оправе.",
    "Short text",
];
const limit = 40;
const cutStrings = stringsToCut.map(str => cutLongString(str, limit));
console.log("Cut Strings:", cutStrings);
  
const testCases = [
    ["шиворот", "навыворот"],
    ["не вложенное", "вложенное"],
    ["интересно", "интерес"],
    ["Кукушка Кукушонку купила капюшон", "Капюшон"]
];
const results = testCases.map(([str1, str2]) => isSubstringCheck(str1, str2));
console.log("Substring Results:", results);