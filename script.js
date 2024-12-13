console.log("Hello!")

async function fetchData() {
  try {
    const response = await fetch('http://numbersapi.com/random/trivia', {
      headers: {
      "Accept": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const dailyFact = await response.text(); //issue #3 - response wasn't json, so had to convert it from plaintext
    return dailyFact;
  } catch (error) {
    console.error('Error fetching data:', error);
}};

fetchData()

async function addFact() {
  const factText = document.querySelector(".daily");
  factText.textContent = await fetchData();
};

const button = document.getElementById("factButton");
button.addEventListener("click", addFact);
button.addEventListener("keypress", ".keyboard-clickable", addFact);
