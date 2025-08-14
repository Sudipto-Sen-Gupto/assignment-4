function totalFine( fare ) {

        if(typeof fare !=="number" || fare<=0){
            return "Invalid";
        }
        let number=fare+(fare*20/100)+30;
        return number;
     }
const fine=totalFine(50);
console.log(fine);

