var config = {
  apiKey: "AIzaSyCz-UUvJQjbR1IwkL9R_V1_aoRbhhktoBM",
  authDomain: "uber-c32ae.firebaseapp.com",
  databaseURL: "https://uber-c32ae.firebaseio.com",
  projectId: "uber-c32ae",
  storageBucket: "uber-c32ae.appspot.com",
  messagingSenderId: "668557580726",
  appId: "1:668557580726:web:60576a51a2d07af284c917"
};

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('website messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  
  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message,
  });
}