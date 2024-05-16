// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
// function resultReverse() {
//   for (let i = companyName.length - 1; i >= 0; i--) {
//     reversedCompanyName += companyName[i];
//   }
//   console.log(reversedCompanyName);
// }
// resultReverse(companyName);

// for (let reverse of companyName) {
//   reversedCompanyName = reverse + reversedCompanyName;
// }
// console.log(reversedCompanyName);

for (let i = companyName.length - 1; i >= 0; i--) {
  reversedCompanyName += companyName[i];
}
console.log(reversedCompanyName);
