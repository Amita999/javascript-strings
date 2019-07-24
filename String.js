//Stings are immutable 
var str1 ="Hello Amita";
console.log(str1);
//replace 'o' with 'i'
str1[5] ="i";
console.log(str1);//no change
str1 ="Helli Worrld";
console.log(str1);//no change

//To find last character in a string
var str2 ="abuaydcudbckdnwgwecwjhcwjc";
console.log(str2);
var lastCharacter=str2.length - 1;
console.log("Last character of the string is " + lastCharacter);//25
var lastCharacter=str2[str2.length - 1];
console.log("Last character of the string is " + lastCharacter);
//To find  second last character in a string
var seclastCharacter=str2[str2.length - 2];
console.log("Second Last character of the string is " + seclastCharacter);