require("dotenv").config();
module.exports = {
  newauthKey(uuid) {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <h1>This is the first version of mfzt authKey mailer</h1>
        <p>just insert this code in the cms</p>
        <h5>${uuid}</h5>
    </html>
    `;
  },
};
