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
Run the server:  
```zsh
    node api/server.js
```

Test the health of the api:
```zsh
    localhost:3000/api/health
```

The webhook endpoint is:
```zsh
    localhost:3000/api/webhook
```

The payload to the webhook endopoint is a json with two mandatory fields: pdfContent and sendQuoteWith
#Example
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


