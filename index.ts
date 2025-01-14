interface Isproduct {
  id: string;
  product_name: string;
  price_usd: string;
  categories: string[];
}

interface electronicsData {
  apidata: Isproduct[];
}

//Fetches data from the external API.
//Transforms it into the required format.

function fetchAndATranformProducts(api: electronicsData): Isproduct[] {
  const transformedProducts = api.apidata.map((product) => ({
    ...product,
    //Get the first product if is true
    categories: product.categories[0] ? [product.categories[0]] : [],
  }));

  return transformedProducts;
}

const apiData: electronicsData = {
  apidata: [
    {
      id: "123",
      product_name: "Laptop",
      price_usd: "999.99",
      categories: ["electronics", "computers"],
    },
    {
      id: "124",
      product_name: "Smartphone",
      price_usd: "799.99",
      categories: ["electronics", "phones"],
    },
  ],
};

const transformedProducts = fetchAndATranformProducts(apiData);
console.log(transformedProducts);
