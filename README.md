# gradgeomtopo
Source for UIUC Graduate Geometry Topology Seminar

This website is built using Astro, a modern static site generator. The source
code is available in this repository, and the website is deployed at
https://gradgeomtopo.web.illinois.edu.

# Installing, running locally, and deploying.

This is a standard Astro project. To install dependencies, run `npm install` in
the project root. `npx astro build` and `npx astro check` are good for checking
if the website works. To run locally, use `npx astro dev` and navigate to
http://localhost:3000.

There is an `npm` action for deploying to the host server: call `npm run
build:deploy`. This will build the website and then copy the built files to the
server using `ssh`. You will need to have `ssh` set up to connect to the server,
and you will need permission to write to the server directory.

# Adding talks and content.

Talks are sorted by year in the directory `src/content/talks`. Each talk is a
markdown file with frontmatter that specifies the title, speaker, date, and
other information. The content of the talk can include markdown and math (using
KaTeX). The website will automatically generate pages for each talk and list
them on the main page.

There are also the files `src/content/pages/info.mdx` and
`src/content/pages/upcoming.mdx`. The former is a description of the seminar,
and the latter is currently a manually-entered table of upcoming talks.

Extra data about the website is stored in `src/data/site-config.ts`. This
includes the seminar's name, the location and time of the talks, and the contact
information for the seminar. This data is used in various places on the website,
such as the header and footer.

## The difference between markdown and mdx files.

The website supports both markdown and mdx files. MDX files are an extension of
Markdown which supports embedded Javascript (JSX). This is useful for, among
other things, grabbing site data and rendering it without writing HTML by hand.

## Further customization.

This is still just an Astro website, the other files control layout and
automated generation of pages.

# Contact info.

If you have any questions or suggestions, please contact the seminar organizer.