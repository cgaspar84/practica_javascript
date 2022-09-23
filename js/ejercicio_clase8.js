// Define answers structure
// Answer : Name, Picture
const answerDB = [
    {
      name: "EEVEE",
      picture:
        "https://img.joomcdn.net/8590411182fe5bcc79266806c7de73e706dbaba9_original.jpeg",
      pokedex: ""
    },
    {
      name: "BULBASAUR",
      picture:
        "https://png.pngitem.com/pimgs/s/197-1973326_pokemon-silhouette-gen-1-hd-png-download.png",
      pokedex: ""
    },
    {
      name: "CHARMANDER",
      picture:
        "https://png.pngitem.com/pimgs/s/748-7485594_charizard-pokemon-charmander-charmeleon-hd-png-download.png",
      pokedex:
        "https://png.pngitem.com/pimgs/s/748-7485594_charizard-pokemon-charmander-charmeleon-hd-png-download.png"
    },
    {
      name: "SQUIRTLE",
      picture:
        "https://png.pngitem.com/pimgs/s/136-1360310_squirtle-whos-that-pokemon-clipart-png-download-whos.png",
      pokedex:
        "https://png.pngitem.com/pimgs/s/136-1360310_squirtle-whos-that-pokemon-clipart-png-download-whos.png"
    },
    {
      name: "PIKACHU",
      picture:
        "https://png.pngitem.com/pimgs/s/95-958057_whos-that-pokemon-hd-png-download.png",
      pokedex:
        "https://png.pngitem.com/pimgs/s/95-958057_whos-that-pokemon-hd-png-download.png"
    }
  ];
  const MAX_RETRIES_GAME = 6;
  
  // Game global vars
  let _gameRetries = MAX_RETRIES_GAME;
  let _gameAnswer = "";
  let _gamePlayerBoard = []; // Array with player guesses
  let _gameMaskReplaces = 0;
  
  function hangmanGame() {
    if (_gameRetries > 0) {
      // Get current guess
      let guessChar = document.getElementById("guessChar").value;
      guessChar = guessChar.toUpperCase();
  
      console.log("guess:" + guessChar);
  
      let splitAnswer = _gameAnswer.name.split("");
      let index = splitAnswer.indexOf(guessChar);
      if (index < 0) {
        _gameRetries--;
        window.alert("Fallo. Letra incorrecta!!");
        if (_gameRetries === 0) {
          //Game over
          window.alert("Game Over!! Segui participando");
          document.getElementById("guessChar").value = "";
          resetGame();
        }
      }
      _gamePlayerBoard.push(guessChar);
  
      // Fill retries indicator
      document.getElementById("retriesLeft").innerHTML = _gameRetries;
  
      document.getElementById("guessChar").value = "";
  
      document.getElementById("gameAnswer").innerHTML = showMaskedAnswer();
  
      // Fill player board
      let guessBoard = "<ul class='gameCurrentTries'>";
      for (let j = 0; j < _gamePlayerBoard.length; j++) {
        guessBoard += "<li>" + _gamePlayerBoard[j] + "</li>";
      }
      guessBoard += "</ul>";
      document.getElementById("playerCurrentTries").innerHTML = guessBoard;
      console.log("maskAmount:" + _gameMaskReplaces);
      if (_gameMaskReplaces === 0) {
        // No masked replaces done -> Show success !!
        window.alert("Felicitaciones!! Has ganado!!");
      }
    } else {
      //Game over
      window.alert("Game Over!! Segui participando");
      resetGame();
    }
  }
  
  function showMaskedAnswer() {
    let splitAnswer = _gameAnswer.name.split("");
    _gameMaskReplaces = 0;
    console.log("Split answer: " + splitAnswer);
  
    for (let i = 0; i < splitAnswer.length; i++) {
      let index = _gamePlayerBoard.indexOf(splitAnswer[i]);
  
      if (index < 0) {
        // Char not found in player board -> Mask in answer
        splitAnswer.splice(i, 1, "-");
        _gameMaskReplaces++;
      }
    }
  
    let answer = splitAnswer.join("");
    console.log("Masked word is " + answer);
    return answer;
  }
  
  function resetGame() {
    // Clears game board
    _gameRetries = MAX_RETRIES_GAME;
    _gamePlayerBoard = [];
    // Fill retries indicator
    document.getElementById("retriesLeft").innerHTML = _gameRetries;
  
    // Pick new random answer
    let answerRandom = parseInt(
      Math.random() * (answerDB.length - 1 - 0) + 0,
      10
    );
  
    _gameAnswer = answerDB[answerRandom];
    console.log("Random:" + answerRandom);
    console.log("Picked PKM : " + JSON.stringify(answerDB[answerRandom]));
  
    // Show masked answer
    document.getElementById("gameAnswer").innerHTML = showMaskedAnswer();
    // Show hint pic
    document.getElementById("gameHint").src = _gameAnswer.picture;
  }
  