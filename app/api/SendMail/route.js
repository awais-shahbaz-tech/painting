import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
 export async function POST(req) {
    let { name, email, subject, message } = await req.json()
   console.log("3434" ,name, email, subject, message )
    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true, 
      auth: {
        user: 'usmanhanif9876@gmail.com',
        pass: 'mupguybmwhjahljm',
      },
    });

    const mailOptions = {
      from: email,
      to: 'kthwilliams45@gmail.com',
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      
      await transporter.sendMail(mailOptions);
     return NextResponse.json({ message: 'Email sent successfully' } , {status:200});
    } catch (error) {
       return NextResponse.json({ message: 'Error sending email', error } , {status : 500});
    }
  } 


