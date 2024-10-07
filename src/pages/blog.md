---
eleventyNavigation:
  key: Блог
  order: 7
title: Блог
layout: blog
pagination:
  data: collections.posts
  size: 6
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
---

Мої дописи, публікації та статті на правову тематику
