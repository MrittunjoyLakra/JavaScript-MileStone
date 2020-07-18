function feetToMile(feet){
    var mile = feet/5280;
    return mile;


}
var twinTowerMile = feetToMile(1368);
console.log(twinTowerMile);


function woodCalculator(chair, table, bed){
    var chair = chair *1;
    var table = table *3;
    var bed = bed *5;
    var total = chair + table + bed;
    return total;
}
var result = woodCalculator(2,2,2);
console.log(result);


function tinyFriend(name){
    var smallest = name[0];
    for(var i =0; i < name.length; i++){
        var currentname = name[i];
        if(currentname < smallest){
            smallest = currentname;
        }
    }
    return smallest;
}
 var smallest = tinyFriend(['Shovon', 'Polash', 'John']);
 console.log(smallest);
