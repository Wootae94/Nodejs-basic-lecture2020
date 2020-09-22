    /* a + b + c = 1000 인 피타고라스 수를 구하시오. */
    let power = x => { return x*x }
   for(let c=1; c<1000;c++){
       for(let b=1; b<c; b++){
           for(let a=1; a<b; a++){
               if(a + b > c){
                   if(power(a) + power(b) === power(c)){
                       if(a+b+c===1000){
                           console.log(a,b,c);
                       }
                } 
            }
        }
    }
   } 
    
    