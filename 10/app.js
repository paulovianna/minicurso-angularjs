(function() {

  var app = angular.module('loja', ['diretrizes-produtos']);
  
  app.controller('LojaController', ['$http',function($http){
    loja = this;
    loja.produtos = [];
    $http.get('produtos-loja.json').success(function(dados){
      loja.produtos = dados;
    });
  }]);

  app.controller('ComentarioController', function(){

    this.comentario = {};

    this.addComentario = function(produto){
      produto.comentarios.push(this.comentario);
      this.comentario = {};
    };
  });
})();