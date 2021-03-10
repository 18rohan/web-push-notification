var push = require('web-push');

let vapidkeys = {
    publicKey: 'BAtFToO4QoRgNGGFClHmlKmGLnhQ9Xayi4_Ugn4vbzf9TfQfq_qOfEXBQ7bJhUXaeTCWVr0AOSXgH6WW-38fg4A',
    privateKey: 'b8s88XXXcCKUBrRq7XGziBWlQ4NV7SCYrCQMqHjzBm0'
  }

push.setVapidDetails('mailto:test@test.com',vapidkeys.publicKey,vapidkeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/f_BPV0o-VY4:APA91bFL0CqT3LxajCjNdzhFnBGFikWtGgm3TgyJ8838XjAYdnNIPjRrWQBtTzGpiRAdxBWkk9w-Pk6BhpjcPZpMcf_WVBaPMtfuiubhLH7gta3Fbg5Q6pFVoW9FN4m3QNdARWG78JOj","expirationTime":null,"keys":{"p256dh":"BOyxIDHZ0U13Yvj-G9o75o9wkiG8jxydL8s4SLjMdfDHv0yw6f_cLuj7Z0oWfT7EiAWWVWoh0ibgVxIhAlyk44Y","auth":"CYiSJxKtrDSpAwaE9_kTWQ"}};
push.sendNotification(sub,'test message')

// code to generate VAPID Keys
// let vapid = push.generateVAPIDKeys();

// Console logging Vapid Keys
// console.log(vapid);