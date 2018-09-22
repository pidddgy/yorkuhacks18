var stream = new Vue({
  el: '#stream',
  data: {
    items: [
      { 
        title: 'aaaaaa',
        message: 'Foo',
        author: 'sf',
      },

      { 
        title: 'Bsdf',
        message: 'Bar',
        author: 'Anonymous',
      },

      { 
        title: 'dummy value',
        message: 'also dummy value',
        author: 'sdfdff',
      },

      { 
        title: 'really long really long dummy text really long dummy text really long dummy text ',
        message: 'also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text also really long dummy text ', 
        author: 'sfsdfsdfsdff',
      },
    ]
  }
})
