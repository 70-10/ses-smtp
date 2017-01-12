# ses-smtp

Convert AWS Credentials to SES SMTP Credentials

## install

```
$ npm install 70-10/ses-smtp
```

## Usage

```js
const sesSmtp = require("ses-smtp");

const AWS_SECRET_KEY = "<YOUR AWS SECRET KEY>";
const smtpPassword = sesSmtp(AWS_SECRET_KEY);
```

## Note

[Obtaining Your Amazon SES SMTP Credentials - Amazon Simple Email Service](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/smtp-credentials.html)
