Simple api with a webhook endpoint that receives PDF file.

After cloning the repo, install the dependancies by running: 
npm install

Run the server:  
node api/server.js

Test the health of the api:
localhost:3000/api/health


The webhook endpoint is:
localhost:3000/api/webhook

The payload to the webhook endopoint is a json with two mandatory fields: pdfContent and sendQuoteWith
#Example
{
"pdfContent" : "xxxx",
"sendQuoteWith" : "xxx"
}

To run with ngrok:
ngrok http 3000

