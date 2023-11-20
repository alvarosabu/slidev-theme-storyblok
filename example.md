---
theme: ./
highlighter: shiki
layout: intro
themeConfig:
  presenter: 'Alvaro Saburido'
  presenterTitle: 'DevRel Engineer'
  presenterAvatar: 'https://res.cloudinary.com/alvarosaburido/image/upload/v1690529819/avatar_storyblok.png'
  presenterEmail: 'alvaro.saburido@storyblok.com'
---

# Storyblok Slidev Template

Presentation slides for DevRels

---
layout: cover
---

# Storyblok Slidev Cover

Presentation slides for DevRels

---
layout: presenter
---

Author of this template

Content Creator

<div class="grid grid-cols-4 mt-24">
  <div class="flex flex-col items-center border border-gray-100 p-4 rounded shadow-lg important-text-sm">
    <img src="https://tresjs.org/logo.svg" class="w-full mb-4"/>
    <SbTag label="TresJS" />
  </div>
</div>

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage


Read more about [Why Slidev?](https://sli.dev/guide/why)


---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

### Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

---

# Code

Use code snippets and get the `highlighting` directly!

```html
<script setup lang="ts">
const story = await useAsyncStoryblok(
  'home',
  { version: 'draft' },
)

</script>
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
```

---
layout: image-right
image: https://a.storyblok.com/f/172000/1000x1170/f92915eac0/astronaut.jpg/m/1000x1250
---

## Image Right

Shows an image on the right side of the screen, the content will be placed on the left side.

### Usage

```md
---
layout: image-right

# the image source
image: ./path/to/the/image

---
```

---
layout: image-left
image: https://a.storyblok.com/f/172000/1000x1170/f92915eac0/astronaut.jpg/m/1000x1250
---

## Image Left

Shows an image on the left side of the screen, the content will be placed on the right side.

### Usage

```md
---
layout: image-left

# the image source
image: ./path/to/the/image

---
```

---
layout: section
---

# New Section
## And it's gonna be awesome!

---
layout: text-window
---

# Consoles `text-window`

Use code snippets and get the highlighting directly into a nice looking window!

::window::

```ts
// main.ts

import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: ["@storyblok/nuxt"],
  storyblok: {
    accessToken: "<your-access-token>"
  }
});
```

---
layout: two-cols
---

# Two Columns

This is how two cols work

::right::

```html
<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-6xl font-bold">
      Hello, Slidev!
    </h1>
  </div>
</template>
```

---
layout: end
---

# Thank you!