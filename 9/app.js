(function() {
  var app = angular.module('loja', ['diretrizes-produtos']);
  
  app.controller('LojaController', function() {
    this.produtos = produtos;
  });

  app.controller('ComentarioController', function(){

    this.comentario = {};

    this.addComentario = function(produto){
      produto.comentarios.push(this.comentario);
      this.comentario = {};
    };
  });


  var produtos = [{
    nome: 'Produto 01',
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus natus quis, ipsum corrupti dicta, enim odio, perspiciatis eos ipsa ipsam ea tenetur vel id aperiam nobis accusamus nostrum unde maiores.",
    preco: 110.50,
    cor: 'Azul',
    imagens: [
      "imagens/angular-logo.png",
      "imagens/css3-logo.png",
      "imagens/html5-logo.png"
    ],
    comentarios: [{
        estrelas: 5,
        conteudo: "Produto muito bom.",
        autor: "usuario@exemplo.com",
        criadoEm: 1397490980837
      }, {
        estrelas: 1,
        conteudo: "não gostei do produto.",
        autor: "usuario@exemplo.com",
        criadoEm: 1397490980837
      }
    ]
  }, {
    nome: 'Produto 02',
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus natus quis, ipsum corrupti dicta, enim odio, perspiciatis eos ipsa ipsam ea tenetur vel id aperiam nobis accusamus nostrum unde maiores.",
    preco: 22.90,
    cor: 'Vermelho',
    imagens: [
      "imagens/angular-logo.png",
      "imagens/css3-logo.png",
      "imagens/html5-logo.png"
    ],
    comentarios: [{
        estrelas: 5,
        conteudo: "Produto muito bom.",
        autor: "usuario@exemplo.com",
        criadoEm: 1397490980837
      }, {
        estrelas: 1,
        conteudo: "não gostei do produto.",
        autor: "usuario@exemplo.com",
        criadoEm: 1397490980837
      }
    ]
  }, {
    nome: 'Produto 03',
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus natus quis, ipsum corrupti dicta, enim odio, perspiciatis eos ipsa ipsam ea tenetur vel id aperiam nobis accusamus nostrum unde maiores.",
    preco: 1100,
    cor: 'Branco',
    imagens: [
      "imagens/angular-logo.png",
      "imagens/css3-logo.png",
      "imagens/html5-logo.png"
    ],
    comentarios: [{
        estrelas: 5,
        conteudo: "Produto muito bom.",
        autor: "usuario@exemplo.com",
        criadoEm: 1397490980837
      }, {
        estrelas: 1,
        conteudo: "não gostei do produto.",
        autor: "usuario@exemplo.com",
        criadoEm: 1397490980837
      }
    ]
  }];
})();
