//Loop
const diamond = function(length,sgn){
  
   if(length % 2 === 0){
    length = length-1;
 }
  
 const sign = function(n,type){
   let x = '';
  for(let i = 0; i < n; i++){
     x = x + type;
   }
   return x;
 }
 let spaces = (length-1)/2;
 let stars = 1;
 for(let i = 1; i <= length; i++){
 console.log(sign(spaces, " ") + sign(stars,sgn));
   if(i <= length/2){
    spaces = spaces - 1;
    stars = stars + 2
   }
   else{
    spaces = spaces + 1;
    stars = stars-2
   }
 }
}
diamond(5,"@"); */


//Recursion
var switching = false;


const stars = function (n, type) {
	if (n===0) {
		return "";
	}

	return type + stars(n-1, type); 
};

const spaces = function(n) {
	if (n===0) {
		return "";
	}

	return " " + spaces(n-1); 
};

const diamond = function(mLength,type){
  if(mLength %2 ===0){
    mLength=mLength+1;
  }
const StarsandSpaces = function(number,star,type,space){
	if(number===0){
		return "";
	}
	console.log(spaces(space)+stars(star,type));
	if (space !== 0 && switching === false) {
		StarsandSpaces(number-1,star+2,type,space-1);
	}
	else if (space === 0 || switching === true) {
	  switching = true;
		StarsandSpaces(number-1,star-2,type,space+1);
	}
};

	StarsandSpaces(mLength,1,type,(mLength-1)/2);
};
diamond(9,"@");  */











