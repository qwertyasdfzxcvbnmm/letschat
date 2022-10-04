
//ADD YOUR FIREBASE LINKS HERE
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
    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;

    function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});

localStorage.setItem("room_name", room_name);
window.location= "letschat_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+ Room_names);
      row= "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)>#"+ Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "letschat_page.html";
      }