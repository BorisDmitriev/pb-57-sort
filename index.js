//Sort in decreasing order
//1 
let arr = [5, 2, 1, -10, 8];

arr.sort( (a,b) => b-a );

console.log( arr );


//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
//Create a function copySorted(arr) that returns such a copy.



//2
//We can use slice() to make a copy and run the sort on it:
  
  let array = ["HTML", "JavaScript", "CSS"];

  const copySorted = arr => {
      const newArr = arr.slice(0);
      return newArr.sort( (a,b) => a<b? -1:1 );
  };
  
  let sorted = copySorted(array);
  
  console.log( sorted );
  console.log( array );
