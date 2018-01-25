// jQuerywindow
/// @title jQuery Window = jQuerywindow
// - A simple program written in Javascript that ...
// Copyright (c) 2013 - 2018 Robert Weber FBO jQuery Lessons Project
// C=> https://rwebaz.github.io/jQuery-Lessons-Project/pages/jQuery-Window.html

"use strict";
// As of ES7 the Global use of the strict string pragma is recommended

var $ = require("jquery");

$(window).load(function(){
  console.log('The page is now fully loaded. The Html has been parsed. The DOM has been rendered. All of the assets of the page have been uploaded to the browser.');
});
