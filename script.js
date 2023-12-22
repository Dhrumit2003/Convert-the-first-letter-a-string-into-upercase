function convertFirstLetter() {
    let inputText = document.getElementById('inputText').value;
    
    if (inputText.length > 0) {
      let firstLetter = inputText.charAt(0).toUpperCase();
      let restOfText = inputText.slice(1);
      let convertedText = firstLetter + restOfText;
      document.getElementById('outputText').innerText = convertedText;
    } else {
      alert('Please enter a string.');
    }
  }
  