"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongIndexController", [
    "SongFactory",
    "$sce",
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction(SongFactory, $sce) {
    this.songs = SongFactory.query(function(songs){
      for(var i=0; i < this.songs.length; i++) {
        this.songs[i].trustworthyUrl = $sce.trustAsResourceUrl(this.songs[i].audio_url);
      }
    }.bind(this));
  }
})(); //ends main function
