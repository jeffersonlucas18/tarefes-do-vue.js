

var app = new Vue({
  el: '#app' ,
  data: {
    message: 0,
    message1: 0,
    
  },
  computed: {

    multiplicacao: function () {

     return  this.message * this.message1;

    }
  }

})

