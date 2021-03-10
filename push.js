var push = require('web-push');

let vapidkeys = {
    publicKey: 'BAtFToO4QoRgNGGFClHmlKmGLnhQ9Xayi4_Ugn4vbzf9TfQfq_qOfEXBQ7bJhUXaeTCWVr0AOSXgH6WW-38fg4A',
    privateKey: 'b8s88XXXcCKUBrRq7XGziBWlQ4NV7SCYrCQMqHjzBm0'
  };

push.setVapidDetails(
    'mailto:test@test.com',
    vapidkeys.publicKey,
    vapidkeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cF_K7vUevF0:APA91bGVy7MOXX9sojA1mSFLPsrJQ-u5hUR3P7r2YywuhQpXtPgVHq_zMMqJJ5BRWUphxqp8K9TSCAPzcA6022G2kKw91mwMriI-eRVYoIvOb9RhmEyWsFi3UOVZcQTzwdj0CXCmF_Ba","expirationTime":null,"keys":{"p256dh":"BNLqRdXzlb7mFjvoG3Q3icdCxQvqAOaq1FMz44-Yr3QbzjGf5E3SMhnICvcrdt4KVf0uciTeZbmZBEBxs8WmoF8","auth":"0eJlCNsdqnZD0o4NBXIL_Q"}}
push.sendNotification(sub,'test message')

// code to generate VAPID Keys
// let vapid = push.generateVAPIDKeys();

// Console logging Vapid Keys
// console.log(vapid);


// const webpush = require('web-push');

// // VAPID keys should only be generated only once.
// const vapidKeys = webpush.generateVAPIDKeys();

// webpush.setGCMAPIKey('<Your GCM API Key Here>');
// webpush.setVapidDetails(
//   'mailto:example@yourdomain.org',
//   vapidKeys.publicKey,
//   vapidKeys.privateKey
// );

// webpush.sendNotification(pushSubscription, 'Your Push Payload Text');