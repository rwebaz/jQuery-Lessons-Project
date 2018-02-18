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
// var job;
// job = $(document).ready;
// Construct the function
(function($){
  // Wait for the "DOM is complete" message from the Html parser
  window.console.log('The Html has been parsed ➡️ The DOM has been rendered ➡️ We can now go to work.');
  $('a').attr({
    id: function(index, oldValue){
      return 'flexbox-' + index;
    },
    href: 'https://rwebaz.github.io',
    title: function(){
      return 'Click to Visit the ' + $(this).text() + ' page of the Flexbox Lessons Project at GitHub Pages';
    },
    rel: 'external',
    target: '_blank'
  })
  $('a').mouseover(function(){
    alert(this.id);
  });
})($);
