import { client, sender } from "./mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import axios from 'axios';

const sendVerificationEmail = async (email, verificationToken)=>{
    // const recipient = [{email}];
    // try{
    //     const response = await client.send({
    //         from: sender,
    //         to: recipient,
    //         subject: "Verify your email",
    //         html:  VERIFICATION_EMAIL_TEMPLATE.replace('{verificationCode}', verificationToken),
    //         category: "Email Verification"
    //     });
    //     console.log("Email sent successfully ", response);
    // }catch(error){
    //     console.log("Error sending Email", error);
    // }
    try {
        const response = await axios.post('https://send.api.mailtrap.io/api/send', {
            from: { email: 'mailtrap@demomailtrap.com', name: 'Mailtrap Test' },
            to: [{ email: email }],
            subject: 'Verify your email',
            html: VERIFICATION_EMAIL_TEMPLATE.replace('{verificationCode}', verificationToken),
            category: 'Email Verification'
        }, {
        headers: {
            'Authorization': `Bearer ${process.env.MAILTRAP_TOKEN}`,
            'Content-Type': 'application/json'
        }
    });

    console.log('Email sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

const sendWelcomeEmail = async (email, name)=>{
    // const recipient = [{email}];
    // try{
    //     const response = await client.send({
    //         from: sender,
    //         to: recipient,
    //         template_uuid: "99572101-4f36-4a93-aa03-1b59b5e58d2e",
    //         template_variables: {
    //         "name": name,
    //         "company_info_name": "Auth Company"
    //         }
    //     });
    //     console.log("Welcome email sent successfully ", response);
    // }catch(error){
    //     console.log("Error sending welcome email ", error);
    // }
    try {
        const response = await axios.post('https://send.api.mailtrap.io/api/send', {
            from: { email: 'mailtrap@demomailtrap.com', name: 'Mailtrap Test' },
            to: [{ email: email }],
            template_uuid: "99572101-4f36-4a93-aa03-1b59b5e58d2e",
            template_variables: {
                "name": name,
                "company_info_name": "Hyper Local ECommerce Application"
            }
        }, {
        headers: {
            'Authorization': `Bearer ${process.env.MAILTRAP_TOKEN}`,
            'Content-Type': 'application/json'
        }
    });

    console.log('Email sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export {sendVerificationEmail, sendWelcomeEmail};