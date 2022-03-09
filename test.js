// 1. Why does React utilize the virtual-dom?

// React uses the virtual dom because everything is taken as an object and each state that occurs and changes gets
//compared to the prior change, allowing changes to be done dynamically and only to the specific parts that were
// changed, allowing it to be faster as well.

//2. How is data flowed in React? 2b. Why is React architected this way?

// Data is flowed in React downwards, starting from the top components and flowing down but never going back up.

//the reason for this is that data would go one direction making the application faster, making it more easier for the developer

//3. What is the purpose for lifting state up in React? Give an example of this

//The purpose of lifting state up in React is to allow the components sharing the necessary data since children components can not share data with each other, only their parent components, hence "lifting state up" because you're lifting it up to the higher component. An example of this is say, you have two children components that need the same data. you can't share the data between them so you put the state thats holding the data in a parent component so that they both can utilize the same data.

// 4. Why would a startup be interested in applying React-Router to a project? Explain in detail.

//A startup would be interested in applying React-Router to a project because it gives the user the ability to make multiple pages without refreshing and needing a backend, allowing it to be done easily within the frontend.This in turn makes React Router excellent to implement into a beginning startup page without the hassle of handling a backend and maintaining it, allowing it be ready to deployed and set without any hassle.

// 5. Can browsers read JSX? Why?

//Browsers can't read JSX because they aren't built to handle it since they usually read static pages, JSX  needs to be translated for the browser to understand what it holds and then given the translation for them to complete the necessary action that JSX required them to do

// 6. What is the significance of keys in React?

// The significant of keys in React is to give the items of whatever you're mapping. a unique ID identifier that represents and separates each item from one another in order to differentiate what item was added or removed.

// 7. What is the difference between Props and State?

//The difference between props and state is that state is usually holding information and can be changed dynamically while props is usually pass down within components.

// 8. Examine the code below: In relation to React, explain what is occurring, and why it’s significant.

// Babel Input: ES2015 arrow function

// [1, 2, 3].map( n => n + 1 )

// Babel Output: ES5 equivalent
// [1,2,3].map(function(n) {
// return n + 1;
// })

//Essentailly, both of the functions are doing the same thing but are different versions. Both functions are mapping throughout each item withing the array [1,2,3] and are passing it through a function that takes a paramenter of n and adds 1 to n. This is significant because it makes it easy to increment each item within the array without having to do it individually which would be difficult if the items within the array were in the triple digits.

// 9. Given the array of strings: names, return a new array with each name properly capitalized. Must use .map()
const names = ["james", "joseph", "diamond", "gillian"];
function properNames(names) {
  names.map((name) => name.toUpperCase());
}

// function properNames(names) {
//   return names.map(name =>
//      name.charAt(0).toUpperCase() + name.substr(1).toLowerCase());
//  }

// 10. Create an array of strings, return a new array that only includes those that are 6 characters or fewer in length. Must use .filter()
function smallWordsOnly(arr) {
  return arr.filter((x) => x.length < 6);
}
