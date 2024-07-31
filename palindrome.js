// get html elements
const checkButton = document.querySelector("#check-btn");
const inputIn = document.querySelector("#text-input");
const result = document.querySelector("#result");
const form = document.querySelector("#form")

// declare global variables
let isPalindrome = false;
let firstArray= [];
let secondArray=[];
let resultHTML = ``;


//prevent form from submitting
form.addEventListener("submit", (e)=>{
  e.preventDefault()
  showResult();
});


//function to remove space and return string array
const replaceArray = (string) =>{

  const regex = /[^.,\s_)(-\/\\]/gi;
  const formedArray = string.match(regex);
  return formedArray;
}



// function to divide the array into two equals
const separateArray = (array) =>{
  if (array.length>1)
  {
    if(array.length % 2 === 0){
      const firstHalf = array.slice(0, Math.floor(array.length/2));
      const secondHalf = array.slice(array.length/2, array.length);
      firstArray = firstHalf;
      secondArray = secondHalf;
      return [...firstHalf, "+" ,...secondHalf];
    }
    else{
      const firstHalf = array.slice(0, Math.floor(array.length/2));
      const secondHalf = array.slice(array.length/2 + 1, array.length);
      firstArray = firstHalf;
      secondArray = secondHalf;
      return[... firstHalf, "+", ...secondHalf];
    }
  }
  
  else{
    
    return array;
  }
  
}

//function to reverse secondArray
const reverseSecondArray = () =>{
  const sorted = secondArray.reverse();
  return sorted;
}


// function to check if palindrome
const palindromeCheck = (array1, array2) =>{

  for (let i=0; i<array1.length; i++){
    if (array1[i].toLowerCase() !== array2[i].toLowerCase())
    {
      return false;
    }
  }
return true;
  
}

//function to editHTML
const editHTML = (value) =>{
  
  if(isPalindrome){
    resultHTML = `<span id="word"> ${value} </span> is a palindrome.`
  }
  else{
  resultHTML = `<span id="word">${value}</span> is not a palindrome.`
  }
}

//function to showresults
const showResult = () =>{
  const inputValue = inputIn.value;

  if (inputValue === ""){
   isPalindrome = true;
    alert("Please input a value");
  }

  else{
  
    const stringReplaced = replaceArray(inputValue);
    
    separateArray(stringReplaced);
    console.log(firstArray);

    reverseSecondArray();
    console.log(secondArray);

    isPalindrome = palindromeCheck(firstArray, secondArray);

    editHTML(inputValue);
    
    console.log(isPalindrome);
  
    result.innerHTML = resultHTML;}
}

//call showResult
checkButton.addEventListener("click", showResult);