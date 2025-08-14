
function  onlyCharacter(str) {
          // You have to write your code here
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

const result=onlyCharacter(10)
console.log(result);
