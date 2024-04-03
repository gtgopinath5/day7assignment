const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
  let res = JSON.parse(request.response);

  // a. Get all the countries from Asia continent /region using Filter function
  let asiaCountries = res.filter((country) => country.region === "Asia");
  console.log("Countries from Asia:", asiaCountries);
  console.log("--------------------------------------------------------------------")

  // b. Get all the countries with a population of less than 2 lakhs using Filter function
  let lowPopulationCountries = res.filter((country) => country.population && country.population < 200000);
  console.log("Countries with population less than 2 lakhs:", lowPopulationCountries);
  console.log("--------------------------------------------------------------------")

  // c. Print the following details name, capital, flag, using forEach function
  console.log("Details of countries using forEach:");
  res.forEach((country) => {
    if (country.name && country.capital && country.flags) {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital[0]);
      console.log("Flag:", country.flags.svg);
    }
  });
  console.log("-----------------------------------------------------------------------")

  // d. Print the total population of countries using reduce function
  let totalPopulation = res.reduce((acc, country) => acc + (country.population || 0), 0);
  console.log("Total population of countries:", totalPopulation);
  console.log("-------------------------------------------------------------------------")

  // e. Print the country that uses US dollars as currency
  let usDollarCountries = res.filter((country) => country.currencies && country.currencies.USD);
  console.log("Countries using US dollars as currency:", usDollarCountries);
  console.log("--------------------------------------------------------------------------")
};
