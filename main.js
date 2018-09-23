var stream = new Vue({
  el: '#stream',
  data: {
    items: [{
        title: 'aaaaaa',
        message: 'Foo',
        author: 'sf',
        showLess: true,
        comments: [{
            author: "Bob",
            text: "ur question dumb and you should feel bad",
          },
          {
            author: "AAAAAAAA",
            text: "bepis",
          },
          {
            author: "AAAAAAAA",
            text: "many amount of posts dummy text",
          },
          {
            author: "AAAAAAAA",
            text: "many amount of posts dummy text",
          },
          {
            author: "AAAAAAAA",
            text: "many amount of posts dummy text",
          },
          {
            author: "AAAAAAAA",
            text: "many amount of posts dummy text",
          },
          {
            author: "AAAAAAAA",
            text: "many amount of posts dummy text",
          },
        ],
      },

      {
        title: 'Bsdf',
        message: 'Bar',
        author: 'Anonymous',
        showLess: true,
        comments: [{
            author: "Bob",
            text: "ur question dumb and you should feel bad",
          },
          {
            author: "AAAAAAAA",
            text: "bepis",
          },
        ],
      },

      {
        title: 'dummy value',
        message: 'also dummy value',
        author: 'sdfdff',
        showLess: true,
        comments: [{
            author: "joe",
            text: "asdf hi",
          },
          {
            author: "asdf;lkjasdflkajsdflksdf",
            text: "very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment very long dummy text for comment ",
          },
        ],
      },

      {
        title: 'really long really long dummy text really long dummy text really long dummy text ',
        message: 'also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text ',
        author: 'sfsdfsdfsdff',
        showLess: true,
        comments: [{
            author: "lil pump",
            text: "gucci gang",
          },
          {
            author: "AAAAAAAA",
            text: "bepis",
          },
        ],
      },
    ]
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