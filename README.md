# Professional Resume Website

In this project, I wanted to create a simple, flexible, one-page site that will be used in the real world by my client. It is my first time exploring Sanity.io in order to manage my content and update data outside the localhost, and without distrubing the front end. 

I've also shown use of functional components, SCSS and Flex, and animations with Framer motion. The site also has mobile devices in mind, and recomendations for optimizations are welcome! Check out my profile on github to contact me.

[![Netlify Status](https://api.netlify.com/api/v1/badges/95bc3987-9993-4aba-83a1-d3221ead9a9c/deploy-status)](https://app.netlify.com/sites/claudia-mendez-portfolio/deploys)

This project was started with [Create React App](https://github.com/facebook/create-react-app).

The backend is powered by [Sanity.io](https://www.sanity.io/) 

## Dependencies

`@sanity/client`  
`framer-motion`  
`react-icons`  
`sass`  
`react-vertical-timeline-component`  
`react-slick`  
`slick-carousel` 


## Extra References

One insight is that my main browser is a fork of Firefox, and I made fixes to the app much in advance in order to work well on Chrome. So, maybe it doesn't look as great. 

- Sanity image gallery schema, code from [Jan Hoogeveen](https://www.sanity.io/schemas/image-gallery-dea386ba).

- colors https://simplicable.com/colors/ 

- [Tilt Card](www.hover.dev/components/cards#hover-tilt-card) Framer motion animation. Animation is optimized for browser performance. Element has drag animation for mobile use.

- [React vertical timeline](https://stephane-monnot.github.io/react-vertical-timeline/#/) used in work experience section.

- Gallery uses [React Slick](https://react-slick.neostack.com/) for a responsive carousel component. Took a lot of fiddling around to see if it looked good on smaller displays.

- CSS Media Queries information: [[Link 1]](https://weekendprojects.dev/posts/which-responsive-media-query-breakpoints-should-you-use/) [[Link 2]](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

- Site icon from [icon-icons.com](https://icon-icons.com/icon/book-pen-food-education/114955)


#### `shortcuts`
```js
rxc 
edf 
exd 
rface
```

<!-- 
todo
in navbar, make the display sizes consistent when hamburger bar appears
svg https://shapes.framer.website/
 -->


 ## Sanity Content Lake API 
 It's important to stay up to date with any changes to Sanity.io, they might find it necessary to make breaking changes. 

- How to handle versioning in the API - [API versioning](https://www.sanity.io/docs/api-versioning) 

- Looking for the latest changes? [Changelog](https://www.sanity.io/changelog)

## React Quick Overview

```sh
cd frontend_react
npm start
```
If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, we recommend you uninstall the package using `npm uninstall -g create-react-app` or `yarn global remove create-react-app` to ensure that npx always uses the latest version.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>



## License

I'm not offering a license or anything. My backend data and changes to it can only be modified by myself. 

um

Copyright (C) 2024 Tiare Mendez
