var push = require('web-push');

let vapidkeys = {
    publicKey: 'BCF4srAPWFMYxuppvb0_8ZdSbiX9eCvwe9KI3oc22O-0EOWS1DLvuyP1FGAKhKJq0RDQAXzzMhz52a1P5yYgPBk',
    privateKey: 'N3E7GxGshMSlLV7pPbGYz3HRiNGS95rQE5WWBENK2iA'
  }

// push.setVapidDetails('mailto:test@test.com',vapidkeys.publicKey,vapidkeys.privateKey);

// let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/f_BPV0o-VY4:APA91bFL0CqT3LxajCjNdzhFnBGFikWtGgm3TgyJ8838XjAYdnNIPjRrWQBtTzGpiRAdxBWkk9w-Pk6BhpjcPZpMcf_WVBaPMtfuiubhLH7gta3Fbg5Q6pFVoW9FN4m3QNdARWG78JOj","expirationTime":null,"keys":{"p256dh":"BOyxIDHZ0U13Yvj-G9o75o9wkiG8jxydL8s4SLjMdfDHv0yw6f_cLuj7Z0oWfT7EiAWWVWoh0ibgVxIhAlyk44Y","auth":"CYiSJxKtrDSpAwaE9_kTWQ"}};
// push.sendNotification(sub,'test message')

// code to generate VAPID Keys
let vapid = push.generateVAPIDKeys();

// Console logging Vapid Keys
console.log(vapid);