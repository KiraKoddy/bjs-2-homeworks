"use strict";

function solveEquation(a, b, c) {
  let arr;

  // код для задачи №1 писать здесь

  arr = [];
  let d = (b**2-4*a*c);
  if (d > 0){
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  } 
  if (d === 0){
    arr.push(-b/(2*a));  
  }
  return arr; // array
}

// function calculateTotalMortgage(percent, contribution, amount, date) {
//   let totalAmount;
