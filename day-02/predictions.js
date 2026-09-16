console.log("5" + 3);
console.log("5" - 3);
console.log(5 + true);
console.log("5" === 5);
console.log("5" == 5);
console.log(typeof null);
console.log(typeof []);
console.log(0 || "default");
console.log(0 ?? "default");
console.log(Boolean(""));
console.log(Boolean("false"));// it's true because it's a string value which is not empty, not a boolean so it gives true
console.log(Boolean([]));// true because javascript considers array and objects truthy values it were empty
console.log(10 % 3);
console.log(null + 1);// when we use null at a mathematical operation like (+), js converts it into (0), so it's 0 + 1
console.log(undefined + 1);