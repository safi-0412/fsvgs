// const pupils = [ "Sitora", "Gulzoda" , "Safina " , "Mahmmud" , "Azizbek"]
// for (const element of pupils) {
//     if(element.includes ("o")){
//         console.log(element);
//     }else {
//         console.log(`The name ${element} does not contain the letter 'o'.`);
//     }
// }


// const botlar = [
//     {
//         ism: "Safina",
//         yosh: 13,
//         tugilgan_yiliga: 20011,
//     }
// ]

// const username = +prompt("enter your brirthday")
// const age = +prompt("enter your age")
// botlar.forEach(chirgan => {
//     if(username === chirgan.yosh && username === chirgan.tugilgan_yiliga){
//         console.log(chirgan.ism);
        
//     }
// })


const words = ['non', 'banana', 'mashina', 'asal', 'olma', 'aziza', 'gul'];

const containsN = [];
const doesNotContainN = [];

words.forEach(word => {
  if (word.includes('n')) {
    containsN.push(word);
  } else {
    doesNotContainN.push(word);
  }
});

console.log(containsN, "'n' harfi ishtirok etgan so'zlar");
console.log(doesNotContainN, "'n' harfi ishtirok etmagan so'zlar");
