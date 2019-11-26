---
title: Ready jQuery
layout: default
excerpt: Confirmation must be received in the form of a message from the DOM ...
hint: Out of the box, the jQuery object provides a jQuery function represented by the dollar sign $ that accepts a single parameter for its solo argument.
repo: jQuery-Lessons-Project
ver_date: 11-20-19
navigation_weight: 8
categories: page
---
{% include toc.md %}

## First Subtitle

> **Hint**. {{ page.hint }}

More to come ...

## Window onLoad

There is no short-cut in the properties and methods of the jQuery object to replace the jQuery `$(window).load` statement with a symbol.

A comparable property of your browser is the `window.onload` method.

The `window.onload` method waits until ALL of the assets of the subject page have been loaded including all images and iframes prior to sending a *ready* message.

## Document ready

Whereas, the `$(document).ready` function and method of jQuery waits only for the browser to complete the construction of the Document Object Model, or [DOM](https://){:title='Document Object Model'}{:target='_blank'} prior to sending its *ready* message.

Therefore, the `window.onload` method of your browser may be invoked AFTER our newly proposed `job()` function.

## Job Function

For example, the following code waits for confirmation from the window Object upon total *load* ...

- Then, fires off an Anonymous Function Wrapper, or [AFW](https://){:title='Anonymous Function Wrapper'}{:target='_blank'} event handler as argument to the *load* method.

In jQuery ...

As follows,

```javascript
{% raw %}
$(window).load(function(){
  return console.log(`The page is now fully loaded. ➡️
  The Html has been parsed. ➡️
  The DOM has been rendered. ➡️
  All of the assets of the page have been uploaded to the browser. ➡️
  We can now go to work.`)
});
{% endraw %}
```

Similarly, the following code block waits for the confirmation message from the Html parser via the document Object model.

And, upon DOM *readiness* ...

- Fires off an Anonymous Function Wrapper, or [AFW](https://){:title='Anonymous Function Wrapper'}{:target='_blank'} event handler as argument to the *ready* method.

Also in jQuery ...

As follows,

```javascript
{% raw %}
$(document).ready(function(){
  return console.log(`The Html has been parsed. ➡️
  The DOM has been rendered. ➡️
  All of the assets of the page (perhaps) ... ➡️
  Are still in the process of being uploaded to the browser ... ➡️
  Depending on their weight and bandwidth. ➡️
  The page is most probably now NOT fully loaded. ➡️
  But, nevertheless ... we can go to work.`)
});
{% endraw %}
```

### Anonymous Function Wrappers

Both of the *long-cut* statements shown above and by extension the single built in jQuery *short-cut* `$()` ...

- Place an Anonymous Function Wrapper, or [AFW](https://){:title='Anonymous Function Wrapper'}{:target='_blank'} event handler next inline as an argument that fires when the respective `ready` condition is met, as follows:

```javascript
{% raw %}
job(function($){});
{% endraw %}
```

**Note**. An [AFW](https://){:title='Anonymous Function Wrapper'}{:target='_blank'} can be the parameter that fills the single set of parenthesis as argument to the `jQuery(document).ready` function and method.

As previously, under the representation of the built-in jQuery short-cut `$()` ...

And, also via our soon to *override* global `job` variable, as shown below.

## Da DOM

BEFORE an event can fire in jQuery, confirmation in the form of a message must be received from the Document Object Model, or [DOM](https://){:title='Document Object Model'}{:target='_blank'}.

### jQuery $

Out of the box, the jQuery object provides a jQuery function represented by the dollar sign `$` that accepts a single parameter for its solo argument, as follows:

```javascript
{% raw %}
$();
{% endraw %}
```

Quickly, however, we can embellish upon the out of the box jQuery function by placing the `document` parameter inside the set of parenthesis reserved for the argument of the jQuery function and by *chaining* the `ready` method of the jQuery object to the argument, as follows:

```javascript
{% raw %}
$(document).ready;
{% endraw %}
```

Here, the jQuery object is invoked to accomplish the feat of confirming the readiness of the [DOM](https://){:title='Document Object Model'}{:target='_blank'}.

The `ready` method is *chained* to the jQuery function after inserting the top-node of the DOM aka the `document` as the parameter for the solo argument taken by the jQuery function.

**Note**. The dollar sign `$` is a built-in *substitute symbol* for the term `jQuery`.

And, that *substitute symbol* can be changed programatically.

### Let There Be Brevity

A `let` statement can be used in place of the now chained `$(document).ready` function and method, as follows:

```javascript
{% raw %}
let job = jQuery.noConflict(document).ready;
{% endraw %}
```

However, the now scoped `job` variable cannot be used to call DOM elements outside of its placement after the DOM has been built by the browser.

### Collisions

*Roll Ur Own* to avoid collisions.

Isn't that an oxymoron.

But, you can ... with jQuery.

If the short-cut `$()` can be used to replace `$(document).ready`, then why not we?

First, let's set the following *global* variable and hope with a high level of confidence that no other namespace will pollute ours.

In the micro-scope of the `let` variable we should be good to go.

However, in the *global* hoisted scope of our program, we may not.

We must make the new alias `job` available throughout the many functions and methods of our program.

To allow for this *expanded* level of functionality, we will have to expose the new `job` variable to *the elements* of our entire program, as follows:

```javascript
{% raw %}
var job = jQuery.noConflict(document).ready;
{% endraw %}
```

Notice how we have had to switch from the more modern, `ES6` scoped variable keyword of `let` ...

Back to the original plain-vanilla Javascript variable aka the more *global* variable keyword of `var`.

Now, let's plug the var `job` into our jQuery object from above.

Running with the following algorithmic steps ...

1. The built-in jQuery function `$()` is transformed to `$(document).ready()`

1. The `job()` function = `jQuery.noConflict(document).ready()`

1. The parameter of the argument for the `job()` function can be an [AFW](https://){:title='Anonymous Function Wrapper'}{:target='_blank'} = `job(function(){});`

**Note**. Where `noConflict` is simply a *chained* method of the jQuery object under previous jQuery incarnations, or versions.

Yields,

```javascript
{% raw %}
job(function($){
  return console.log(`The Html has been parsed. ➡️
  The DOM has been rendered. ➡️
  We can now go to work.`)
});
{% endraw %}
```

What have we done?

In a nutshell ...

- We have replaced back to the jQuery object, the jQuery function represented by the term `jQuery` and the alias dollar sign `$`, and

- We have subsequently chained the jQuery object method `noConflict` to the `jQuery` function.

- Next, we have simply equated the method `noConflict` now *chained* to the to the value of the global variable `job` ... AFTER

- Embellishing the `jQuery` function with the `document` node as parameter to the`jQuery.noConflict()` argument coupled with the `ready` method of the jQuery object.

- Then we placed an [AFW](https://){:title='Anonymous Function Wrapper'}{:target='_blank'} as the parameter to the solo argument of the `job` function.

## EL Labirinto (The Labyrinth)

Now that we have taken you, dear reader, through the opening of the Labyrinth that is the `jQuery` object ...

Let's take it for a spin!

### Execution

Let's craft a simple Javascript program that will accept our new `job` variable.

Simply highlight and copy the following code with your mouse or touchpad via `command + C`, and

- Paste the code into your Javascript console over at an open Chrome browser window.

**Note**. You must first expose the Chrome Developer Toolset, or [CDT](https://){:title='Chrome Developer Toolset'}{:target='_blank'} to invoke the Javascript console command line via a Chrome browser window.

Finally, via `command + V`, paste the code into your Javascript console command line, and

- Hit the `enter` key to execute.

```javascript
{% raw %}
"use strict";
// As of ES7 the Global use of the strict string pragma is recommended
// Set the local variable
// let job = jQuery.noConflict(document).ready;
// Set the global variable
var job = $(document).ready;
// Construct the function
job(function($){
  // Wait for the "DOM is complete" message from the Html parser
  return console.log(`The Html has been parsed ➡️
  The DOM has been rendered ➡️
  We can now go to work.`)
});
{% endraw %}
```

**Note**. We have had to remove the `.noConflict()` method from the chain of events in order to equate the `var` with the namespace `job`.

Does not jQuery version 3.3.1 possess a `.noConflict()` method in the Labyrinth of the newest and resident jQuery object?

Or, has the jQuery `.noConflict()` method been deprecated?

### Safer Coding

Without the worry of the alias dollar sign `$` being used by another program to inadvertently create collisions, our global variable `job` now sits within our our `jQuery` Labyrinth *hidden*, but accessible.

## Last Subtitle

More to come ...

***

**Note**. The above synopsis was derived from a book written by Jonathan Chaffer [[1](#JQUERY4TH){:.red}] and Karl Swedberg [[2](#KSWEDBERG){:.red}].

1. {:#JQUERY4TH}[Learning jQuery: 4th Edition](https://www.it-ebooks.info/){:title='Click to Visit the Landing page for Learning jQuery, 4th Edition by Jonathan Chaffer and Karl Swedberg'}{:target='_blank'} by Jonathan Chaffer and [[Karl Swedberg](#KSWEDBERG){:.red}]. Published by © 2007 - 2013 [PACKTpub.com](https://www.packtpub.com/){:title='Click to Visit the Home page of Packt Pub dot com'}{:target='_blank'}.

1. {:#KSWEDBERG}[Gmail: Karl Swedberg](Mailto:kswedberg@gmail.com?subject=[Learning jQuery, 4th Edition ...]&body=Hello Karl: I want to thank you for writing Learning jQuery, 4th Edition with Jonathan Chaffer. I have cited your work at my rendition of the 'jQuery Lessons Project' at GitHub Pages ... Robert. C=> //rwebaz.github.io/jQuery-Lessons-Project/pages/Ready-jQuery.md){:title='Click to Launch your designated system email program to send a fully populated electronic letter to the Gmail address of Karl Swedberg'}

***

{% include patreon-link.md %}
