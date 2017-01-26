//Made By: Jaspreet Kaur
//Getting Command Line values
let var1 = Number(process.argv[2])
let var2 = Number(process.argv[3])
//Find the Sum
let sum = var1 + var2
let output
if( sum > 10 && sum < 100){
     output=`sum=${sum} is greater than 10 but less than 100`
}
else if( sum > 100 && sum < 1000){
    output=`sum=${sum} is greater than 100 but less than 1000`
}
console.log(output)