function check() {
    const input = textInput.value;
    const reversed = input.split('').reverse().join('');
    if (input === "") {
        resultShow.innerHTML = "Enter the word you wish to check!!!!";
    } else if (input.toLowerCase() === reversed.toLowerCase()) {
        resultShow.innerHTML = input + " is a palindrome word";
    } else {
        resultShow.innerHTML =  input + " is Not a palindrome word";
    }
}
