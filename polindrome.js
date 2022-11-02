let string="aman"
let check=rev(string)
if(string==check){
console.log("polindrome")
}else{
 console.log("N/A")
}

function rev(str){
  let sum=""
  for(let i=0str.length-1;0<=i;i--){
	sum+=str[i]
  }
