//Add firebase here 
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
  
function addUser()
{
    user_name = document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.getItem("user_name", user_name);

    document.getElementById("username").innerHTML = user_name;

    window.location = "chat_room.html";
    
}





