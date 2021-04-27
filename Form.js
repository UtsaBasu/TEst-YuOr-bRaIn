class Form{
    constructor(){
    this.input=createInput("Name");
    this.button = createButton("PLAY");
    this.greet = createElement('h3');
    }

    display(){
        var title = createElement('h2');
        title.html("Uncommon Sense Challenge");
        title.position(100,80);
       
        this.input.position(150,200);
        
        this.button.position(210,270);

     
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount=playerCount+1;
            player.update();
            player.updateCount(playerCount);
            this.greet.html("Hello "+ player.name);
            this.greet.position(535,250);

        });

    }
    hide (){
        this.greet.hide();
        this.input.hide();
        this.button.hide();
    }
}
