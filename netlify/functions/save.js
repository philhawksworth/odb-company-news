require('dotenv').config();
const {
  DATABASE_URL,
  SUPABASE_SERVICE_API_KEY
} = process.env;


exports.handler = async event => {
  
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  // unpack the form submission data
  const querystring = require("querystring");
  const {
    title,
    description
  } = querystring.parse(event.body);
  
  console.log(title, description);
  
  return {
    statusCode: 200,
    body: "Ok"
  } 

}