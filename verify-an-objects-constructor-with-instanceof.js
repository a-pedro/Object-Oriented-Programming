function House(numBedrooms) {
  this.numBedrooms = numBedrooms;

}
let myHouse = new House(5);
myHouse instanceof House;
console.log(myHouse);
// Only change code below this line