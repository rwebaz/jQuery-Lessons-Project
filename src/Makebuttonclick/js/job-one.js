// Jobone
/// @title Job One = Jobone
// - A simple program written in Javascript that sets the Document Ready event of the jQuery Core library
// Copyright (c) 2017 - 2018 Robert Weber FBO jQuery Lessons Project
// C=> https://rwebaz.github.io/jQuery-Lessons-Project/pages/jQuery-Mobile.html

"use strict";
// As of ES7 the Global use of the strict string pragma is recommended

// Set the Document Ready event
var jobOne = $(document).ready;

// Construct the Document Ready event function
jobOne(function(){
  // Wait for the "Mobile Init" event message from the Html parser
  $('#peek').html('Hello there! The Mobile Init event is complete ... ☞');
  // Wait for the "DOM is complete" message from the Html parser
  $('#poo').html('The Html has been parsed, the DOM has been rendered, and we can now go to work ... ☞');
});
