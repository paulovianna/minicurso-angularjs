(function() {
  var app = angular.module('loja', []);

  app.controller('LojaController', function(){
    this.produto = produto1;
  });

  var produto1 = {
    nome: 'Produto 01',
    preco: 4,
    compravel: true,
    semEstoque: false
  };
})();
