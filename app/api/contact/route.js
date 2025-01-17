
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
 
    const { name, email, message } = await request.json();

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,  
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, 
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS, 
      },
    });

    let mailOptions = {
      from: `"${name}" <${email}>`, 
      to: process.env.MY_RECEIVER_MAIL || "muradeyvazli18@gmail.com", 
      subject: `Portföy İletişim - ${name}`,
      text: message, 
      
    };


    await transporter.sendMail(mailOptions);


    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Mail gönderilirken hata oluştu:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
