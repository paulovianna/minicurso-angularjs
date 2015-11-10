(function(){
  var produto1 = { nome: 'Produto 01', preco: 4 };
  var app = angular.module('loja', []);
  app.controller('LojaController', function(){
    this.produto = produto1;
    });
})();
