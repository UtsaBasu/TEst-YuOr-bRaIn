var game;
var gameState=0;
var playerCount;
var player , form;
var allPlayers;



function setup(){
  createCanvas(850,600);
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game = new Game();
  game.getState();
  game.start();
  
  
  }
  function draw(){
  background("orange");
  
    if(playerCount===4){
   game.update(1);
 }
 if(gameState===1){
   game.play();


  }
  function playing(){
 

  Hello=createElement("h1")
  Hello.html("Hey! "+input.value() )
  Hello.position(425,10)

  head=createElement("h1")
  head.html("Let`s see if you can answer these ")
  head.position(300,50)

  ques=createElement("h1")
  ques.html("Questions ")
  ques.position(425,100)

  stat=createElement("h2")
  stat.html("Q1) What can always be cought but never thrown?")
  stat.position(50,200)

  op=createElement("h2")
  op.html("a) tennis ball ")
  op.position(50,250)

  op2=createElement("h2")
  op2.html("b) cupcake")
  op2.position(50,300)

  op3=createElement("h2")
  op3.html("c) cold")
  op3.position(50,350)

  op4=createElement("h2")
  op4.html("d) water")
  op4.position(50,400)

  bp=createButton("SUBMIT")
  bp.position(100,550)
  bp.mousePressed(play2)

  output=createInput().attribute("placeholder", "Enter the correct option")
  output.position(400,550)

  if(allContestants!== undefined){
    fill("yellow");
    textSize(24);
    text("NOTE: ALL THE RIGHT ANSWERS WILL BE IN GREEN AND WRONG IN RED",130,200);
  }
  }
  
  function play2(){
    for(var plr in allContestants ){
      var correctAnswer ="c";
      if(correctAnswer===allContestants[plr].answer)
      fill("green");
      else
      fill("red");
    
    }

  
  th=createElement("h1")
  th.html("THANK YOU FOR ATTENDING OUR QUIZ")
  th.position(50,500)
  }
  
  
}
