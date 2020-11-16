var database,form,player;
var gameState = 0;
var playerCount = 0

function setup(){
    database = firebase.database();
   
    createCanvas(500,500);
    if(gameState === 0){
     player = new Player();
     player.getCount();
     form = new Form();
     form.display();
    }
  
}


function draw(){
    background("white");
   
    drawSprites();
}




/*function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
*/
