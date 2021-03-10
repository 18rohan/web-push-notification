var push = require('web-push');

let vapidkeys = {
    publicKey : 'BGEmsZdb8cLkfeQiI3uM7uIOMlNn_XpW-WKASu7tnOO7N3aec9vpFN_hN10oAqJChhAIgNBUhvXAHJaEXwvyYYw',
    privateKey: 'kIYMV61W8IP94NQ_lNdQ7XRwJ_OU5kydwkOsuvp7ECs'
  }

push.setVapidDetails('mailto:test@test.com',vapidkeys.publicKey,vapidkeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/egw1d1k0hFs:APA91bGlHcbMhWs2p3iHMFMO7qm97AHXLMnMWekkCwR_qZqcPivraeDRQf1W7ye5B-jH_JYi1UogYzgAaOE70wRF-1zMCMsKF2Sa5EDZcDLtn3AKLSzMspvmAIXc0SOsXZjxS5sVGD5I","expirationTime":null,"keys":{"p256dh":"BDyx8rTFxWB2moxdcMBl1q5ofpU4gJlJrDVTNezrzEkpEZFxAK9Yq9WzJcvilx3QxsJZqV818iiDIfl8DAix5YI","auth":"E974G4qdRavwcSJ46iaZZw"}};
push.sendNotification(sub,'test message')

// code to generate VAPID Keys
// let vapid = push.generateVAPIDKeys();

// Console logging Vapid Keys
// console.log(vapid);