// Jobtwo
/// @title Job Two = Jobtwo
// - A simple program written in Javascript that sets the Document Ready event of the jQuery Core library
// Copyright (c) 2017 - 2018 Robert Weber FBO jQuery Lessons Project
// C=> https://rwebaz.github.io/jQuery-Lessons-Project/pages/jQuery-Mobile.html

"use strict";
// As of ES7 the Global use of the strict string pragma is recommended

// Set the Document Ready event
var jobTwo = $(document).ready;

// Construct the Document Ready event function
jobTwo(function(){
  // Wait for the "Mobile Init" event message from the Html parser
  $('#peek').html('Hello there! The Mobile Init event is not needed to fire for Page Two. Therefore, the script mobile-init has been disabled ... ☞');
  // Wait for the "DOM is complete" message from the Html parser
  $('#poo').html('However, to render this text, we still have to wait for the "DOM is complete" message from the Document Ready event. Therefore, the script job-two is still enabled. Result: The Html has been parsed, the DOM has been rendered, and we can now go to work ... ☞');
});
