// ReadyjQuery
/// @title Ready jQuery = ReadyjQuery
// - A simple program written in Javascript that utilizes the jQuery library
// Copyright (c) 2017 - 2018 Robert Weber FBO jQuery Lessons Project
// C=> https://rwebaz.github.io/jQuery-Lessons-Project/pages/Ready-jQuery.html

// Import the jQuery library
// Shd be automatic from corresponding Html page
// require("jquery");
// import from "jquery";

"use strict";
// As of ES7 the Global use of the strict string pragma is recommended
// Set the local variable
// let job = jQuery.noConflict(document).ready;
// Set the global variable
var job = $(document).ready;
// Construct the function
job(function(){
  // Wait for the "DOM is complete" message from the Html parser
  return console.log(`The Html has been parsed ➡️ The DOM has been rendered ➡️ We can now go to work.`)
});
