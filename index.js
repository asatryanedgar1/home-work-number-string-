
// 1.
// Print all number between 1 and 10.
// Print all number between 1 and 10 except 6.
// Print all even number between 1 and 10.
// Calculate sum of all numbers between 1 and 10 (using loop).
// Calculate sum of all numbers between 1 and 10 except 8.
// Calculate sum of all odd numbers between 1 and 10.
// Calculate sum of squares of all numbers between 1 and 10.


for(let i = 1; i < 11; i++){
	console.log(i);
}

// for(let i = 1; i < 11; i++){
// 	if (i == 6) { continue; }
// 	console.log(i);
// }

// for(let i = 1; i < 11; i++){
// 	if(i % 2 == 0){
// 		console.log(i);
// 	}
// }

// let sum = 0;
// for(let i = 1; i < 11; i++){
// 	sum += i ;

// }                    
// console.log(sum);

// let sum = 0;
// for(let i = 1; i < 11; i++){
// 	if (i == 8) { continue; }
// 	sum += i ;
// }
// console.log(sum);

//    let sum = 0;
//    for(let i = 1; i < 11; i++){
// 	if(i % 2 !== 0){
// 		sum += i;
// 	}
// }
//     console.log(sum);


// let sum = 1;
//    for(let i = 1; i < 11; i++){
// 	sum += i ** 2;
// }
//     console.log(sum);



// ----------------------------------------------


// 2.
// Insert a digit and a number. Check whether the digits contains in the number or not.(don`t use string)

// function jogox(y,x){
// 	var count=0;
// for(let i=1;i<x; i=i*10){
// 	if(y==((x-(x%i))%(i*10))/i){                     
// 		count++
// 		console.log('ayo');
// 		return
// 	}
//    }
//    if(count==0){
//    	console.log('chka');
//    }
//   }
//   jogox(1,111104568);



   // ---------------------------------

// 3// Enter a number. Reverse its first and last digits. Print the new number.


// function reversik(x){
// 	let a;
// 	let sum='';
// 	for(let i=1;i<=x; i=i*10){
// 		a=((x-(x%i))%(i*10))/i;
// 		sum+=a;
// 	}
// 	console.log(sum);
// }
// reversik(804);


// -----------------------------------
//4 Enter a number. Find the difference between its biggest and smallest digits



// function reversik(x){
// 	let a;
// 	let max=-Infinity;
// 	let min=Infinity;
// 	for(let i=1;i<=x; i=i*10){
// 		a=((x-(x%i))%(i*10))/i;
// 		if(a>max){
// 			max=a
// 		}
// 		if(a<min){
// 			min=a
// 		}
		
// 	}
// 	console.log(max-min);
	
// }
// reversik(45904);

// -------------------------------------
// 5
// Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.


// function parz(x){
// 	let count=0
// 	for(let i=2 ; i<x ; i++){
// 		if(x%i==0){
// 			count++
// 			console.log('parz chi');
// 			return
// 		}
// 	}
// 	if(x>2 && count==0){
// 		console.log('parz a')
// }
// }
// parz(19);
     
// var i = 0 ;
// 	var j = 1 ;
// 	var sum = "";

// -----------------------------



// Given a number n ( n > 0 ). Print Fibonacci series up to n.


// var i=0;
// var j=1;
// var count=0;
// function pow(n) {
	
//     if(count==0){
//     	console.log(i);
//     	console.log(j);
//     	count++
//     }							
// 	i=i+j;
// 	j=i+j;
// 	if(i<=n){
// 	console.log(i);
// 	}
// 	else{
// 		return
// 	}
// 	if(j<=n){
// 	console.log(j);
// 	}
// 	else{
// 		return
// 	}
// 	return pow(n);
// }
// 	pow(78);


// _________________________


// 7 Write a recursive function to determine whether all digits of the number are odd or not.
    

//     function jogox(x){
// 	var count=0;
// for(let i=1;i<x; i=i*10){
// 	if(((x-(x%i))%(i*10))/i%2==0){                     
// 		count++
// 		console.log('che');
// 		return
// 	}
//    }
//    if(count==0){
//    	console.log('ayo');
//    }
//   }
//   jogox(7755321199);

// ----------------------


// 8 Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string․ If there are several words which are the longest ones, print the last word(words can be separated by space, comma or hyphen).

// function erkar(n){
// 	var bar='';
// 	var max='';
// 	for(var i=0;i<n.length;i++){
// 		if(n[i]!=' '){
// 			bar+=n[i];
// 			if(bar.length>=max.length){
// 			max=bar;
// 			}
			
// 		}
// 			else{
// 				bar=''
// 			}
		
// 		}
// 		console.log(max);
		
// 	}
	

// erkar('armenf andraa kakrazz ')



// 9 Write a function to find longest substring in a given a string without repeating characters except space character. 
// If there are several, return the last one. Consider that all letters are lowercase.



// pahanjy chhaskaca Gev jan te hnaravora bacatri incha uzum pordzem lucem



// 10 Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the number is even. The numbers obtained should be printed in a comma-separated sequence on a single line.

// var i;
// var j;
// count1=0;
// count2=0;
// var sum1="";
// var sum2="";
// var nish;
// function jogox(y,x){
// 		for(i=y;i<=x;i++){
// 			count1=0;
// 			count2=0;
// 			for(j=1;j<=i;j=j*10){
// 				count1++
// 				if(((i-(i%j))%(j*10))/j%2==0){
// 					count2=count2+3;					
// 			}
// 		}		
// 		if(count2/count1==3){
// 						console.log(i);
// 					}
// 	}
// }

// jogox(19,42)












 









  		