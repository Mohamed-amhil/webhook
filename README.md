Simple api with a webhook endpoint that receives PDF file.

Run the server:  
node api/server.js

Test the health of the api:
localhost:3000/api/health


The webhook endpoint:
localhost:3000/api/webhook

The payload to the webhook endopoint should be json with two mandatory fields: pdfContent and fieldValue
#Example
{
"pdfContent" : "xxxx",
"fieldValue" : "xxx"
}

To run with ngrok:
ngrok http 3000

