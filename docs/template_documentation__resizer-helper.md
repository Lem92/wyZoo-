## Use resizer.js

``` dev\js\helpers\resizer.js ```

1. Match the variables in bootstrap breakpoints and resizer.js [example screenshot](http://take.ms/igcZQ)
2. Example using events

```

// one time in md-breakpoint
$("body").on('resize_md_once', function () {
	// your code...
});

// every time in xs-breakpoint
$("body").on('resize_xs', function () {
	// your code...
});

// multiple breakpoints
$("body").on('resize_lg_once resize_md_once resize_sm_once resize_xs resize_xx', function () {
	// your code...
});

```