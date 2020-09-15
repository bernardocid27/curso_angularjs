var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope){
    $scope.nombre="Uriel";
    $scope.nuevoComentario = {};
    $scope.comentarios = [
        {
            comentario: "Buen tutorial",
            username: "codigofacilito"
        },
        {
            comentario: "Malisimo tutorial",
            username: "otro_usuario"
        }
    ];
    $scope.agregarComentario = function(){
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    }
});

//MVVM