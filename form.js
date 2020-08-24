class Form{
    constructor(){
       this.input = createInput("").attribute("placeholder", "Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.greeting2 = createElement('h2');
       this.title = createElement('h1');
       this.wait = createElement('h2');
       this.waitRoom = createElement('h2');
       this.error = createElement('h2');
       this.link = createA("https://console.firebase.google.com/u/0/project/fruit-catcher-2d170/database/fruit-catcher-2d170/data",
       'Press here to see the database.','blank');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.wait.hide();
        this.waitRoom.hide();
        this.greeting2.hide();
    }
    
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(360, 10);
        this.title.style('font-size', '70px');
        this.title.style('color', '	#FFFF00');

        this.input.position(560,230);
        this.input.style('width', '180px');
        this.input.style('height', '30px');
        this.input.style('background', 'white');

        this.button.position(587.5,330);
        this.button.style('width', '140px');
        this.button.style('height', '40px');
        this.button.style('background', 'LightSeaGreen');
        this.button.style('font-size','30px');
         
        this.link.position(500,580);
        this.link.style('font-size','30px');
        this.link.style('color','blue');
 
        this.button.mousePressed(() => {

            var v = this.input.value();

            if(v === ""){
                this.error.html("Pls enter Your Name to start!!");
                this.error.position(545,175);
                this.error.style('color', 'red');
                this.error.style('font-size', '20px');
            }else{
            this.input.hide();
            this.button.hide();
            this.error.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(530,170);
            this.greeting.style('color', '#DAA520');
            this.greeting.style('font-size', '55px');

            this.greeting2.html("Welcome to Fruit Catcher");
            this.greeting2.position(350,240);
            this.greeting2.style('color', '#DAA520');
            this.greeting2.style('font-size', '55px');

        
        this.wait.html("Dear " + player.name +", Pls Wait for the 2nd Player to enter....");
        this.wait.position(300,420);
        this.wait.style('color', '	#FFA500');
        this.wait.style('font-size', '40px');

        this.waitRoom.html("Waiting Room...");
        this.waitRoom.position(1000,570);
        this.waitRoom.style('color', 'black');
        this.waitRoom.style('font-size', '20px');
            }
        });
        
    }     
}