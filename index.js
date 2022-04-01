// Code your solution here
function findMatching (driverList, name){

    return driverList.filter(element => element.toLowerCase() === name.toLowerCase())

}

function fuzzyMatch (driverList, name){
    
    return driverList.filter(element => element.startsWith(name))

}

function matchName (driverList, name){
    
    return driverList.filter(element => element.name.toLowerCase() === name.toLowerCase())

}