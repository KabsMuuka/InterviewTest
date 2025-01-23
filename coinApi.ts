interface Currency {
  code: string;
  symbol: string;
  rate: string;
  description: string; // Fixed spelling
  rate_float: number; // Fixed the type to match the API data
}

interface Bpi {
  [currencyCode: string]: Currency; // Each key maps to a single Currency object
}

interface ApiRes {
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  disclaimer: string;
  chartName: string;
  bpi: Bpi;
}

(async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error fetching API data:", error);
    });

  if (!res) return;

  const response: ApiRes = res;

  // Access and log the data
  console.log("Chart Name:", response.chartName);
  console.log("Disclaimer:", response.disclaimer);

  Object.entries(response.bpi).forEach(([currencyCode, currency]) => {
    console.log(`${currencyCode}: ${currency.rate} (${currency.description})`);
  });
})();
