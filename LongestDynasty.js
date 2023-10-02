const dynastyReign = [
    {"San Dynasty": "MXLI"},
    {"Vilorioa Dynasty": "MCCCIIII"},
    {"Tan Dynasty" : "MCCCXCVIII"},
    {"Bon Dynasty": "MCDXLV"},
    {"Maiko Dynasty": "MDCLXIV"},
    {"Paul Dynasty": "MCMXLIZ"},
    {"Andre Dynasty": "MMMXICM"}
  ];



function longestDynasty(dynastyReign) {
    if (dynastyReign.length === 0) {
      return "No Data";
    }
  
    let longestReign = 0;
    let longestDynastyName = "";
  
    for (const dynasty of dynastyReign) {
      const dynastyName = Object.keys(dynasty)[0];
      const endOfYear = convertYear(dynasty[dynastyName]);
  
      if (endOfYear !== "Invalid") {
        const reignDuration = endOfYear - 1000 + 1; 
        if (reignDuration > longestReign) {
          longestReign = reignDuration;
          longestDynastyName = dynastyName;
        }
      }
    }
  
    return longestDynastyName;
  }
  
  function convertYear(year) {
    
    if (!isValidRomanNumeral(year)) {
      return "Invalid";
    }
  
    
    return customRomanToIntegerConversion(year);
  }
  
  function customRomanToIntegerConversion(romanNumeral) {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
    let result = 0;
    let prevValue = 0;
  
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
      const currentChar = romanNumeral[i];
      const currentValue = romanNumerals[currentChar];
  
      if (currentValue >= prevValue) {
        result += currentValue;
      } else {
        result -= currentValue;
      }
  
      prevValue = currentValue;
    }
  
    return result;
  }
  
  function isValidRomanNumeral(romanNumeral) {
    const validRomanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  
    
    const pattern = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  
    if (!pattern.test(romanNumeral)) {
      return false;
    }
  
    for (const char of romanNumeral) {
      if (!validRomanNumerals.includes(char)) {
        return false;
      }
    }
  
    return true;
  }
  
  
 
  
  const longestDynastyName = longestDynasty(dynastyReign);
  console.log("Longest Reigning Dynasty:", longestDynastyName);
  