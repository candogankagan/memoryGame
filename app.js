document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "icecream",
      img: "images/ice-cream.png",
    },
    {
      name: "icecream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];

  const grid = document.querySelector(".grid");

  function shuffleArray(cardArray) {
    for (let i = cardArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
    }
  }

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      grid.appendChild(card);
      card.addEventListener("click", flipCard);
    }
  }

  cardChosen = [];
  cardChosenId = [];
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    this.setAttribute("src", cardArray[cardId].img);
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    if (cardChosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }

  cardWon = [];
  function checkMatch() {
    const cards = document.querySelectorAll("img");
    if (cardChosen[0] === cardChosen[1]) {
      // alert("Well done smart boy, You found a MATCH!!");
      cards[cardChosenId[0]].setAttribute("src", "images/white.png");
      cards[cardChosenId[1]].setAttribute("src", "images/white.png");
      cardWon.push(cardChosen);
    } else {
      // alert("You Failed, Try Again");
      cards[cardChosenId[0]].setAttribute("src", "images/blank.png");
      cards[cardChosenId[1]].setAttribute("src", "images/blank.png");
    }

    cardChosen = [];
    cardChosenId = [];
    document.querySelector("#result").textContent = cardWon.length;
    if (cardWon.length === cardArray.length / 2) {
      document.querySelector("#result").textContent =
        "Congratulations! You found them all!";
    }
  }

  shuffleArray(cardArray);
  createBoard();
});
