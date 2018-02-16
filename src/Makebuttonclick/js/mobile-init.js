// Mobileinit
/// @title Mobile Init = Mobileinit
// - A simple program written in Javascript that sets the Mobile Init event for jQuery Mobile
// Copyright (c) 2017 - 2018 Robert Weber FBO jQuery Lessons Project
// C=> https://rwebaz.github.io/jQuery-Lessons-Project/pages/jQuery-Mobile.html

"use strict";
// As of ES7 the Global use of the strict string pragma is recommended

// Set the Mobile Init event BEFORE the Document Ready event
// var minit = $(document).on;

// Construct the Mobile Init event code block
$(document).on("mobileinit", function(){
  $.extend( $.mobile, { pageLoadErrorMessage: 'Either the page cannot be found, or the page cannot be loaded.' } );
});

// Construct the Page Init event code block
$(document).on("pageinit", "#page-two", function(){
  alert("pageinit is bound ...");
});
