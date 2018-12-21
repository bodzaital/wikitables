# wikitables

[![project status](https://img.shields.io/badge/status-in_development-yellow.svg)](#)
[![license](https://img.shields.io/github/license/bodzaital/wikitables.svg)](https://github.com/bodzaital/wikitables/blob/master/LICENSE)

A small Css and Js framework to create Wikipedia-styled infoboxes.

## Basic usage

```html
<table class="infobox [type]">
	<!-- Place rows here. -->
</table>
```

`[type]` can be either nothing for basic infoboxes, or:

- `royalty`:
	- example: `<table class="infobox royalty">`
	- changes header color
	- adds the `in-office` class alongside `section-header` for "in office: [from] - [to]" boxes

- `country`:
	- example: `<table class="infobox country">`
	- changes column width to equal 50%
	- Adds `flag-and-seal` and `vertical` row types
	- Adds `remove-border` class that removed the bottom border of rows
	- Miscellaneous helper classes (unstyles lists, list headers, etc.)

Work in progress types are in the projects tab up top.

## wikitables.js

If you add certain classes, the script file will add additional elements into the infobox.

- External links (`<a href="" class="external">`) will get a small image added to the end.
- Coordinates (`<span class="coordinates">`) will get a small globe added to the beginning.
- Positive or negative changes, as well as steady values will get arrows:
	- `pos-inc`: positive incready, green arrow up
	- `pos-dec`: positive decrease, green arrow down
	- `neg-inc`: negative increase, red arrow up
	- `neg-dec`: negative decrease, red arrow down
	- `steady`: blue bar indicating no change