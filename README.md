# CV-Sender
Send CV by uploading the companies Emails pdf files and it will send the cv to the emails one by one 
# CV-Sender using Node Js
Setting up a project to send emails with PDF and CV attachments one by one in Node.js involves several steps. Here's a detailed procedure to help you get started:

Step 1: Initialize Your Node.js Project

Create a new directory for your project and navigate to it in your terminal.
Initialize a Node.js project using npm init.
Install the required dependencies: pdf-parse and nodemailer using npm install pdf-parse nodemailer.
Step 2: Create PDF and CV Files

Prepare the PDF file that contains the email addresses you want to send emails to.
Create a CV (resume) file that you want to attach to the emails.
Step 3: Write the Node.js Script

Create a JavaScript file (e.g., sendEmails.js) in your project directory.
Use the script provided in the previous response as a starting point. Modify the script to fit your specific needs. Be sure to replace 'your-email-service', 'your-email@gmail.com', and 'your-email-password' with your own email service details.
Customize the email subject, message body, and attachments according to your requirements.
Step 4: Run the Script

In your terminal, run the Node.js script using the command: node sendEmails.js.
The script will extract email addresses from the PDF file and send emails one by one with the PDF and CV attachments.
Step 5: Handle Errors and Customize

Implement error handling and logging to monitor the progress and status of email sending.
Customize the script further if needed, such as adding additional email content, using HTML templates, or configuring your email service provider.
Step 6: Secure Your Credentials

Keep your email service credentials and any sensitive information secure. It's a good practice to use environment variables or a configuration file to store these credentials rather than hardcoding them in the script.
