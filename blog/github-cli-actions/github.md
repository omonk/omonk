---
title: 'Combining Github PR Easter Egg with bash scripts for ultra smooth transitioning'
path: '/blog/github-pr-easter-eggs-and-bash-scripts'
tags: ['Github', 'Developer Experience', 'Automation']
date: '2019-10-6'
publish: false
---

```bash
#!/bin/bash
cd /Users/olliem/sites/MobileWeb

read ISSUE_ID < <(git branch 2> /dev/null | sed -n '/\* /s///p')

Open -a "Google Chrome" https://github.thetrainline.com/Tango/MobileWeb/pull/${ISSUE_ID}
```
