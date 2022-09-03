var firebaseConfig = {
    apiKey: "AIzaSyCyi_IkBFvzGgAZGNO7dAhiB2S9ZjwdeVo",
    authDomain: "data-b1c6e.firebaseapp.com",
    databaseURL: "https://data-b1c6e.firebaseio.com",
    projectId: "data-b1c6e",
    storageBucket: "data-b1c6e.appspot.com",
    messagingSenderId: "830134122745",
    appId: "1:830134122745:web:cd1f347bed87e939798a28"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var con = firebase.database().ref('user');
    document.getElementById("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    var userInfo = con.push();
    userInfo.set({
    name:getId("name"),
    phone:getId("phone"),
    email:getId("email"),
    message:getId("message")
    });
    alert("sent");
    console.log("sent");
    document.getElementById("form").requestFullscreen();
    });
    function getId(id){
    return document.getElementById(id).value;
    }