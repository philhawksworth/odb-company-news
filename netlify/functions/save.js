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
  
  // connect to database
  const { createClient } = require('@supabase/supabase-js');
  const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

  // save our data to the DB
  const { data, error } = await supabase
  .from('announcements')
  .insert([
    {
      title: title,
      description: description
    }
  ]);
  
  console.log(data, error);


  // TODO: return a 302 to redirect the user to the new page location
  // URL: `/news/${data[0].id}`

  console.log(`NEW URL: /news/${data[0].id}`);
  

  return {
    statusCode: 200,
    body: "Ok"
  } 

}