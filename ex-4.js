// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
// for (let addArray of restaurants) {
//   addArray = "Restaurant Name: " + addArray;
//   newRestaurants.push(addArray);
// }

for (let i = 0; i < restaurants.length; i++) {
  restaurants[i] = "Restaurant Name: " + restaurants[i];
  newRestaurants.push(restaurants[i]);
}
console.log(newRestaurants);
