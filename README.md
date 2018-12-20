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

Work in progress types are in the projects tab up top.