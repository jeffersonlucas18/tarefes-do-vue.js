
// var app = new Vue({
//   el: '#app' ,
//   data: {
//     message: 0,
//     message1: 0,
    
//   },
//   computed: {

//     multiplicacao: function () {

//      return  this.message * this.message1;

//     }
//   }

// })



var texto = new Vue({
  el: '#texto' ,
  data: {
    message1: 0,
    message2: 0,

  },
  computed: {
    soma : function () {
       
     return this.parseInt(message1) + this.parseInt(message2);
    
    }
    
  }
  
})