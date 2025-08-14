

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
const result=resultReport(100);
console.log(result);

