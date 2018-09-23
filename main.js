var stream = new Vue({
  el: '#stream',
  data: {
    items: []
  },
  methods: {
    writeUserData: function (userId, name, email, imageUrl) {
      var path = firebase.database().ref('items');
      var payload = {
        username: name,
        email: email,
        profile_picture : imageUrl
      };
      var res = path.push(payload);
      path.set(payload);
      console.log('user key', res.key);
    }
  }
})


// Get the modal
var modal = document.getElementById('myModal');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
document.getElementById('addPost').onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCzNBAbv0kASKMAlBV39JBdItzX9vYtRfc",
  authDomain: "qa-hub-f34e2.firebaseapp.com",
  databaseURL: "https://qa-hub-f34e2.firebaseio.com",
  projectId: "qa-hub-f34e2",
  storageBucket: "qa-hub-f34e2.appspot.com",
  messagingSenderId: "321880200644"
};
firebase.initializeApp(config);

var ref = firebase.database().ref(); 
ref.on("value", function (snapshot) {
  var el = document.getElementById('data');
  //stream.$data.items = JSON.stringify(snapshot.val(), null, 2);
  stream.$data.items = snapshot.val();
  console.log(snapshot.val())
});