---
title: Ready jQuery
layout: default
navigation_weight: 8
---
# Ready jQuery

Confirmation must be received in the form of a message BEFORE an event can fire in jQuery.

{% include toc-flammarion.md %}

## Document On Load

The following long-cut checks to make sure the DOM *excluding* images and iframes has been loaded before acting ...

```javascript
{% raw %}
$(document).ready
{% endraw %}
```

**Note**. Where the dollar sign `$` is an *alias* for the jQuery Object `jQuery`.

### Short-cut Anyone

The following short-cut in jQuery optionally replaces the `$(document).ready` statement ...

- with a single dollar sign `$` aka "The Alias", and

- a set of parenthesis to capture an argument

As follows,

```javascript
{% raw %}
$()
{% endraw %}
```

## Window On Load

Likewise, the following long-cut checks to make sure the entire page *including* images and iframes has been loaded before acting ...

```javascript
{% raw %}
$(window).load
{% endraw %}
```

**Note**. There is no short-cut in jQuery to replace the `$(window).load` statement.

For example, the following code waits for confirmation from the window Object upon total *load* ...

- Then, fires off an Anonymous Function Wrapper, or [AFW](https://){:title='Anonymous Function Wrapper'}{:target='_blank'} as argument to the *load* method

```javascript
{% raw %}
$(window).load(function(){
  console.log(`The page is now fully loaded. The Html has been parsed. ➡️
  The DOM has been rendered.
  All of the assets of the page have been uploaded to the browser.
  We can now go to work.`)
});
{% endraw %}
```

Similarly, the following code waits for the confirmation message from the Html parser via the document Object ...

And, upon DOM *ready* ...

- Fires off an Anonymous Function Wrapper, or [AFW](https://){:title='Anonymous Function Wrapper'}{:target='_blank'} as argument to the *ready* method, as follows:

```javascript
{% raw %}
$(document).ready(function(){
  console.log(`The Html has been parsed. The DOM has been rendered. ➡️ 
  All of the assets of the page (perhaps) ...
  Are still in the process of being uploaded to the browser ...
  Depending on their weight and bandwidth.
  The page is most probably now NOT fully loaded.
  But, nevertheless ... we can go to work.`)
});
{% endraw %}
```

### Anonymous Function Wrappers

Both of the long-cuts shown above and by extension the single short-cut ...

- Place an Anonymous Function Wrapper, or [AFW](https://){:title='Anonymous Function Wrapper'}{:target='_blank'} next inline as an argument that fires when the respective condition is met, as follows:

```javascript
{% raw %}
(function() {});
{% endraw %}
```

**Note**. An [AFW](https://){:title='Anonymous Function Wrapper'}{:target='_blank'} can be the parameter that fills the single set of parenthesis as argument to the jQuery short-cut `$()` shown above.

## Collisions

*Roll Ur Own* to avoid collisions.

Isn't that an oxymoron.

But, you can ... with jQuery.

If the short-cut `$()` can be used to replace `$(document).ready`, then why not we?

First, let's set the corresponding global variable and hope no other namespace pollutes ours ...

```javascript
{% raw %}
var Medmj = jQuery.noConflict();
{% endraw %}
```

Now, let's plug the var `Medmj` into our jQuery Object `jQuery` from above, running with the following algebraic steps ...


1. `$() = $(document).ready()`

1. `Medmj() = jQuery.noConflict()`

1. `$() = jQuery()`

1. `jQuery = $`

1. `$(document).ready() = Medmj()`

**Note**. Where `noConflict` is simply a *chained* method of the jQuery Object `jQuery`.

Yields,

```liquid
{% raw %}
Medmj(function() {});
{% endraw %}
```

What have we done?

In a nutshell ...

- We have replaced back the jQuery Object `jQuery` for the alias dollar sign `$`, and

- Subsequently chained the method `noConflict` to the jQuery Object `jQuery`.

- Next, we have simply equated the jQuery Object `jQuery` now coupled with the method `noConflict` with the value of the global variable `Medmj`.

**Note**. Where the method `noConflict` is a resident of the jQuery Object `jQuery` and the now global variable `Medmj` sits and waits for the "DOM is built" message from the Html parser via the underlying `(document).ready` method.

## EL Labirinto (The Labyrinth)

Now that we have taken you, dear reader, through the Labyrinth that is the jQuery Object `jQuery` ...

Let's take it for a spin!

```javascript
{% raw %}
// Set the global variable
var Medmj = jQuery.noConflict();
// Construct the function
Medmj(function() {
  console.log("That's a lot of steps eliminated!")
});
// Wait for the "DOM is complete" message from the Html parser
{% endraw %}
```

### Safer Coding

Without the worry of the alias dollar sign `$` being used by another program, our global variable `Medmj` now sits within our jQuery Object `jQuery` labyrinth *hidden*, but accessible.

## Last Subtitle

Place the introducing line of text ie.) the 'tagline' here ...

```liquid
{% raw %}
Enjoy the successful output!
{% endraw %}
```

{% include brackets-ide.md %}

{% include sources-and-uses.md %}

### External Sources

- The [Project Source Links](https://mminail.github.io/jQuery/Source-jQuery-Links.htm){:title="Click to Visit the Source Links page of the jQuery Lessons Project at GitHub pages"}{:target="_blank"} page of the jQuery Lessons Project. Published by © 2017 - 2018 [Mminail.github.io](https://mminail.github.io/){:title="Click to Visit the Concept Library of the Medical Marijuana Initiative of North America - International Limited, an Arizona Benefit Corporation"}{:target="_blank"}.
