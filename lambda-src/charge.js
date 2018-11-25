const keyPublishable = "pk_test_RNAaBnsB4ZFTmEkgoyctVXTg";
const keySecret = "sk_test_R4NrJdMCTYDnkuovKu3naFkt";

const stripe = require("stripe")(keySecret);

exports.handler = function(event, context, callback) {
  // Do stuff here, you'll send the answer back in the body of the call back bellow

  const statusCode = 200;
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  const charge = stripe.charges.create({
    amount: 499,
    currency: 'usd',
    source: event.body,
    receipt_email: 'vako.bakarian@gmail.com'
  });
  callback(null, {
    statusCode,
    headers,
    body: JSON.stringify(charge)
  })
};
