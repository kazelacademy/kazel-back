const { readFileSync } = require('fs');
const { join } = require('path');

const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_HOST,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.sendAccountVerificationEmail = (account) => {
  const redirect = `${process.env.EMAIL_VERIFY_ACCOUNT_REDIRECT}/${account.token}`;
  const title = 'Verifica tu cuenta';
  let html =  readFileSync(join(__dirname, 'templates', 'verify-account.html'), 'utf8');

  html = html
  .replace(/{{name}}/g, account.firstname)
  .replace(/{{redirect}}/g, redirect)
  .replace(/{{title}}/g, title)

  transport.sendMail({
    from: 'no-reply@kazel.com',
    to: account.email,
    subject: title,
    text: title,
    html
  });
};
