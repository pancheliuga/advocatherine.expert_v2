---
eleventyNavigation:
  key: Блог
  order: 6
title: Блог адвоката
subtitle: Катерини Панчелюги
description: Мої дописи, публікації та статті на правову тематику
layout: blog
pagination:
  data: collections.posts
  size: 6
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---
