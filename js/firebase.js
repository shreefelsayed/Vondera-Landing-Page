
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js'

import { getFirestore , collection , addDoc } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        

    });
});
const firebaseConfig = {
  apiKey: "AIzaSyAqj8tPzfd6AKOaWgZ538v8cRpHcbQOmDA",
  authDomain: "brands-61c3d.firebaseapp.com",
  databaseURL: "https://brands-61c3d-default-rtdb.firebaseio.com",
  projectId: "brands-61c3d",
  storageBucket: "brands-61c3d.appspot.com",
  messagingSenderId: "473830923339",
  appId: "1:473830923339:web:7866ebeb543971edb141ce",
  measurementId: "G-2S33EG8XMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const send_button = document.getElementById("button_contact");
console.log(send_button)
send_button.addEventListener("click", async function() {
    var firstName = document.getElementById("first").value;
    var lastName = document.getElementById("last").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Create an object to hold the values
    var formData = {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        PhoneNumber: phoneNumber,
        Message: message
    };

    await addDoc(collection(db, "customer_support"),formData )
    reset_values();
    alert("we will get back to you in 24 hours Thank you <3")
});
function reset_values(){
 document.getElementById("first").value="";
 document.getElementById("last").value="";
document.getElementById("email").value="";
document.getElementById("phone").value="";
document.getElementById("message").value="";
}
