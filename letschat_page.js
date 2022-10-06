//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDXXbTe-XtlCODmzzjW_p3OpETgVQyHWdQ",
    authDomain: "kwitter-fb96c.firebaseapp.com",
    databaseURL: "https://kwitter-fb96c-default-rtdb.firebaseio.com",
    projectId: "kwitter-fb96c",
    storageBucket: "kwitter-fb96c.appspot.com",
    messagingSenderId: "657908785697",
    appId: "1:657908785697:web:e89613a0e79b2d44d63960"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");
   function send(){
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          messgae:msg,
          like:0
    });
    document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
