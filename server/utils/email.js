const nodemailer = require('nodemailer');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `${process.env.EMAIL_FROM}`;
    this.html = `<h1>Welcome to react-hktour.com !</h1>
    <p>Please Click to link to activate</p>
    <a href="/">${this.url}</a>`
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      // Sendgrid for production email
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        }
      })
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }

  async sendMail() {
    const mailOptions = {
      to: this.to,
      firstName: this.firstName,
      url: this.url,
      from: this.from,
      html: `<h1>Welcome to react-hktour.com !</h1>
      <p>Please click the link to activate your account !</p>
      <a href="/">${this.url}</a>
      `,
    }

    //3 send
    await this.newTransport().sendMail(mailOptions);
  }

  async sendPasswordReset() {
    const mailOptions = {
      to: this.to,
      firstName: this.firstName,
      url: this.url,
      from: this.from,
      html: `<h1>Hi ${this.firstName},</h1>
      <h1>Forgot your password?</h1>
      <p>Please click the link to reset your password !</p>
      <a href="${this.url}">${this.url}</a>
      `,
    }

    //3 send
    await this.newTransport().sendMail(mailOptions);
  }
};
