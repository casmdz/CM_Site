# Professional Resume Website

In this project, I wanted to create a simple, flexible, one-page site that will be used in the real world by my client. It is my first time exploring Sanity.io in order to manage my content and update data outside the localhost, and without distrubing the front end styling. 

I've also shown use of functional components, SCSS and Flex, and animations with Framer motion. The site also has mobile devices in mind, and recomendations for optimizations are welcome! Check out my profile on github to contact me.

Check out the deployed production of this site on Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/95bc3987-9993-4aba-83a1-d3221ead9a9c/deploy-status)](https://claudia-mendez-portfolio.netlify.app)

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

One insight is that my main browser is a fork of Firefox, and I made fixes to the app much in advance in order to work well on Chrome. So, there's a possibility of lingering issues between browsers. 

- Sanity image gallery schema, code from [Jan Hoogeveen](https://www.sanity.io/schemas/image-gallery-dea386ba).

- colors https://simplicable.com/colors/ 

- [Tilt Card](www.hover.dev/components/cards#hover-tilt-card) Framer motion animation. Animation is optimized for browser performance. Element has drag animation for mobile use.

- [React vertical timeline](https://stephane-monnot.github.io/react-vertical-timeline/#/) used in work experience section.

- Gallery uses [React Slick](https://react-slick.neostack.com/) for a responsive carousel component. Took a lot of fiddling around to see if it looked good on smaller displays.

- CSS Media Queries information: [[Link 1]](https://weekendprojects.dev/posts/which-responsive-media-query-breakpoints-should-you-use/) [[Link 2]](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

- Site icon from [icon-icons.com](https://icon-icons.com/icon/book-pen-food-education/114955)


#### `cool react vscode shortcuts`
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

Then open [http://localhost:3000/](http://localhost:3000/) to see the app.<br>



## License

I'm not offering a license or anything. My backend data and changes to it can only be modified by myself. 

um

Copyright (C) 2024 Tiare Mendez
