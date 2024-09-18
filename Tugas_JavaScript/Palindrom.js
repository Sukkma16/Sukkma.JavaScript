function isPalindrome(str) 
{
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

function checkPalindrome() {
    const textInput = document.getElementById("textInput").value;
    const result = isPalindrome(textInput);

    if (result) {
        document.getElementById("result").innerText = `"${textInput}" adalah palindrom!`;
    } else {
        document.getElementById("result").innerText = `"${textInput}" bukan palindrom.`;
    }
}
