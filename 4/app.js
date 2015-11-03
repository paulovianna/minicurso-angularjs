(function() {
  var app = angular.module('loja', []);

  app.controller('LojaController', function(){
    this.produtos = produtos;
  });

  var produtos = [
    { nome: 'Produto 01', preco: 2.95 },
    { nome: 'Produto 02', preco: 5.95 },
    { nome: 'Produto 03', preco: 3.95 }
  ];
})();
