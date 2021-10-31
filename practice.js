
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyA4MPFB97tGue6AW5SsJwUV41xeyfYiuHw",
    authDomain: "qwitter-app.firebaseapp.com",
    databaseURL: "https://qwitter-app-default-rtdb.firebaseio.com",
    projectId: "qwitter-app",
    storageBucket: "qwitter-app.appspot.com",
    messagingSenderId: "367917619383",
    appId: "1:367917619383:web:06600170ecbd155af31532"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }