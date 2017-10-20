/**
 * Created by Nan on 2017/10/13.
 */
var app = angular.module("app", ["ui.router"]);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("sereverPage",{
            url:"/server",
            templateUrl:"./App/View/server.html"
        })
        .state("finPage",{
            url:"/fin",
            templateUrl:"./App/View/fin.html"
        })
    $urlRouterProvider.otherwise("/server")
})