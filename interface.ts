// //mock fuction to simulate an API call

// interface Product {
//   id: string;
//   product_name: string;
//   price_usd: string;
//   categories: string[];
// }

// interface apiReponse {
//   ok: boolean;
//   status: number;
//   json: () => Promise<{ data: Product[] }>; //json has access to pre-defined Products via : data: Product[]
// }

// function fakeApiCall(url: string, option = {}): Promise<apiReponse> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const mockResponseData = {
//         data: [
//           {
//             id: "123",
//             product_name: "Laptop",
//             price_usd: "999.99",
//             categories: ["electronics", "computers"],
//           },
//           {
//             id: "124",
//             product_name: "Smartphone",
//             price_usd: "799.99",
//             categories: ["electronics", "phones"],
//           },
//         ],
//       };

//       resolve({
//         ok: true,
//         status: 200,
//         json: () => Promise.resolve(mockResponseData),
//       });
//     }, 1000);
//   });
// }

// async function fetchData() {
//   const url = "https//api.example.com/items"; // Mock URL

//   const response = await fakeApiCall(url);
//   if (response.ok) {
//     const responseData = await response.json();

//     return responseData.data;
//   }

//   throw new Error("Failed to fetch data");
// }

// fetchData().then((res) => {
//   const transformedData = res.map((products) => ({
//     ...products,
//     categories: products.categories[0] ? products.categories[0] : [],
//   }));

//   console.log(transformedData);
// });
