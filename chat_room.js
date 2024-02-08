var firebaseConfig = 
{
    apiKey: "AIzaSyAk_gg7lHoMJdVlisKbiUdJ35idJDg-P9s",   
    authDomain: "social-e5855.firebaseapp.com",   
    databaseRL: "https://social-e5855-default-rtdb.firebaseio.com",   
    projectId: "social-e5855",   
    storageBucket: "social-e5855.appspot.com", messagingSenderId: "671543009162",   
    appId: "1:671543009162:web:a881fdddf02bf05c08b273"
}

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Te damos la bienvenida, " + user_name + "!";

function addRoom()
{

}