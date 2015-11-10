(function() {
  var app = angular.module('diretrizes-produtos',[]);
  
  app.directive('galeriaProduto', function(){
      return{
        restrict: "E",
        templateUrl: "galeria-produto.html"
      };
  });

  app.directive("descricaoProduto", function() {
    return {
      restrict: 'E',
      templateUrl: "descricao-produto.html"
    };
  });

  app.directive("comentariosProduto", function() {
    return {
      restrict: 'E',
      templateUrl: "comentarios-produto.html"
    };
  });

  app.directive("especificacoesProduto", function() {
    return {
      restrict:"A",
      templateUrl: "especificacoes-produto.html"
    };
  });

  app.directive("abasProduto", function() {
    return {
      restrict: "E",
      templateUrl: "abas-produto.html",
      controller: function() {
        this.aba = 1;

        this.isSet = function(checkAba) {
          return this.aba === checkAba;
        };

        this.setAba = function(activeAba) {
          this.aba = activeAba;
        };
      },
      controllerAs: "aba"
    };
  });
  
})();
