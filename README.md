Simulating fetching data from an Api response

a function fetchAndATranformProducts() its taking an api data that is then used to transform the data into the required format

i.e

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

is supposed to be in format

[
{
id: "123",
product_name: "Laptop",
price_usd: "999.99",
categories: [ "electronics" ]
},
{
id: "124",
product_name: "Smartphone",
price_usd: "799.99",
categories: [ "electronics" ]
}
]

To execute the file. node or deno can be used e.g deno index.ts
