function check(){
    // const resultInput = document.getElementById("textInput").value.toLowerCase();
    const resultInput = textInput.value; 
    const reversed = textInput.value.split('').reverse().join('').toLowerCase("");
    if (resultInput == ""){
        resultShow.innerHTML = "Enter the word you wish to check!!!!"
    } else{
        if (resultInput === reversed){
            resultShow.innerHTML = resultInput + " is a palindrome Word"
        } else {
            resultShow.innerHTML = resultInput  + " is not a palindrome Word"
        }
    }
}