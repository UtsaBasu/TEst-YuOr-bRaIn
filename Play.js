class Player{
    constructor(){
     this.distance=0;
     this.index=0;
     this.name=null;
    }
    getCount(){
        var get = database.ref('playerCount');
        get.on("value",function(dat){
            playerCount=dat.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            contestantCount:count
        })
    }
    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo(){
        var playerInforef=database.ref('players');
        playerInforef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}
