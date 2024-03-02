import nodemailer from "nodemailer";
const sendMail =async(email,name,event_name,ticket,event_url,wp_grp_url)=>{
    var transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
          user: "nistcloudcomputingclub@gmail.com",
          pass: "cpleberioysyjhux",
        },
      });
      let from = "Cloud Computing Club <nistcloudcomputingclub@gmail.com>";
      let emails = "cloudcomputing@nist.edu";
      const mailOptions = {
        from: from,
        to: email,
        replyTo: emails,
        subject: "NIST CCC | Event Registered",
        html: `
        <div><center>
        <img src="https://i.ibb.co/VBCyyGk/logo-cutted.png" width="80" height="100" alt="nist-ccc" />
        <h1 style="color: green; margin-top: -10px; text-transform: capitalize;">${name}, Registration Confirmed!</h1>
        <p style="font-size: 24px"><b>Event - </b>${event_name}</p>    
       
        <p style="font-size: 30px;"><b>TicketID - #${ticket}</b></p>
        <a href="https://cloudcomputingclub.in/${event_url}">
        <button style="padding: 10px 25px; background-color: orange; border-radius: 8px; border: none; color: white; font-size: 18px;">
         Event Details </button>
        </a>
        <a href="${wp_grp_url}">
        <button style="padding: 10px 25px; background-color: orange; border-radius: 8px; border: none; color: white; font-size: 18px;">
         Join Further Details </button>
        </a>
        <article style="margin-top: 40px; text-align: 'left'">
        <br/>
          With Regards, <br />
          Cloud Computing Club, NIST
        </article>
        </center>
        </div>`,
      };
      await transporter.sendMail(mailOptions);
}

export {sendMail}