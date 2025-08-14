 
 //problem 03     
 function  bestTeam( player1, player2 ) {
          // You have to write your code here
          if(typeof player1 !=="object" || typeof player2 !=="object"){
            return "Invalid"
          }
          
          let firstTeam=player1.foul+player1.cardY+player1.cardR;
          let secondTeam=player2.foul+player2.cardY+player2.cardR;

          if(firstTeam<secondTeam){
            return player1.name;
          }
          else if(firstTeam>secondTeam){
            return player2.name;
          }
          else{
            return "Tie";
          }       
    }


const khe=bestTeam("France",{ name: "Germany", foul: 10, cardY: 1, cardR: 1 })
console.log(khe);