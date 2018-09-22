var stream = new Vue({
  el: '#stream',
  data: {
    items: [
      { 
        author: 'aaaaaa',
        message: 'Foo'
      },

      { 
        author: 'Bsdf',
        message: 'Bar',
      },

      { 
        author: 'dummy value',
        message: 'also dummy value',
      },

      { 
        author: 'really long really long dummy text really long dummy text really long dummy text ',
        message: 'also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text ',
      },
    ]
  }
})
