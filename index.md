---
path: "posts/2019-09-06-my-buggy-js"
date: "2019-09-06"
title: "My Buggy JS Code Recorder"
tags: ['post']
excerpt: "My Buggy JS Code Recorder"
---

#### Floating-Point Arithmetic doesn't give exact result

```
0.1 + 0.2 === 0.3  \\false
```
A solution in JS

```
parseFloat((0.1 + 0.2).toFixed(10)) 

```
Will return 0.3

Reading: 

https://stackoverflow.com/questions/588004/is-floating-point-math-broken/51723472#51723472

https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html

------

