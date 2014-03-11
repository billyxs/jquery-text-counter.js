jquery-text-counter.js
======================

jQuery plugin to limit the amount of characters for a textarea

> Apply the plugin to your textarea form element and the user will only be able to add characters up to the limit specified.  A counter will be added in the label preceding the textarea inside of the container where the textarea is found

#### SMS Textarea Counter - default 160 character limit
		$('.text-counter').textcounter();

#### Customized Counter
> Twitter customized counter, with user defined class, container, prefix and suffix
```javascript
		$('.text-counter').textcounter({
			limit: 140,
			class: "textarea-limit-custom",
			container: $('#limitBox'),
			prefix: "(",
			suffix: ")"
		});
```