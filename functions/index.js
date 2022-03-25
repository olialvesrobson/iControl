const functions = require('firebase-functions');
const admin = require('firebase-admin');

const os = require('os')
const path = require('path')
const spawn = require('child-process-promise').spawn


admin.initializeApp(functions.config().firebase);

 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from TimesController!");
 });

 const createNotification = (notification => {
     return admin.firestore().collection('notification')
     .add(notification)
     .then(doc => console.log('notification added', doc));
 })

 exports.shiftCreated = functions.firestore
    .document('shift/{shiftID}')
    .onCreate(doc => {
        const shift = doc.data();
        const notification = {
            content: `Added a new shift to ${shift.dataSelecionada} ${shift.startTime}`,
            detail: `${shift.clientLocation}` ,
            user: `${shift.user}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    });

    exports.userJoined = functions.auth.user()
.onCreate(user => {
    return admin.firestore().collection('users')
    .doc(user.uid).get().then(doc => {
        const newUser = doc.data();
        const notification = {
            content: 'Joined the party',
            detail: `${newUser.firstName} ${newUser.lastName}`,
            user: `${newUser.id}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    })
});



exports.onFileChange = functions.storage.object().onFinalize((object, context) => {
  // ...
  // Extract object data - left out to focus on the other parts of the function
  const {Storage} = require('@google-cloud/storage');
  const admin = require('firebase-admin');
  //admin.initializeApp();
  // Creates a client
  /*
  const storage = new Storage({
      projectId: "dude-garden-care"
  });
  */

  const storage = admin.storage();
  const bucket = object.bucket;
  const contentType = object.contentType;
  const filePath = object.name;

  if (object.resourceState === 'not_exists') {
    console.log('We deleted a file, exit...')
    return null
  }


  if (path.basename(filePath).startsWith('resized-')) {
    console.log('We already renamed that file!')
    return null
  }

  
  const destBucket = storage.bucket(bucket)
  const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath))
  const metadata = { contentType: contentType }
  return destBucket
    .file(filePath)
    .download({
      destination: tmpFilePath,
    })
    .then(() => {
      return spawn('convert', [tmpFilePath, '-resize', '500x500', tmpFilePath])
    })
    .then(() => {
      console.log('uploading resized file')
      return destBucket.upload(tmpFilePath, {
        destination: 'resized-' + path.basename(filePath),
        metadata: metadata,
      })
    })
})