# NASSA Hub

Homepage of the **_Network for Agent-based modelling of Socio-ecological Systems in Archaeology (NASSA)_**

View site at: https://archaeology-abm.github.io/NASSA-hub

## For bloggers

To write and publish a blog post, authors should add a markdown file to `NASSA-hub/_post` named under the convention "YYYY-MM-DD-titleWithNoSpaces_post.md" and whose content follows the structure:

```markdown
---
title: "Post title"
date: 1955-12-01
author: "Name Surname"
author_github: "username-in-github"
description: "This is my first post!"
image_src: "image.png"
layout: post
---

# Post header

Write here a free-text body of your post. To better understand markdown, we recommend consulting resources online such as [Adam Pritchard's Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Note that GitHub-flavoured markdown accepts also HTML. 

It is a good idea to display one or more images to your post, at least the one used as thumbnail referenced in `image_src`. After being added to "NASSA-hub/assets/", an image can be displayed in markdown:

![image title (optional)](https://archaeology-abm.github.io/NASSA-hub/assets/imageExampleName.png)

or in HTML, through which it can, for example, be made a link:

<a href="https://archaeology-abm.github.io/NASSA-hub/assets">
    https://archaeology-abm.github.io/NASSA-modules
    <br>
    <img src="https://archaeology-abm.github.io/NASSA-hub/assets/imageExampleName.png" alt="Image alternative text" width="400"/>
</a>
```

Important things to notice:

- `title` can be different from the markdown header. Both can also be different from the title in the markdown file name, which is only used as a aid to developers.  
- The post will be displayed in the list of posts in chronological order. Therefore, the date in the markdown file name and the field `date` should match and be relevant to the content (e.g., a few days after an event), not necessarily the creation or last edit of the post.  
- Adding a GitHub username in `author_github` is also not compulsory. However, doing so will have the username profile image or avatar being displayed next to the author name.  
- `description` is a short description or teaser sentence. It will be shown together with the title and thumbnail image in the list of posts.
- `image_src` should contain the file name with extension of the image to be used as the thumbnail image related to this post. The image should be present inside "NASSA-hub/assets/". Although highly desirable, it is not compulsory to have a thumbnail image and `image_src` can be empty or absent.  
- When a new post is commited to "Archaeology-ABM/NASSA-hub", GitHub actions will be triggered to create its corresponding webpage. If necessary, further modifications can be made. If all instructions above are followed, there should be no need to render the webpage locally (see below) in order to test it.

## For developers

This website is rendered via [Jekyll](https://jekyllrb.com) as a [GitHub pages](https://pages.github.com/) website.

To get a local working environment for easy development you can follow the steps outlined [here](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll) and run `bundle exec jekyll serve --livereload` for a dynamic preview of the website at http://127.0.0.1:4000. We recommend installing ruby through [rbenv](https://github.com/rbenv/rbenv).

The GitHub pages environment is simulated locally with [this gem](https://github.com/github/pages-gem) specifically written for this purpose.

