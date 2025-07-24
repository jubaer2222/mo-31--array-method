// 1. forEach()
// 👉 প্রতিটি উপাদানের উপর লুপ চালায়।

let arr = [1, 2, 3];
arr.forEach((item) => {
  console.log(item);
});


//  2. map()
// 👉 প্রতিটি উপাদানে কাজ করে এবং নতুন অ্যারে রিটার্ন করে।
let arr2 = [1, 2, 3];
let result = arr2.map(x => x * 2);  
console.log(result);

// 3. filter()
// 👉 শর্ত অনুযায়ী কিছু উপাদান বেছে নেয়।

let arr3 = [1, 2, 3, 4];
let even = arr3.filter(x => x % 2 === 0); 
console.log(even);


//4. find()
// 👉 প্রথম যেই উপাদান শর্ত মেটায়, সেটি রিটার্ন করে।

let arr4 = [5, 12, 8];
let found = arr4.find(x => x > 10); 
console.log(found);


let arr5 = [5, 12, 8];
let found1 = arr5.find(x => x > 10); 
console.log(found1);
