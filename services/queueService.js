import { sendMail } from "../utils/sendMail.js";

let emailQueue = [];

export const addToQueue = (emailDetails) => {
  emailQueue.push({ ...emailDetails });
  console.log(`Email added to queue: ${emailDetails.email}`);
};

export const processQueue = () => {
  while (emailQueue.length > 0) {
    const { email, name, event_name, ticket, event_url, wp_grp_url } =
      emailQueue.shift();

    sendMail(email, name, event_name, ticket, event_url, wp_grp_url);
    console.log(`Processing email for: ${emailDetails.email}`);
  }
};
