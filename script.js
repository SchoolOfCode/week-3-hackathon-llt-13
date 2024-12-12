console.log("Hello!")

async function fetchData() {
      const response = await fetch('http://numbersapi.com/random/trivia', {
        headers: {
        "Accept": "application/json",
        },
      });
      const dailyFact = await response.text(); //bug1 - response wasn't json, so had to convert it from plaintext
      console.log(dailyFact);
      return dailyFact;
};

    fetchData()

async function addFact() {
  const factText = document.querySelector(".daily");
  factText.textContent = await fetchData();
};



// async function getAndDisplayNewFact() {
//   const joke = await retrieveJoke();
//   displayJoke(joke);
// }

// function displayJoke({ joke }) {
//   const jokeElement = document.getElementById("joke");
//   jokeElement.textContent = joke;
// }

const button = document.getElementById("factButton");
button.addEventListener("click", addFact);
