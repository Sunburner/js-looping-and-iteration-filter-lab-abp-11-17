// Code your solution in this file
function findMatching(drivers, name) {
  let matchingDrivers = drivers.filet(function(driver)) {
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
