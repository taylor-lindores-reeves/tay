require("babel-runtime/regenerator");
require("webpack-hot-middleware/client?reload=true");
require("./main.css");
require("./index.html");

const something = async args => {
  const { a, b } = args;
  await console.log("arguments" + a + " " + b);
  console.log("Done");
};

something({ a: "Hi", b: "there!" });
