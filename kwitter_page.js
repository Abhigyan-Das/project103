//YOUR FIREBASE LINKS
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

    
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });
  document.getElementById("msg").value = " ";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
