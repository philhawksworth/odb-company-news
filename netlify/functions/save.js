


require('dotenv').config();
const {
  DATABASE_URL,
  SUPABASE_SERVICE_API_KEY
} = process.env;


exports.handler = async event => {
  
  const querystring = require("querystring");
  const {
    title,
    description
  } = querystring.parse(event.body);
  
    const data = JSON.parse(event.body)

    
  console.log(data);
  console.log(querystring.parse(event.body));
  
  
  return {
    statusCode: 200,
    body: "Ok"
  } 

}