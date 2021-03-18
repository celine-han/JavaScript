

function multiplication(){
    var i=2;
    var result = null;
    for(;;){
        for(j=1; j<10; j++){
            result = i*j;
            console.log(i,j);
            console.log(result);
        }
        i++;   
        if(i==10){
            break;
        }
    }
    
    return result;
}

console.log(multiplication());

