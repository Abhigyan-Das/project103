const firebaseConfig = {
   apiKey: "AIzaSyAJl42EOe4FaC3PSbs_ifwPFGvgda6ht3w",
   authDomain: "project-100-lets-chat-web-app.firebaseapp.com",
   projectId: "project-100-lets-chat-web-app",
   storageBucket: "project-100-lets-chat-web-app.appspot.com",
   messagingSenderId: "1079214198564",
   appId: "1:1079214198564:web:9668546a698ba7b788adb1",
   measurementId: "G-8SZQ1M6W4S"
 };
 
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);




function addroom() {
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({ purpose: "adding room name"});
   
   localStorage.setItem("room_name",room_name);
 
   window.location = "kwitter_room.html";
 
 }
 
 function getData() { firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
    Room_names = childKey; 
    console.log("Room Name - " + Room_names); 
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
    document.getElementById("output").innerHTML += row; }); }); }

 getData();
 
 function redirectToRoomName(name)
 {
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
 }
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");

window.location = "index.html";
}
