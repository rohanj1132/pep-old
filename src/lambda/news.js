// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
var fm = require('front-matter');

const allFiles = (ctx => {
  let keys = ctx.keys();
  let values = keys.map(ctx);
  return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
})(require.context('../pages/news/', false, /\.md$/));

const allFilesJson = Object.keys(allFiles).map(function(key) {
  var value = allFiles[key];
  return fm(value["default"]);
});

// To test - uncomment
// console.log(allFilesJson);
// DONE: export markdown to json
// TODO: Build method to get data from news to lambda folder
export async function handler(event, context) {
  console.log("queryStringParameters", event.queryStringParameters)
  return {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify(allFilesJson)
  }
}

// Now you are ready to access this API from anywhere in your Gatsby app! For example, in any event handler or lifecycle method, insert:
// fetch("/.netlify/functions/hello")
//    .then(response => response.json())
//    .then(console.log)
// For more info see: https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/#static-dynamic-is-a-spectrum
