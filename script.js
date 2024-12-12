console.log("Hello!")

async function fetchData() {
      const response = await fetch('https://uselessfacts.jsph.pl//api/v2/facts/random?language=en', {
        headers: {
        Accept: "application/json",
        },
      });
      const dailyFact = await response.json();
      console.log(dailyFact);
      return dailyFact;
    }

