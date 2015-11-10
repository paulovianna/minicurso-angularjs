(function() {
  var app = angular.module('loja', []);

  app.controller('LojaController', function() {
    this.produtos = produtos;
  });

  var produtos = [{
    nome: 'Produto 01',
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus natus quis, ipsum corrupti dicta, enim odio, perspiciatis eos ipsa ipsam ea tenetur vel id aperiam nobis accusamus nostrum unde maiores.",
    preco: 110.50,
    cor: 'blue',
    imagens: [
      "imagens/angular-logo.png",
      "imagens/css3-logo.png",
      "imagens/html5-logo.png"
    ]
  }, {
    nome: 'Produto 02',
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus natus quis, ipsum corrupti dicta, enim odio, perspiciatis eos ipsa ipsam ea tenetur vel id aperiam nobis accusamus nostrum unde maiores.",
    preco: 22.90,
    cor: 'red',
    imagens: [
      "imagens/angular-logo.png",
      "imagens/css3-logo.png",
      "imagens/html5-logo.png"
    ]
  }, {
    nome: 'Produto 03',
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus natus quis, ipsum corrupti dicta, enim odio, perspiciatis eos ipsa ipsam ea tenetur vel id aperiam nobis accusamus nostrum unde maiores.",
    preco: 1100,
    cor: 'white',
    imagens: [
      "imagens/angular-logo.png",
      "imagens/css3-logo.png",
      "imagens/html5-logo.png"
    ]
  }];
})();
