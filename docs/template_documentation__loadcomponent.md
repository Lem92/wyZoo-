## Use loadComponent function

example using in main.js:
```
loadComponent({
	name: '.js-myblock', // selector, which is checked for availability
	req: ['js-my-component-script', 'plugin-1', 'plugin-2'] // require components list. First your script, other - required plugins.
});
```

---

example for code structure of js-my-component-script.js

```
define(function(require, exports, module) {
	// Put traditional CommonJS module content here
	var init = function(elem, args){
		// Your code
		// elem - your block (jQuery object) from "loadComponent name"
		// args - array of requirejs returns from components list in "loadComponent req"
	};

	return init;
});

```
