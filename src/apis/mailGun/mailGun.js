const mailgun = require('mailgun-js');

const mg = mailgun({ apiKey: process.env.MAILGUN_KEY, domain: process.env.MAILGUN_DOMAIN });

const useMailGun = (formData) => {
  const { email, textarea } = formData;
  const data = {
    from: 'dushangjie@gmail.com',
    to: `${email}`,
    subject: 'Lunch Idea',
    text: `${textarea}`,
  };

  return new Promise((resolve, reject) => {
    mg.messages().send(data, (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
};
export default useMailGun;
