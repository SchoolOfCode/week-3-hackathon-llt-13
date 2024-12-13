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


async function fetchMath() {
  try {
    const response = await fetch('http://numbersapi.com/random/math', {
      headers: {
      "Accept": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const dailyMath = await response.text();
    console.log(dailyMath)
    return dailyMath;
  } catch (error) {
    console.error('Error fetching data:', error);
}};

async function addFact() {
  const factText = document.querySelector("#fact");
  factText.textContent = await fetchData();
};

async function addMath() {
  const factText = document.querySelector("#mathFact");
  factText.textContent = await fetchMath();
};

const button = document.getElementById("factButton");
button.addEventListener("click", addFact);
button.addEventListener("keypress", addFact, ".keyboard-clickable");

const buttontwo = document.getElementById("mathButton");
buttontwo.addEventListener("click", addMath);
buttontwo.addEventListener("keypress", addMath, ".keyboard-clickable"); // issue #25 and #26