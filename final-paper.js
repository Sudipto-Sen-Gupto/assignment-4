
function totalFine(fare) {

        if(typeof fare !=="number" || fare<=0){
            return "Invalid";
        }
        let number=fare+(fare*20/100)+30;
        return number;
     }

 
 function  onlyCharacter(str) {
          if(typeof str !=="string"){
            return "Invalid";
          }

          let newStr="";
          for(const item of str){
            if(!item.includes(" ")) {
                 newStr+=item;
            }
           
          }
          const finalStr=newStr.toUpperCase();
          return  finalStr;       
     }    

    
 function  bestTeam( player1, player2 ) {

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

 
 function  isSame(arr1 , arr2 ) {
         if(!Array.isArray(arr1)||!Array.isArray(arr2)){
            return "Invalid";
         }
          if(arr1.length !==arr2.length){
            return false;
          }
          
         for(let i=0;i<arr1.length;i++ ){
            if(arr1[i]!==arr2[i]){
                return false;
            }
            else if(typeof arr1[i]!=="number" ||typeof arr2[i]!=="number"){
                return false;
            }
             }
            
             return true;       
     }   
 

function  resultReport(marks) {
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