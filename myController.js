angular.module('myApp', [])
  .controller('UsuarioController', function($scope, $http) {
    $scope.usuario = {};

    $scope.cadastrarUsuario = function() {
      $http.post('/api/usuarios', $scope.usuario)
        .then(function(response) {
          console.log('Cadastro realizado!');
        })
        .catch(function(error) {
          console.error('Erro ao cadastrar usuário:', error);
        });
    };

    $scope.submitForm = function() {
      if ($scope.formCadastro.$valid) {
        $scope.cadastrarUsuario();  // Chama a função para cadastrar o usuário
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    };
  });



