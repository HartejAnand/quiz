class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }


  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background(100,100,255);
    //write code to show a heading for showing the result of Quiz
    //var results=createElement('h2');
    //results.html("  RESULTS");
    textSize(40);
    fill(255,155,0);
    text("results",250,300);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo( );
    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      fill(255,0,255);
      textSize(30);
    }
    var display_position=320;
    //write code to add a note here
          text("correct answers in green",130,230);
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correct ="2";
      if(correct===allContestants[plr].answer){
        fill(0,255,0);
        console.log("green");
      }
      else if(correct!==allContestants[plr].answer){
        fill(255,0,0);
        console.log("red");
      }
      display_position+=30;
        text(allContestants[plr].name+" ↣ "+allContestants[plr].answer,50,display_position);
        //text("testing",250,display_position);
      
    }
  }

}
