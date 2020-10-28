class Player {
    constructor(){}
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('form/playerCount').update({
        playerCount: count
      });
    }
  
    update(name){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        name:name
      });
    }
  }