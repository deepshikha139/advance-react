// How do you reverse a string
// How do you determine if a string is a palindrome?


export const reverseString = (inputString) => {
    // const inputArray = inputString.split("");
    // return inputArray.reverse().join("");

    //hello
    let newString = "";
    for(let i = inputString.length -1; i >= 0; i--) {
        newString += inputString[i]
    }
    return newString;
}

export const isStringPalindrome = (inputString) => {
    const getReverseString = reverseString(inputString);
    return getReverseString === inputString;
}