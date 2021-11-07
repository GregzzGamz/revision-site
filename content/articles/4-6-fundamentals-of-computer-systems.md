---
title: Fundamentals of computer systems
unit: 4.6
description: Logic gates - NOT, AND, OR, XOR, NAND, NOR, truth tables, boolean expressions, adders, half adders
---

## 4.6.4 Logic Gates


#### NOT Gate
A not gate is used to invert the input signal
<square-image class="w-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/NOT_ANSI_Labelled.svg/120px-NOT_ANSI_Labelled.svg.png"></square-image>

<table class="table-fixed">
  <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Views</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Intro to CSS</td>
      <td>Adam</td>
      <td>858</td>
    </tr>
    <tr class="bg-emerald-200">
      <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
      <td>Adam</td>
      <td>112</td>
    </tr>
    <tr>
      <td>Intro to JavaScript</td>
      <td>Chris</td>
      <td>1,280</td>
    </tr>
  </tbody>
</table>


<div class="flex flex-row">
  <square-image class="w-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/NOT_ANSI_Labelled.svg/120px-NOT_ANSI_Labelled.svg.png"></square-image>
    <div>
      <h4>AND Gate</h4>
      <p>AND gates have two inputs, say A and B. The result Q is A * B</p>
    </div>
</div>

<div class="flex flex-row">
  <square-image class="w-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/OR_ANSI_Labelled.svg/120px-OR_ANSI_Labelled.svg.png"></square-image>
    <div>
      <h4>OR Gate</h4>
      <p>In the same way that AND multiplies its inputs, OR adds them together</p>
    </div>
</div>

<div class="flex flex-row">
  <square-image class="w-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/XOR_ANSI_Labelled.svg/120px-XOR_ANSI_Labelled.svg.png"></square-image>
    <div>
      <h4>XOR Gate</h4>
      <p>The XOR gate’s full name is exclusively or and it outputs TRUE when strictly one of its
inputs is TRUE</p>
    </div>
</div>

<div class="flex flex-row">
  <square-image class="w-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/NAND_ANSI_Labelled.svg/120px-NAND_ANSI_Labelled.svg.png"></square-image>
    <div>
      <h4>NAND Gate</h4>
      <p>NAND is short for NOT AND</p>
    </div>
</div>

<div class="flex flex-row">
  <square-image class="grid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/NOR_ANSI_Labelled.svg/120px-NOR_ANSI_Labelled.svg.png"></square-image>
    <div>
      <h4>NOR Gate</h4>
      <p>NOR, short for NOT OR is a combination of the two logic gates NOT and OR</p>
    </div>
</div>


Not gates invert the input signal
Not gates invert the input signal
Not gates invert the input signal
Not gates invert the input signal
Not gates invert the input signal
Not gates invert the input signal
Not gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signalNot gates invert the input signal

## 4.6.5 Boolean algebra

Static Hosting
Nuxt also works as a static site generator. Statically render your Nuxt application and get all of the benefits of a universal app without a server. The nuxt generate command will generate a static version of your website. It will generate HTML for every one of your routes and put it inside of its own file in the dist/ directory. This improves performance as well as SEO and better offline support.

Dynamic routes are also generated thanks to the Nuxt Crawler
For static sites the target of static needs to be added to your nuxt.config file.

nuxt.config.js
export default {
target: 'static' // default is 'server'
}

Running nuxt dev with the static target will improve the developer experience:

Remove req & res from context
Fallback to client-side rendering on 404, errors and redirects see SPA fallback
$route.query will always be equal to {} on server-side rendering
process.static is true
We are also exposing process.target for module authors to add logic depending on the user target.
Server Hosting
Server hosting means running Nuxt on a Node.js server. When the user opens your page, their browser will request that page from the server. Nuxt will handle the request, render the page and send back the resulting page with all its content.

You might need server hosting if you want to render HTML on each request rather than in advance at generate-time, or if you need serverMiddleware .

You can still run Nuxt with server hosting with ssr: false but Nuxt will not fully render the HTML for each page - leaving that task to the browser. You might choose this option if you need serverMiddleware but do not want fully server-side rendered HTML.
For server hosting, target: 'server' is used, which is the default value. You will use the build command to build your application.
