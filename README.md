# wikitables

[![project status](https://img.shields.io/badge/status-in_development-yellow.svg)](#)
[![milestone version 2](https://img.shields.io/badge/milestone-2-lightgray.svg)](#)
[![apache 2 license](https://img.shields.io/github/license/bodzaital/wikitables.svg)](https://github.com/bodzaital/wikitables/blob/master/LICENSE)

**A small CSS and Javascript framework to imitate a Wikipedia infobox.**

Include `dist/wikitables.css` into your HTML file. If you want to use dynamic features (like adding a globe icon for coordinates or images for external links), include `wikitables.js` as well.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Wikitables</title>
    <link rel="stylesheet" href="wikitables.css">
</head>
<body>
    <table class="infobox">
        <!-- Place rows here. -->
    </table>

    <script src="wikitables.js"></script>
</body>
</html>
```

This was made to help worldbuilders with showing Wikipedia-like information without going through and editing the source inside Inspect Element. Minimal HTML knowledge is required. In the future, I'll write an interactive infobox builder that can export the whole table as an image. A better docs will also follow once the project has more in it.

Only tables with the "infobox" class are styles, so in theory, this framework should work with most others. There are some known misalignments with Bootstrap 4 which will be fixed in a future release.

This framework is not mobile friendly, it will not resize itself on small screens, but that was never the plan.