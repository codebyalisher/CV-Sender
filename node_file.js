/*const http=require('http');
const url=require('url');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plan'})
    console.log(req.url);
    console.log(url.parse(req.url));
    res.end('hello world')
}).listen(9898)


console.log('server is running on 127.0.0.1')*/










const fs = require('fs');
const pdf = require('pdf-parse');
const nodemailer = require('nodemailer');
// i want to add new commit

// Function to read and extract emails from the PDF file
function extractEmailsFromPDF(pdfFilePath) {
  return new Promise(async (resolve, reject) => {
    try {
      const dataBuffer = fs.readFileSync(pdfFilePath);
      const data = await pdf(dataBuffer);
      const text = data.text;

      // Regular expression to extract email addresses
      const emailRegex = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/g;
      const emails = text.match(emailRegex);

      if (emails) {
        resolve(emails);
      } else {
        reject('No email addresses found in the PDF');
      }
    } catch (error) {
      reject(error);
    }
  });
}

// Function to send an email with attachments
async function sendEmailWithAttachments(email, pdfFilePath, cvFilePath) {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'Gmail'
    auth: {
      user: 'alisher3316374@gmail.com',
      pass: 'ALIsher137669#',
    },
  });

  const mailOptions = {
    from: 'alisher3316374@gmail.com',
    to: email,
    subject: 'Application for Associate software engineer',
    text: '',
    attachments: [
      { filename: './Companies_emails.pdf', path: pdfFilePath },
      { filename: './Ali_Sher_CV.docx.pdf', path: cvFilePath },
    ],
  };

  // Send the email
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info.response);
      }
    });
  });
}

// Usage
const pdfFilePath = './Companies_emails.pdf';
const cvFilePath = './Ali_Sher_CV.docx.pdf';

extractEmailsFromPDF(pdfFilePath)
  .then(async (emails) => {
    for (const email of emails) {
      try {
        const result = await sendEmailWithAttachments(email, pdfFilePath, cvFilePath);
        console.log(`Email sent to ${email}: ${result}`);
      } catch (error) {
        console.error(`Failed to send email to ${email}: ${error}`);
      }
    }
  })
  .catch((error) => {
    console.error(error);
    console.log("hello world")
  });
