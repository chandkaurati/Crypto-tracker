import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart',
  params : {
    vs_currency : "usd",
    days : "7",
  },
  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-GoihbSiGKyma1fZv8hxeeDeE'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });


  // const date = new Date(1715778272585)

  // console.log(date)