const NodeMailjet = require('node-mailjet');

const { MAILJET_API_KEY, MAILJET_API_SECRET, CONTACT_EMAIL } = process.env;

exports.handler = function(event, context, callback) {
  const Mailjet = NodeMailjet.connect(MAILJET_API_KEY, MAILJET_API_SECRET, {
    version: 'v3.1',
  });

  Mailjet.post('send').request({
    Messages: [
      {
        From: {
          Email: CONTACT_EMAIL,
          Name: 'Mailjet Pilot',
        },
        To: [
          {
            Email: CONTACT_EMAIL,
            Name: 'passenger 1',
          },
        ],
        Subject: 'Your email flight plan!',
        TextPart:
          'Dear passenger 1, welcome to Mailjet! May the delivery force be with you!',
        HTMLPart:
          '<h3>Dear passenger 1, welcome to Mailjet!</h3><br />May the delivery force be with you!',
      },
    ],
  });

  callback(null, {
    statusCode: 200,
    body: 'Mail was sent!',
  });
};
