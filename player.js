class Player{
constructor(){}
getCount(){
    var Pref = database.ref('playerCount');
    Pref.on("value",function (data){
        playerCount = data.val();
    })
}
updateCount(count){
    database.ref('/').update({
        playerCount:count
    })
}
update(name){
    var Pindex = "player" + playerCount;
    database.ref(Pindex).set({
        name:name
    })
}
}
