// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function(driver){
    if(name.tolowercase() === driver) {
      return true
    }
    else {
      return false
    }
  })


return matchingDrivers;
}