
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
          return newStr.toUpperCase();        
     }

const result=onlyCharacter("Serv er : : Do wn")
console.log(result);
