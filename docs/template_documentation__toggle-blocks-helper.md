
## Use toggle-blocks.js

``` dev\js\helpers\toggle-blocks.js ```

This script used:

1. Class ```minimized``` for hidden styles of block
2. Class ```active``` for active styles of button
3. Create callbacks for actions show, hide or toggle

Example using

HTML:

```

<button type="button" class="button-toggle" data-target-block=".my-block">toggle trigger</button>
<button type="button" class="button-show" data-target-block=".my-block">show trigger</button>
<button type="button" class="button-hide" data-target-block=".my-block">hide trigger</button>

<div class="my-block"></div>

```

JS callbacks:

```
// callback after your block is shown
$('.my-block').on('showBlock', function(){
	// your code...
});

// callback after your block is hidden
$('.my-block').on('hideBlock', function(){
	// your code...
});

```