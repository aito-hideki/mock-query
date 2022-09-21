# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Project description

### How to setup

- install netlify cli globally by `npm i netlify-cli -g`
- `yarn install` or just `yarn` to install dependencies
- Run `netlify dev` to run netlify functions and app locally

### How to use

- You can enter whatever the dummy information in the server config dialog to get started.
- You enter some random query and click on `Submit` button.
- It will grab some random information from the mock API and show on the right panel.
- They are all randomly generated on the Netlify funciton.
- If you wanna change the server config, you can click on `Connect Database` to edit server information.

## Technologies used in the project

My focus was more on adding technologies that helps building scalable apps.

- Vue 3(with Vue Composition API), Vite, TypeScript  
I am a fan of Vue3, TypeScript, Vite.  
TL;DR  
Vue 3 definitely has a lot of improvement over Vue 2.  
Vite has 0 secs HMR time, so it's very helpful for development.  
TypeScript provides strict type checking, so we can avoid a lot of type errors and we can build things easily within the help of intellisense.

- Auto routing, Auto component management  
The bigger the project gets, the messier the route config gets.
So, auto routing is always helpful when it comes with scalability.  
Same for component management.
The bigger the project gets, the more dependencies between components we will have.
That's why a lot of people love Nuxt that provides auto component management.  
But we can simply do those things with these 2 libraries.

- ESLint, CommitLint  
Linting is always important to get project organized.
But before we going forward with linting, we need to make sure that we confirmed linting presets or rules.
I used vue community recommneded presets and some more custom rules for ESLint.

- WindiCSS  
WindiCSS is a utility-first CSS framework and is similar to TailwindCSS.
It's compatible with TailwindCSS v2.0 and has more powerful features like shortcuts.

- Netlify functions to mock API  
Used Netlify functions to mock API because it's used for only mocking purpose.
