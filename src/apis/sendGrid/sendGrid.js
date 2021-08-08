const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_KEY);

const useSendGrid = (formData) => {
  const { email, textarea } = formData;
  const msg = {
    to: 'dushangjie@gmail.com',
    from: `${email}`,
    subject: 'Sending with Twilio SendGrid is Fun',
    text: `${textarea}`,
  };
  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  })();
};

export default useSendGrid;
