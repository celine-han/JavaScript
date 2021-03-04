var memberArray = ['songyi', 'hyunbin', 'egoing'];
console.group('array loop');
var i= 0;

while(i<memberArray.length){
    console.log(i, memberArray[i]);
    i++;
}

console.groupEnd('array loop');
var memberObject = {
    developer :'songyi',
    petitamie : 'hyunbin',
    teacher : 'egoing' 
}

console.group('object loop');
for(var name in memberObject){
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');

