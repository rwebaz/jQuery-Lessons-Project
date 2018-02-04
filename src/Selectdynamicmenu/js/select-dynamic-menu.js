// Selectdynamicmenu
/// @title Select Dynamic Menu = Selectdynamicmenu
// - A simple program written in Javascript that utilizes the jQuery library
// Copyright (c) 2017 - 2018 Robert Weber FBO jQuery Lessons Project
// C=> https://rwebaz.github.io/jQuery-Lessons-Project/pages/Select-Dynamic-Menu.html

"use strict";
// As of ES7 the Global use of the strict string pragma is recommended

import $ from "jquery";

{
  $(document).ready(function(){
    $('#peek').html("Hello there!");
  });

}


// jQuery Dynamic Select Menu

@{
// Create the dropdown base
$("<select />").appendTo("nav");

// Create default option "Go to..."
$("<option />", {
   "selected": "selected",
   "value"   : "",
   "text"    : "Go to..."
}).appendTo("nav select");

// Populate dropdown with menu items
$("nav a").each(function() {
 var el = $(this);
 $("<option />", {
     "value"   : el.attr("href"),
     "text"    : el.text()
 }).appendTo("nav select");
});
}

@{
$("nav select").change(function() {
  window.location = $(this).find("option:selected").val();
});
}


