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
    }

    fetchData()

function addJoke() {
  const jokeText = document.querySelector(".daily")
  
}