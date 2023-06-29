const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

module.exports = {
    receivePdf(req, res, next){
        const { pdfContent, sendQuoteWith } = req.body;

        const decodedPDF = Buffer.from(pdfContent, 'base64');
        const savePDF = promisify(fs.writeFile);
        const pdfPath = path.join(__dirname, 'received.pdf');

        savePDF(pdfPath, decodedPDF)
            .then(() => {
                console.log('PDF saved successfully!');
                console.log('sendQuoteWith Value:', sendQuoteWith);
                res.sendStatus(200);
            })
            .catch((error) => {
                console.error('Error saving PDF:', error);
                res.sendStatus(500);
            });
        }
}
