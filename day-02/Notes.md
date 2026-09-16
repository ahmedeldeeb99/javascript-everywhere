# The difference between const and let, and why const still lets you push into an array
the difference between const and let is that const is a constant variable that doesn't accept changing the value or reassign it, while let accepts reassigning and changing the value ... but const accepts changes in values inside the variable like array or oject or array of objects

# All 7 primitive types, one line each
string : the thing or text in between "" or '' or ``
number : any number like 89 or decimel like 89.37
bigint : enormous number like 9089n
boolean : true or false
undefined : the variable is existed but we didn't define it or add a value
null : the value is empty
symbol : it's a unique value which is used in specific or unique cases

# Why typeof null returns "object", and how to check for null properly
typeof null equals object as it was an old mistake while designing the language, and they didn't fix it to not break a main code in the language
to check for null properly we use ("" === null)

# The 8 falsy values, written from memory
0, 0n, false, undefined, null, NaN, ""

# === vs ==, with one example where == causes a real bug
=== compares value and type
== comares value only and converts the type before comparing
may be it causes a real bug in passwords when it's supposed to be a string, but == converts a number in the password that is string into number

# When to use ?? instead of ||
we use ?? to check if we have a value or the value is null or undefined then don't take the other value, while || if our value was false then it's going to take the other value

# When to use each of the five loops — one sentence each
for loop : when we know the number of elements or the length
while : when we don't know the number or the length
do while : when we want to run the loop at least one time even if the condition is false
for of : we use it when dealing with array
for in : we use it when dealing with object or dealing with the keys and its values

# The difference between break and continue
break : when we reach the condition or a specific element, it stops the entire loop
continue : when we reach the same it just ignores it or skips it and move to the next one

# One bug I hit today, the exact error message, and how I fixed it
while I was solving this example, many times infinite loop happened.
I changed the arranging, but it doesn't work but it was saving the result

let num = 100
while (num >= 1) {
    console.log(num)
    num /= 2
}

the first error was :
let num = 100;
while (num >= 1) {
    num / 2; // this calculates but doesn't save the value, so it caused the infinite loop
    console.log(num);
}

one error also was : 
ReferenceError: Cannot access 'score' before initialization
as I called the variable score above its initialization