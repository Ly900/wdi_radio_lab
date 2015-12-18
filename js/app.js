"use strict";

(function(){
  angular
    .module("radio", [
      "ui.router",
      "ng-token-auth",
      "songs"
    ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .config([
    "$authProvider",
    AuthConfigFunction
  ]);

  function AuthConfigFunction($authprovider) {
    $authprovider.configure({
      apiUrl: "http://localhost:3000"
    });
  }

    function RouterFunction($stateProvider){
      $stateProvider
      .state("songIndex", {
        url: "welcome.html#/songs",
        templateUrl: "js/songs/index.html",
        controller: "SongIndexController",
        controllerAs: "SongIndexViewModel"
      })
      // .state("songShow", {
      //   url: "/songs/:id",
      //   templateUrl: "js/songs/show.html",
      //   controller: "SongShowController",
      //   controllerAs: "SongShowViewModel"
      // })
      .state("signin", {
        url: "welcome.html#/signin",
        templateUrl: "js/users/signin.html",
        controller: "SessionsController",
        controllerAs: "SessionsViewModel"
      })
      .state("signout", {
        url: "welcome.html#/signout",
        templateUrl: "js/users/signout.html",
        controller: "SessionsController",
        controllerAs: "SessionsViewModel"
      });
    } //ends RouterFunction


})(); //ends main function
