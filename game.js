class Game{
    constructor(){
    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
     if (gameState === 0) {
         player = new Player();
         var playerCountRef = await database.ref('playerCount').once("value");
        if (playerCountRef.exists()) {
            playerCount = playerCountRef.val();
            player.getCount();
        }
                form = new Form()
                form.display();
    }

    player1 = createSprite(width/2,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(width/2+50,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

    
   }
    
    play(){
        form.hide();

        Player.getPlayerInfo();
        console.log(allPlayers);
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        //var texx = 50;
        //var time = 5;
        drawSprites();

         
        
        //for loop starts
        for(var plr in allPlayers){
                    
        index = index+1;
        x = 500-allPlayers[plr].distance;
        y=500;
                     
        players[index -1].x = x;
        players[index - 1].y = y;
                       
        //if(frameCount%50===0){
        //  time -= 1;
        //}
        //fill("white");
        //textSize(20);
        //text(time,400,200);
           
        if(allPlayers.player1.score >= 10){
            game.update(2);
            player1.x = 10000;
            player2.x = 10000;
            //texx = 2000;

            fill('#FFA500');
            textSize(50);
            text("Congratulations! Dear, " + allPlayers.player1.name,200,160);
            text("You have win the match",220,220);

            fill("red");
            textSize(40);
            text("Opps! Sorry " + allPlayers.player2.name,340,320);
            text("You loose the game. Better try next time.",150,370);
           

            this.reset = createButton('Reset');
            this.reset.position(950, 550);
            this.reset.style('width', '100px');
            this.reset.style('height', '30px');
            this.reset.style('background', 'lightpink');
        
            fill("white");
            textSize(20);
            text("*Press Reset button && Refresh Your Page to start again, no need to change database",180,450);

            this.reset.mousePressed(() => {
                player.updateCount(0);
                game.update(0);
                //Player.updatePlayerInfo(null);
                allPlayers.player1.distance = 0;
                allPlayers.player1.name = "";
                allPlayers.player1.score  = 0;

                allPlayers.player2.distance = 0;
                allPlayers.player2.name = "";
                allPlayers.player2.score  = 0;
                //this.reset.hide();
                //form.display();

                
            });  

           }else if(allPlayers.player2.score>=10){
            game.update(2);
            player1.x = 10000;
            player2.x = 10000;
            //texx = 2000;

            fill('#FFA500');
            textSize(50);
            text("Congratulations! Dear, " + allPlayers.player2.name,200,160);
            text("You have win the match",220,220);

            fill("red");
            textSize(40);
            text("Opps! Sorry " + allPlayers.player1.name,340,320);
            text("You loose the game. Better try next time.",150,370);

            this.reset = createButton('Reset');
            this.reset.position(950, 550);
            this.reset.style('width', '100px');
            this.reset.style('height', '30px');
            this.reset.style('background', 'lightpink');

            fill("white");
            textSize(20);
            text("*Press Reset button && Refresh Your Page to start again, no need to change database",100,450);

            this.reset.mousePressed(() => {
                player.updateCount(0);
                game.update(0);
                //Player.updatePlayerInfo(null);
                allPlayers.player1.distance = 0;
                allPlayers.player1.name = "";
                allPlayers.player1.score  = 0;

                allPlayers.player2.distance = 0;
                allPlayers.player2.name = "";
                allPlayers.player2.score  = 0;


                //form.display();
                //this.reset.hide();
            });

           }else{
            textSize(25);
            fill("white");
            text(allPlayers.player1.name + " : " + allPlayers.player1.score,50,50);
            text(allPlayers.player2.name + " : " + allPlayers.player2.score, 50, 100); 
            if(index === player.index){
               fill("black");
               textSize(25);
               text(allPlayers[plr].name ,x-25,y+25);
                }
           }
       }//for loop ends
            
        if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
            player.distance -= 10
            player.update();
        }
        if (keyIsDown(LEFT_ARROW) && player.index !== null) {
            player.distance += 10
            player.update();
        }

         if (frameCount % 25 === 0) {
             fruits = createSprite(random(100, 1000-100), -10, 120, 120);
             fruits.velocityY = 6;
             var rand = Math.round(random(1,5));
             switch(rand){
                 case 1: fruits.addImage("fruit1",fruit1_img);
                 break;
                 case 2: fruits.addImage("fruit1", fruit2_img);
                 break;
                 case 3: fruits.addImage("fruit1", fruit3_img);
                 break;
                 case 4: fruits.addImage("fruit1", fruit4_img);
                 break;
                 case 5: fruits.addImage("fruit1", fruit5_img);
                 break;
             }
             fruitGroup.add(fruits);
             
         }
         
          if (player.index !== null) {
              for (var j = 0; j < fruitGroup.length; j++) {
                  if (fruitGroup.get(j).isTouching(players)) {
                      fruitGroup.get(j).destroy();
                      player.score =player.score+1;
                      player.update();
                 }        
         }
}           
     }

    end(){
      //console.log("Game Over");
      score = 10;
      fill("white");
      textSize(60);      
      text("Game Over",width/2-200,height/2-250);
      fruits.destroy();
      fruitGroup.remove(fruits);
      player.update();

      
      //this.reset.style('text-size','20');

     
    }
}
