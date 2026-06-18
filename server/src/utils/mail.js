import { createTransport } from "nodemailer";
import handlebars from "handlebars";

const transporter = createTransport({
  host: process.env.MAIL_SMTP_HOST,
  port: process.env.MAIL_SMTP_PORT,
  auth: {
    user: process.env.MAIL_SMTP_USER,
    pass: process.env.MAIL_SMTP_PASS,
  },
});

const renderEmail = (username) => {
  const templateSource = fs.readFileSync(`${__dirname}/../utils/templates/contact.hbs`, "utf8");

  const emailTemplate = handlebars.compile(templateSource);

  var replacements = {
    username,
  };

  const htmlToSend = emailTemplate(replacements);

  return htmlToSend;
};

export const sendContactMail = async (options) => {
  const messageId = Date.now();
  const mail = {
    from: {
      name: "Kutumb",
      address: process.env.MAIL_SMTP_USER,
    },
    to: "info@kutumbharat.com",
    subject: "New Business Opportunity ",
    html: `  
    <p>Greetings, <strong>${options.fullName}</strong>, want to conact with you for new business opportunity. </p>
    <p>Email: <strong>${options.email}</strong>,</p>
    <p>Phone no. : <strong>${options.phone}</strong></p>
    <p>Client Message: </p>
    <p> ${options.message}</p>


    <p>Warm Regards,</p>
    <p><strong>Kutumb Bharat</strong></p>
     
    `,
    headers: {
      "Message-ID": messageId,
      "In-Reply-To": messageId,
    },
  };

  try {
    await transporter.sendMail(mail);
    console.log("Contact mail sent to user.");
  } catch (error) {
    console.log("Email service failed silently.");
    console.log("Error: ", error);
  }
};


export const sendNewsLetter = async (options) => {
  const messageId = Date.now();
  const mail = {
    from: {
      name: "Kutumb Bharat",
      address: process.env.MAIL_SMTP_USER,
    },
    to: "info@kutumbharat.com",
    subject: "Newsletter Joinee",
    html: `  
    <p>Greetings, <strong>${options.email}</strong>, want to join our newletter mailing list. </p>

    <p>Warm Regards,</p>
    <p><strong>Kutumb Bharat</strong></p>
     
    `,
    headers: {
      "Message-ID": messageId,
      "In-Reply-To": messageId,
    },
  };

  try {
    await transporter.sendMail(mail);
    console.log("welcome mail sent to user.");
  } catch (error) {
    console.log("Email service failed silently.");
    console.log("Error: ", error);
  }
};