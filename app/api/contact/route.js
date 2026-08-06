import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
});

const generateEmailTemplate = (name, email, userMessage) => `
  <div style="
    font-family: Arial, sans-serif;
    color: #333;
    padding: 20px;
    background-color: #f4f4f4;
  ">
    <div style="
      max-width: 600px;
      margin: auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
    ">

      <h2 style="color:#7c3aed;">
        New Portfolio Message
      </h2>

      <p>
        <strong>Name:</strong>
        ${name}
      </p>

      <p>
        <strong>Email:</strong>
        ${email}
      </p>

      <p>
        <strong>Message:</strong>
      </p>

      <blockquote style="
        border-left:4px solid #7c3aed;
        padding-left:12px;
        margin-left:0;
      ">
        ${userMessage}
      </blockquote>

      <p style="
        margin-top:25px;
        font-size:12px;
        color:#888;
      ">
        Reply directly to this email to contact ${name}.
      </p>

    </div>
  </div>
`;

async function sendEmail(payload) {
  const { name, email, message } = payload;

  const mailOptions = {
    from: `"Rahul Karande Portfolio" <${process.env.EMAIL_ADDRESS}>`,

    // Mail will come to your Gmail
    to: process.env.EMAIL_ADDRESS,

    subject: `Portfolio Message - ${name}`,

    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,

    html: generateEmailTemplate(name, email, message),

    // Reply button will reply to visitor
    replyTo: email,
  };

  await transporter.sendMail(mailOptions);
}

export async function POST(request) {
  try {
    const payload = await request.json();

    const { name, email, message } = payload;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    if (!process.env.EMAIL_ADDRESS || !process.env.GMAIL_PASSKEY) {
      console.error("Email environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    await sendEmail(payload);

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
      },
      {
        status: 200,
      }
    );

  } catch (error) {

    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message.",
      },
      {
        status: 500,
      }
    );
  }
}