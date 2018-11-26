const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

class newUser {
    constructor(data) {
        this.nameOfPerson = data.nameOfPerson,
        this.nameOfCollege = data.nameOfCollege,
        this.placeOfCollege = data.placeOfCollege,
        this.emailOfPerson = data.emailOfPerson,
        this.phoneNoOfPerson = data.phoneNoOfPerson
        this.referralCode = data.referralCode,
        this.eventsRegistered = data.eventsRegistered
    }
}
// Saves a message to the Firebase Realtime Database
exports.registerUser = functions.https.onCall((data, context) => {

    if(data.hasOwnProperty("nameOfPerson")
    &&data.hasOwnProperty("nameOfCollege")
    &&data.hasOwnProperty("placeOfCollege")
    &&data.hasOwnProperty("emailOfPerson")
    &&data.hasOwnProperty("phoneNoOfPerson")
    &&data.hasOwnProperty("referralCode")
    &&data.hasOwnProperty("eventsRegistered")) {
        const newReg = new newUser(data);
        const REGISTRATION_PATH = "/main/registrations/";
        const newRegRef = admin.database().ref(REGISTRATION_PATH).push();
        return newRegRef.set(newReg)
        .then(() => {
            console.log("Registration success");
            return null;
        })
        .catch((err) => {
            console.log("Registration failed.");
            console.log(err);
            return err;
        });
    } else {
        throw new functions.https.HttpsError("failed-precondition", "The function must be called with valid parameters");
    }
});
