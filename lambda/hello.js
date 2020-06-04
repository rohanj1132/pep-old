
// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
var fs = require('fs');
var x = fs.readFileSync('../public/page-data/news/2019-10-01-test/page-data.json');
module.exports.handler = async function(event, context) {
  console.log("queryStringParameters", event.queryStringParameters)
  return {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify(x.toString())
  }
}
console.log(x.toString());
// Now you are ready to access this API from anywhere in your Gatsby app! For example, in any event handler or lifecycle method, insert:
// fetch("/.netlify/functions/hello")
//    .then(response => response.json())
//    .then(console.log)
// For more info see: https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/#static-dynamic-is-a-spectrum
