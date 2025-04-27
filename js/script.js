// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function selects a random number depending on the user's choice.
 */
function checkForDiscount() {
  const age = parseInt(document.getElementById("age").value);
  const dayOfWeek = document.getElementById("day-of-week").value;
  let resultMessage = "";

  if (isNaN(age) || !dayOfWeek) {
    resultMessage = "Please enter a valid age and select a day of the week.";

  } else if ((age >= 12 && age <= 21) && (dayOfWeek === "TUE" || dayOfWeek === "THU")) {
    resultMessage = "You are eligible for a student discount!";

  } else if ((age >= 65) && (dayOfWeek === "TUE" || dayOfWeek === "THU")) {
    resultMessage = "You are eligible for an elderly discount!";

  } else if (dayOfWeek === "SAT" || dayOfWeek === "SUN") {
    resultMessage = "You are eligible for a weekend discount!";

  } else {
    resultMessage = "Sorry, you are not eligible for a discount.";
  }

  document.getElementById("result").innerText = resultMessage;
}