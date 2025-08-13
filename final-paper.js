//problem 01
function totalFine( fare ) {
        // You have to write your code here
        if(typeof fare !=="number" || fare<=0){
            return "Invalid";
        }
        let number=fare+(fare*20/100)+30;
        return number;
     }

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
            return "tie";
          }       
    }
 
//problem 05
function  resultReport( marks ) {
          // You have to write your code here
          if(!Array.isArray(marks)===true){
            return "Invalid";
          }
          let passCount=0;
          let failCount=0;
          let sum=0;
          let average;
          
          for(const item of marks){
            sum +=item;
            if(item>=40){
                passCount++;
            }
            else{
                failCount++;
            }
          }
          average=Math.round(sum/marks.length);
          if(Number.isNaN(average)){
          return {finalScore:0,pass:passCount,fail:failCount};
          }
          else{
                 return {finalScore:average,pass:passCount,fail:failCount};
          }
   }