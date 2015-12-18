"use strict";

(function(){
  angular
  .module("songs")
  .directive("songShow", function(){
    return {
      templateUrl: "/js/songs/_song_show.html",
      replace: "true",
      scope: {
        song: "="
      },
      link: function(scope){
        scope.divIsVisible = false;
        scope.toggleAudioDiv = function(){
          console.log("I was clicked");
          if(scope.divIsVisible){
            scope.divIsVisible = false
          }
          else{
            scope.divIsVisible = true
          }
        }
      }
    };
  });

})(); // ends main function
