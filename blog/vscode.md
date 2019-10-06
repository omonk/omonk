---
title: 'VSCode - Making CSS snippet expansion work in CSS-in-JS template literals'
path: '/blog/vscode-css-snippets-expansion-in-css-in-js-template-literals'
tags: ['vscode', 'css-in-js', 'snippets']
---

Recently whilst working on a site using styled-components I got tired of writing things like:

```javascript
`padding-top: ${({theme}) => theme.space[3]}``
```

### All. The. Time.

So as a lot of people do, snippets to the rescue! As I was working within a JS file, I fired up `~/../snippets/javascript.json` to decalare a few snippets that will invariably save me time, money and sanity:

```json
{
  "styled padding bottom": {
    "prefix": "spb",
    "body": "padding-bottom: ${({theme}) => theme.space[$1]};"
  }
}
```
