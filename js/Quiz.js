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
    background(0,0,155);
    //write code to show a heading for showing the result of Quiz
    var results=createElement('h2');
    results.html("  RESULTS");
    //call getContestantInfo( ) here
    contestant.js/getPlayerInfo( );

    //write condition to check if contestantInfor is not undefined
    if(allConstraints !== undefined){
      fill(255,0,255);
      textSize(30);
    }
    //write code to add a note here
          text("correct answers in green",130,230);
    //write code to highlight contest who answered correctly
    for(var plr in allConstraints){
      var correct =2;
      if(correct===allConstraints[plr].answer){
        fill(0,255,0);
      }
      else{
        fill(255,155,0);
      }
      display_position+=30;
        //text(allConstraints[plr].name,250,display_position);
        text("testing",250,display_position);
      
    }
  }

}
