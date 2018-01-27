// ReadyjQuery
/// @title Ready jQuery = ReadyjQuery
// - A simple program written in Javascript that utilizes the jQuery library
// Copyright (c) 2017 - 2018 Robert Weber FBO jQuery Lessons Project
// C=> https://rwebaz.github.io/jQuery-Lessons-Project/pages/Ready-jQuery.html

"use strict";
// As of ES7 the Global use of the strict string pragma is recommended

// Import the jQuery library
// Shd be automatic from corresponding Html page
// require("jquery");

// Set the global variable
var Medmj = jQuery.noConflict();
// Construct the function
Medmj(function() {
  console.log("That's a lot of steps eliminated!")
});
// Wait for the "DOM is complete" message from the Html parser
