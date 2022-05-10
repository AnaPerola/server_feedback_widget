import {MailAdapter, SendMailData} from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "472b7d793bcd2f",
    pass: "c227b35961b0c0"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData){

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Ana Pérola <aperola32@gmail.com>',
    subject,
    html: body,
  });
  }
}