
const firebaseConfig = {
      apiKey: "AIzaSyBjBzXSrh8L6KNeZIxNxPHehuCN-Jx1gVM",
      authDomain: "kwitter-99ce5.firebaseapp.com",
      databaseURL: "https://kwitter-99ce5-default-rtdb.firebaseio.com",
      projectId: "kwitter-99ce5",
      storageBucket: "kwitter-99ce5.appspot.com",
      messagingSenderId: "141424811104",
      appId: "1:141424811104:web:248da637f123b2b670b705"
    };
    
   
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
const firebaseConfig = {
      apiKey: "AIzaSyAfdk7RFmcrZ2GojRm8vDsEqX_BM8p0Et8",
      authDomain: "project-94-aeb63.firebaseapp.com",
      projectId: "project-94-aeb63",
      storageBucket: "project-94-aeb63.appspot.com",
      messagingSenderId: "301099724203",
      appId: "1:301099724203:web:a2dbd5c300d40078d1b6ee"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function adduser(){
user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
      purpose:"adding user"
})

}
      
      });});}
getData();
