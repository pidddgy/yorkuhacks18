var stream = new Vue({
  el: '#stream',
  data: {
    items: [],
    userId: null,
  },
  methods: {
    writeUserData: function (comments, message, showLess, title, difficulty) {
      var path = firebase.database().ref('items');
      var newPayloadRef = path.push();
      newPayloadRef.set({
        author: name,
        comments: comments,
        message: message,
        showLess: showLess,
        title: title,
        id: newPayloadRef.key,
        difficulty: difficulty
      })

    },
    writeComment: function (text, postID) {
      var path = firebase.database().ref('items/' + postID + '/comments');
      path.push({
        text: text,
        author: name
      })

      stream.givePoints(50);
    },
    createUser: function (name) {
      var path = firebase.database().ref('users');
      var newUserPref = path.push();
      newUserPref.set({
        name: name,
        points: 0,
        id: newUserPref.key
      });
      userId = newUserPref.key;
    },
    givePoints: function (increment) {
      var path = firebase.database().ref('users/' + userId + '/points');
      path.transaction(function(points) {
        return points + increment;
      })
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

var name = prompt("Enter your name");

stream.createUser(name);