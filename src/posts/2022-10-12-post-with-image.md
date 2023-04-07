---
title: 'Post with an image '
date: 2022-10-12
tags: ['Culture', 'Design Thinking']
---

This starter uses Eleventy's build-time image transformations. Find more info on https://www.11ty.dev/docs/plugins/image/ and edit settings in `config/shortcodes/imagePlaceholder`.

Syntax:

{% raw %}

```
{% imagePlaceholder "path to image", "alt text", "caption - optional" %}
```

{% endraw %}

## Image with caption

{% imagePlaceholder "./src/assets/images/certificates/00.jpg", "Alt... The preview image for social media", "Caption.. An interesting caption.", "(min-width:30em)  50vw, 100vw" %}
