# Psi Upsilon (AO)
## Summary
This site is for the Psi Upsilon Fraternity at NJIT. 

This package utlizes 3 other modules; [Hugo][hugo], [GraphCMS][graphcms], and [Netlify][netlify]. Hugo is a static site generator, with a given content and a dedicated or choosen theme, we can generate a static version of our site ready for deployment. GraphCMS is a headless Content Managment system. We're using it's remote accesibility to easy access and change the information and thumbnails displayed on the brothers page. Finally everything is hosted on Netlify. 

[hugo]: https://www.gohugo.io "Hugo"
[graphcms]: https://graphcms.com 
[netlify]: https://netlify.com

## Installation

---

First step is to install Hugo to ensure that you can develop and test the site locally.
Verify the installation by the following command

    hugo version

Next you can clone this repo and manipulate it as you please

    git clone ...

## Configuration

### ***What in the  hell is all this?***

You might be asking yourself "*What in the hell is all this?*". and that is completely understandable. This is all hell...ish   

Before you can start changing anything you must understand how this all works. And before you steer away towards SquareSpace or any other website-builder and CMS', remember that this gives us the freedom and capabilities to do as we please. Plus it's far cheaper that we only need to buy the domain name instead of any hidden hosting costs. 

### ***Actual Configuration***

Hugo creates the final site by combining the content, which lies under the content folder, with their corresponding templates, which lies under the templates folder (Most templates are under the theme labeled 'pisu-warrior').  
