// bugun xamma videolarni qaytarayapman .
// true // false
// =    //=
// 1    // 0
// console.log(true < false);
// console.log(true > false);
// console.log(false > true);
// console.log(false > true);
// 's'    // ''
// =      // =
// true   // false
// console.log('s' > 3);
// console.log('s' < 3);
// console.log(3 > 's');
// console.log(3 < 's');
/* Agar biz ikkita hariflarni solishtirsag java script biz bergan xariflarni
songa o'zgartiradi xamda , agar biz misol uchun : 
console.log('d' > 'c'); => desak true=>booleanini qaytaradi .
chunki 'b'''
*/
////////////
// const removeChar = str => {
//     let newStr = ''
//     for (let i = 0; i < str.length; i++) {
//         if (i !== 0 && i !== str.length - 1) {
//             newStr += str[i]
//         }
//     }
//     return newStr
// }
// console.log(removeChar());
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// Bugungi o'rgangan xolatlarimlarim:
//////////////////// 
// let str = prompt('Enter your age')
// if (age > 5) {
//     console.log('too early');
// } else {
//     console.log('go to sleap');
// }
///// bu yerda agar bergap sonimiz 5-dan katta bo'lsa 'too early' , agar kichkina bo'lsa 'go too sleep'
///// va xuddi shuni bu bilan xam yozsag bo'ladi
// age > 12 ? console.log('a little bit left') : console.log('too early');
// bu bugungi (07.11.2022) mavzuda o'tildi .
//// buni ko'pincha ozroq xolatlarga ishlatiladi chunki agar ko'p xolat yozilganda odomni chalkashtirib yuboradi misol uchun :
// age > 12 ? console.log('a little bit left') : age == 16 ? console.log('not bead ') : age > 21 ? console.log('happy wedding day to you') : age > 30 ? console.log('lorem dolor') : console.log('im so sorry');
//// menimcha bu yerda biroz chalkashroq chuki : hammasi yonma-yon , ikki nuqta va juda ko'p foydalanilgan so'roq belgilari sababchi va  .

// const age = 19
// if (age < 14) {
//     console.log('too early');
// } else if (age > 14) {
//     console.log("not welcome");
// } else if (age > 16) {
//     console.log('welcome');
// } else {
//     console.log('go too sleep');
// }
//// bu "if" va "else" da qilingan xodisa. 
//
// age < 14 ? console.log('too early') : age > 14 ? console.log('not welcome') == false : age > 16 ? console.log('welcome') : console.log('go too sleep');
//// bu esa turneryda qilingan xodisa .
///// bular ikkalasi bir xil : lekin bularning farqi tushunarliligida . menimcha "if" va "else"-da qilingani tushunarligoq