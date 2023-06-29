## Simple api with a webhook endpoint that receives PDF file.

Clone the repo: 
```zsh
    git clone https://github.com/Mohamed-amhil/webhook.git
    cd webhook
```
Install the dependancies by running:
```zsh
    npm install
```
Run the server in the terminal:  
```zsh
    node api/server.js
```

Test the health of the api in the browser or postman:
```zsh
    localhost:3000/api/health
```

The webhook endpoint is:
```zsh
    localhost:3000/api/webhook
```

The payload to the webhook endopoint is a json with two mandatory fields: pdfContent and sendQuoteWith. The pdfContent is a base64 encoding format string. #Example
```zsh
{
  "pdfContent" : "xxxx",
  "sendQuoteWith" : "xxx"
}
```


To run with ngrok:
```zsh
    ngrok http 3000
```


