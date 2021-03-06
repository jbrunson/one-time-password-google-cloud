const admin = require('firebase-admin');
const serviceAccount = require('./service_account.json');
const functions = require('firebase-functions');
const createUser = require('./create_user');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-a53fd.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);

