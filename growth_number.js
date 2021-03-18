var list=[999, 10, 3, 436, 5, 120, 10000, 105, 9];
var newList = [];
// 작은수 >> 큰수
let num = 0;
let lengthlist = list.length;

function min(){
    var i=0;
    for(;;){
        var statue = false;
        
        if(list[i]==null){
            i=0;
        }
        
        for(j=0; j<list.length; j++){
            if(i==j){
                continue;
            }

            if(list[i]<list[j]){
                statue = true;
            }

            console.log(list[i], list[j]);
            console.log(statue);
            console.log(num);
        }

        if(statue==false){
            newList.unshift(list[i]);
            list.splice(i,1);
        }

        num++;

        if(newList.length==lengthlist){
            break;
        }
        i++;
    }

    return newList;
}

console.log(min());




//두번째 반만 성공한 로직
// function min(){
//     for(i=0; i<list.length; i++){
//         var statue = false;
//         for(j=0; j<list.length; j++){
//             if(i==j){
//                 continue;
//             }

//             if(list[i]<list[j]){
//                 statue = true;
//             }

//             console.log(list[i], list[j]);
//             console.log(statue);
//         }

//         if(statue==false){
//             newList.unshift(list[i]);  
//             list.splice(i,1);    
//         }
//     }
//     return newList;
// }

// console.log(min());



// 처음 로직
// function min(){
//    // list[0]>list[1] ? list[0]>list[2]? ...
//     for(i=0; i<list.length; i++){
//         let status=false;
//         for(j=0; j<list.length; j++){
//             console.log(newList);
//             if(list[i]<list[j]){
//                 status=true;
//                 continue;
//             }

//             console.log('statue :'+status+' list[i] :'+list[i]);
//             if(j+1===list.length && status===false){
//                 newList.unshift(list[i]);
//                 list.splice(i, 1);
//                 continue;
//             }

//             if(status===true){
//                 trueList.push(list[i]);
//                 continue;
//             }
//             console.log('trueList : ' ,trueList);
//         }
//     }
//     return newList;     
// }
// console.log(min());



