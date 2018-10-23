
var app = new Vue({
  el: '#app' ,
  data: {
    nome: "",
    email: "",
    numero: "",
    idade: "",
    resposta: "",
    qualidades: [],
    usuarios: [
      {nome: 'israel'},
      {nome: 'jeff'},
      {nome: 'caio'}
    ]
  },

  filtres: {
    toUpperCase(str) {
      return str.toUpperCase();
    }
  },

  methods: {
    enviar() {
      alert('enviado');
    },
  }
  });


    
//   },
//   computed: {

//     multiplicacao: function () {
    
//      return  this.message * this.message1;

//     }
//   }

// })

// new Vue ({ 
//   el: '#app' , 
//   métodos: { 
//     diga: function ( message ) { 
//       alert (message) 
//     } 
//   } 
// })